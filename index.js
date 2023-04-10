const relay = relayInit('wss://nostr-pub.wellorder.net')


const socket = new WebSocket(relay)
const kinds = [27235]
const limit = 1
const onOpen = () => console.log('onOpen')
const onClose = () => console.log('onClose')
const onError = () => console.log('onError')
const onMessage = () => {
  m()
}

var lastId = 0

sub(socket, kinds, limit, onMessage, onOpen, onClose, onError, lastId)

export function sub(socket, kinds, limit, lastId, onMessage, onOpen, onClose, onError) {
  let isFirstMessage = true
  const messageHandler = event => {
    console.log('Received message:', event.data)
    if (isFirstMessage) {
      isFirstMessage = false
      return
    }
    if (event.id !== lastId) {
      onMessage()
    }
  }
  socket.addEventListener('open', () => {
    console.log('WebSocket connection opened')
    const reqMessage = JSON.stringify(['REQ', 'auth', { kinds, limit }])
    socket.send(reqMessage)
    onOpen()
  })
  socket.addEventListener('message', messageHandler)
  socket.addEventListener('close', event => {
    console.log('WebSocket connection closed with code:', event.code)
    onClose()
  })
  socket.addEventListener('error', error => {
    console.log('WebSocket error:', error)
    onError()
  })
}

