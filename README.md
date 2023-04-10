

<div align="center">  
  <h1>nosdav-pubsub</h1>
</div>

<div align="center">  
<i>nosdav-pubsub</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nosdav/nosdav-pubsub/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/nosdav-pubsub)](https://npmjs.com/package/nosdav-pubsub)
[![npm](https://img.shields.io/npm/dw/nosdav-pubsub.svg)](https://npmjs.com/package/nosdav-pubsub)
[![Github Stars](https://img.shields.io/github/stars/nosdav/nosdav-pubsub.svg)](https://github.com/nosdav/nosdav-pubsub/)

##  Pub-Sub System over Nostr

### Overview:

A pub-sub (publish-subscribe) system over Nostr allows for efficient message distribution across multiple subscribers by leveraging the existing Nostr protocol. This specification aims to outline the design and components of such a system.

#### Components:

![image](https://user-images.githubusercontent.com/65864/230929796-82b7c797-0dae-4f56-9499-d1eb026259f7.png)


- **Publisher**: Entities that create and publish messages (events) to the network.

- **Subscriber**: Entities that subscribe to specific publishers or topics to receive messages.

- **Relay**: Servers that facilitate the exchange of messages between publishers and subscribers.


### Event Structure:

An event in the pub-sub system over Nostr should include the following properties:

-    ID: A unique identifier for the event.
-    Pubkey: The public key of the publisher.
-    Created_at: Timestamp of event creation.
-    Kind: Integer denoting the type of event.
-    Content: The actual message content.
-    Tags: An array of tags to categorize the event or describe its properties.
-    Sig: A signature to ensure the authenticity of the event.

### Subscriptions:

Subscribers can express their interest in specific publishers, topics, or event types by sending subscription requests. These requests should include:

-    Subscriber's public key.
-    List of publisher public keys, topics, or event types they want to subscribe to.

### Pub-Sub Process:

-    Publishers create events and sign them using their private keys.
-    Publishers send the signed events to relays.
-    Relays validate the events, checking signatures and other properties.
-    Relays broadcast the valid events to all subscribers who have expressed interest in the publisher, topic, or event type.
-    Subscribers receive and process the events.

## Delegated Event Signing (Optional):

Delegated event signing allows publishers to delegate the signing of events to other keypairs. This is useful for abstracting the use of 'root' keypairs and enables the generation of new keypairs for each client.

This can be achieved by introducing a new tag, delegation, with the following properties:

-    Delegator's public key.
-    Delegatee's public key.
-    Conditions query string specifying the allowed event types and time constraints.
-    Delegation token (a signature of the sha256 hash of the delegation string).

### Relay & Client Querying Support:

Relays should support querying events based on publisher public keys, topics, or event types. Clients should display delegated events as if they were published directly by the original publisher.

This specification provides a high-level overview of a pub-sub system over Nostr. Implementations can be further refined and optimized based on specific use cases or requirements.


## Additional Features:

-    **Wildcard** Subscriptions: Subscribers can use wildcard patterns to subscribe to multiple publishers, topics, or event types at once, simplifying subscription management.

-    **Unsubscribe** Functionality: Subscribers should be able to unsubscribe from publishers, topics, or event types, either individually or using wildcard patterns.

-    **Event** Retention and History: Relays can implement event retention policies to store historical events for a specified duration. This enables subscribers to query and retrieve past events based on their subscription preferences.

-    **Encrypted** Events: Publishers can encrypt events using subscribers' public keys, ensuring that only intended recipients can access the content of the messages.

-    **Access** Control: Publishers can implement access control mechanisms to restrict subscriptions to specific subscribers based on predefined criteria (e.g., subscriber's public key, reputation, etc.).

-    **Acknowledgments** and Delivery Guarantees: Subscribers can send acknowledgments to publishers or relays when they receive events. This enables publishers and relays to track event delivery and maintain delivery guarantees.

-    **Scalability** and Load Balancing: Multiple relays can be deployed to improve the system's scalability and load balancing. This can be achieved through sharding, partitioning, or clustering of events based on publisher, topic, or event type.

-    **Monitoring** and Metrics: Implementations can include monitoring and metrics capabilities to track the system's performance, event throughput, and other relevant statistics. This information can be used to optimize the system's performance and identify potential bottlenecks.

-    **Error** Handling and Retry Mechanisms: The system should include error handling and retry mechanisms to ensure reliable event delivery. This can involve retries, backoff strategies, and dead-letter queues to store undelivered events.

By incorporating these additional features, the pub-sub system over Nostr can be tailored to specific use cases and requirements, providing a versatile and robust messaging infrastructure.

## Advanced Features:

-    **Event** Filtering: Subscribers can specify filters to receive only the events that match specific criteria, such as content or tags. This helps reduce unnecessary event processing and network overhead.

-    **Quality** of Service Levels: The system can offer different levels of quality of service (QoS) for event delivery, ranging from "at most once" to "exactly once." This allows subscribers and publishers to choose the appropriate level of reliability for their use case.

-    **Authentication** and Authorization: The system can integrate with authentication and authorization mechanisms, allowing publishers and subscribers to securely identify themselves and ensure that they have the required permissions to perform their respective operations.

-    **Rate** Limiting and Throttling: The system can implement rate limiting and throttling mechanisms to control the rate of event publishing and delivery. This helps prevent excessive resource consumption and ensures fair usage among all participants.

-    **Event** Prioritization and Ordering: The system can support event prioritization and ordering, ensuring that high-priority events are delivered before low-priority ones or maintaining the order in which events were published.

-    **Clustering** and High Availability: The system can be designed for high availability, using clustering, replication, or other fault-tolerance mechanisms to ensure continuous operation in the event of failures or downtime.

-    **Extensibility** and Customization: The system can provide an extensible architecture, enabling developers to add custom functionality, such as custom event types, processing logic, or integrations with other systems and services.

-    **Interoperability**: The system can support interoperability with other pub-sub systems or messaging protocols, allowing seamless integration with existing infrastructure and providing a unified messaging platform.

By implementing these advanced features, the pub-sub system over Nostr can cater to a wide range of complex use cases, providing a powerful and flexible messaging solution for diverse applications and environments.



## License

- MIT
