---
id: bfea081d
layout: ../../layouts/MarkdownContainer.astro
title: Computer Networking
description: Networking can be done on various scales, from personal area networks (PANs), through local area networks (LANs), to wide area networks (WANs) spanning across cities, countries, or the entire globe. Networks can be wired or wireless, and they utilize a wide range of hardware and software technologies to facilitate communication and data exchange.
imageUrl: ../../assets/network.png
date: Oct 22, 2023
datetime: "2023-10-22"
category: Documentation
disable: false
---

### The Internet: A "Nuts and Bolts" View

The Internet is a vast, global network, connecting billions of devices, known as "hosts" or "end systems". These devices run network applications that enable various forms of communication and data exchange.

#### Key Components:

- **Hosts/End Systems**: These are the computing devices connected to the internet, such as computers, servers, and mobile devices. They run network applications that allow them to interact with other devices via the internet.

- **Communication Links**: These are the physical or wireless connections that facilitate data transfer between devices. Examples include fiber optic cables, copper wires, radio waves, and satellite links. The speed at which data is transferred over these links is referred to as the "bandwidth".

- **Packet Switches**: These are specialized devices, like routers and switches, that forward "packets" (chunks of data) to their destination. The process of dividing data into packets, transmitting them separately, and reassembling them at the destination is a fundamental concept in network data communication.

### Common Network Commands

Networking involves a variety of commands to configure and troubleshoot network interfaces and connections. Here are some essential commands you should know:

- **`ipconfig`**: This command displays the network configuration details of the current machine. Key details include:

  - **IPv6 address**
  - **IPv4 address**
  - **Subnet Mask** (for determining the network prefix)
  - **Default Gateway** (the first router the host contacts)

  For more detailed information, use `ipconfig /all`, which will also reveal:

  - **Physical address** (the MAC address)
  - **DHCP server** (the server that assigns your IP address)
  - **DNS server** (provides domain name and IP address mapping)

- **`ping`**: This command sends an ICMP echo request to another host. It's used to check if the host is responsive, essentially verifying if there's a connection to the destination.

- **`tracert`**: This command uses multiple ping commands to identify and display the round-trip times for all hosts between a sender and a receiver.

- **`show version`**: This command displays basic hardware and firmware version information.

- **`show running-config`**: This command displays the list of configuration commands that modify the system's default configuration.

- **`show history`**: This command displays the EXEC commands used in that session. Configuration commands are not included.

- **`config terminal...end`**: This command enters the global configuration mode. For example, to configure an IP address and subnet mask, and restart a disabled interface, you would use:

  ```bash
  config terminal
  interface f0/0
  ip address 192.168.0.1 255.255.255.0
  no shut
  end
  ```

- **`show ip interface brief`**: This command displays the usability status of interfaces that are configured for IP.

- **`copy running-config startup-config`**: This command copies the current configuration settings to be the startup configuration.

### Network Protocol

- Network protocols are rule sets for data formatting and processing.
- They serve as a universal language that allows diverse systems to interact.
- Standardized protocols enable communication, similar to a shared language between people of different native languages.
- The ability to communicate depends on both ends using the same protocol. For example, two computers can communicate if both use the Internet Protocol (IP).
- The Internet employs various protocols for different tasks.
- Protocols are typically categorized based on the OSI model layer they fall under.

### OSI Model Layers

- **Layer 7: Application Layer**

  - Handles requested content in required format
  - Protocols include HTTP, SMTP

- **Layer 6: Presentation Layer**

  - Manages data encryption, compression, translation

- **Layer 5: Session Layer**

  - Supervises communication session, including opening and closing
  - Synchronizes data transfer with checkpoints

- **Layer 4: Transport Layer**

  - Oversee segment creation, transport, and reassembly
  - Manages flow control and error control
  - Protocols include TCP, UDP

- **Layer 3: Network Layer**

  - Responsible for packet creation, transport, and assembly
  - Manages data routing
  - Protocols include IP, ICMP, IGMP, IPsec suite

- **Layer 2: Data Link Layer**

  - Manages frame creation and sending frames between networks
  - Handles flow control and error control in intra-network communication

- **Layer 1: Physical Layer**
  - Deals with physical equipment such as cables and switches
  - Handles data conversion into bitstream
  - Manages signal convention agreement for distinguishing 1s from 0s

### Routers vs Switches

#### Switches

- Operate at the Data Link layer of the OSI model (Layer 2).
- Connect devices on a local area network (LAN), such as computers and printers.
- Use MAC addresses to forward data to the correct destination within the LAN.
- Allow for direct, high-speed connections between network devices.

#### Routers

- Operate at the Network layer of the OSI model (Layer 3).
- Connect multiple networks together, including connecting a home or business network to the internet.
- Use IP addresses to determine the best path for forwarding packets.
- Provide additional features like DHCP serving, NAT, static routing, and network firewall protection.

### Delays in Computer Networks

1. **Transmission Delay (Tt)**: The time taken to transmit a packet from the host to the transmission medium.

   - Formula: Tt = L/B
   - L: Data size, typically measured in bits (b).
   - B: Bandwidth, typically measured in bits per second (bps).
   - Tt: Transmission delay, typically measured in seconds (s).

2. **Propagation Delay (Tp)**: The time taken by the last bit of the packet to reach the destination after being transmitted to the transmission medium.

   - Formula: Tp = Distance / Velocity
   - Distance: The length of the medium, typically measured in meters (m).
   - Velocity: The speed of signal propagation, typically measured in meters per second (m/s).
   - Tp: Propagation delay, typically measured in seconds (s).

3. **Queueing Delay (Tq)**: The time a packet waits in a queue (buffer) before being processed at the destination.

   - Queueing delay is highly variable and depends on network traffic, buffer size, and packet arrival rate. It's typically measured in seconds (s), but there's no standard formula to calculate it.

4. **Processing Delay (Tpro)**: The time taken to process the data packet by processors or routers.
   - Processing delay is also highly variable and depends on the speed of the processor and the operations that need to be performed on the packet. It's typically measured in seconds (s), but there's no standard formula to calculate it.

**Total Delay (Ttotal)** is the sum of all these individual delays:

- Formula: Ttotal = Tt + Tp + Tq + Tpro
- Ttotal: Total delay, typically measured in seconds (s).

### Differences Between Routing and Forwarding

**Routing**

- Routing is the process of determining the network path for data to move from the source to the destination.
- It operates on the Network Layer (Layer 3) of the OSI Model.
- Its operation is based on the Routing Table, which holds information about the network topology and available paths.
- It works with routing protocols like Routing Information Protocol (RIP), Open Shortest Path First (OSPF), and Border Gateway Protocol (BGP) among others. These protocols help routers to coordinate with each other to establish the best path for packet transmission.

**Forwarding**

- Forwarding is the process of moving a packet from a router's input interface to the appropriate output interface based on the routing table's information.
- Like routing, forwarding also operates on the Network Layer (Layer 3) of the OSI Model.
- It involves checking the Forwarding Table (derived from the Routing Table) and deciding the next hop for each packet.
- It works with protocols like UDP and Encapsulating Security Payload (part of the IPsec suite for securing IP communications) for moving packets towards their destination.

**Key Differences**

- Routing is a process that determines the optimal path for data transmission, while forwarding is the process of transferring packets along this chosen path.
- Routing involves the analysis and decision-making process regarding which path to use, while forwarding is the actual process of sending the packets along that path based on the decisions made by the routing process.
- Routing is about building a comprehensive map of the network (the Routing Table), while forwarding is about using that map to guide each individual packet to its destination.

### Well Known Port Numbers

| Port Number | Protocol | Service           |
| ----------- | -------- | ----------------- |
| 20          | TCP      | FTP Data Transfer |
| 21          | TCP      | FTP Control       |
| 22          | TCP/UDP  | SSH               |
| 23          | TCP/UDP  | Telnet            |
| 25          | TCP      | SMTP              |
| 53          | TCP/UDP  | DNS               |
| 67          | UDP      | DHCP Server       |
| 68          | UDP      | DHCP Client       |
| 80          | TCP      | HTTP              |
| 110         | TCP      | POP3              |
| 123         | UDP      | NTP               |
| 143         | TCP      | IMAP              |
| 161         | UDP      | SNMP              |
| 162         | UDP      | SNMP Trap         |
| 443         | TCP      | HTTPS             |
| 465         | TCP      | SMTP over SSL     |
| 993         | TCP      | IMAP over SSL     |
| 995         | TCP      | POP3 over SSL     |
| 3389        | TCP/UDP  | RDP               |

### Client-Server Architecture

In a client-server architecture, the system is divided into two components: the client and the server. The server is a centralized system that hosts, delivers, and manages most of the resources and services to be consumed by the client. This can include access to a database, computer files, and devices like printers. The client, on the other hand, requests and uses these services.

**Key Characteristics of Client-Server Architecture:**

- **Centralization:** The server provides services, functionality, or resources, reducing the load on individual clients.
- **Management:** Centralization facilitates easier system management and maintenance from a single location.
- **Scalability:** It's easier to add more clients without significantly affecting performance.
- **Security:** The server, being maintained by professionals and providing a single point of access, often offers more security.

**Server:**

- An always-on host, continuously running to accept and serve requests.
- Possesses a permanent or static IP address to ensure that clients can always access it.
- Typically housed in data centers, which can scale up by adding more servers as demand increases.

**Client:**

- Communicates with the server to request and receive services.
- May be intermittently connected, connecting only when it needs to request a service or receive data.
- May have dynamic IP addresses which change each time they connect to the network.
- Does not typically communicate directly with other clients in a client-server model. All communications are mediated through the server.

**Differences Between Client and Server in this Architecture:**

| Client                                                                        | Server                                                                                           |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Sends requests to the server.                                                 | Waits for and responds to requests from clients.                                                 |
| Often has a user-friendly interface for users to interact with.               | May not have a user interface, focusing instead on processing requests and serving data.         |
| Can be a personal computer, mobile device, or any device that sends requests. | Is typically a powerful, high-capacity machine that can handle multiple requests simultaneously. |
| Does not share resources.                                                     | Shares resources like files, database, applications, etc.                                        |
| The client is not always on and can disconnect after its request is served.   | The server is always on and waiting for requests.                                                |

In this model, a computer can be a client when it requests data from a server, but it can also be a server when it's providing data to other devices. However, if the server fails, services become unavailable to the clients due to the centralized nature of a client-server architecture.

## URL Structure

A URL (Uniform Resource Locator) is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it.

Here's a breakdown of a typical URL structure:

```
https://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2
```

**Scheme:** `https://`

The scheme identifies the protocol to be used to access the resource on the Internet. It can be HTTP (without SSL) or HTTPS (with SSL), FTP, and more.

**Subdomain:** `www`

The subdomain is a subset of the main domain, often used to organize or navigate to specific sections or pages of a website.

**Domain Name:** `example.com`

The domain name is the human-readable address of the website. It is unique to each website.

**Port:** `:80`

The Port number is used to specifically identify points where network services can be accessed. It is often omitted in URLs because most web browsers will use the standard port numbers for HTTP (80) and HTTPS (443) protocols.

**Path:** `/path/to/myfile.html`

The path refers to the specific location within the server, often pointing to a specific page or resource.

**Query String:** `?key1=value1&key2=value2`

The query string is used to send data to the server. It is introduced by a question mark (`?`), and multiple key-value pairs can be separated by ampersands (`&`).

### Difference between Persistent and Non-Persistent Connections

**Non-Persistent HTTP Connections**

In non-persistent HTTP connections, a new TCP connection is established and closed for every single request-response pair. This means that if a web page has multiple resources like images, scripts, and stylesheets, each one requires a separate TCP connection. This is also known as HTTP/1.0.

**Characteristics of Non-Persistent HTTP Connections:**

- Requires 2 Round Trip Times (RTTs) per object.
- Operating System overhead for each TCP connection.
- Browsers often open parallel TCP connections to fetch referenced objects.
- At most one object can be sent over one TCP connection.
- Connection is closed after each object is sent.
- Downloading multiple objects requires multiple connections.

**Advantages of Non-Persistent Connections:**

- Wastage of resources is less because the connection opens only when there is some data to be sent.
- More secure because after sending the data, the connection gets terminated and nothing can be shared thereafter.

**Disadvantages of Non-Persistent Connections:**

- Requires a greater CPU overhead for the transmission of data.
- Increased latency due to the need to establish a new connection for each object.

**Persistent HTTP Connections**

In persistent HTTP connections (also known as HTTP Keep-Alive or HTTP connection reuse), the server leaves the connection open after sending a response. Subsequent HTTP messages between the same client/server are sent over the open connection. This is the default mode of HTTP/1.1.

**Characteristics of Persistent HTTP Connections:**

- The server leaves the connection open after sending a response.
- Subsequent HTTP messages between the same client/server are sent over the open connection.
- The client sends requests as soon as it encounters a referenced object.
- As little as one RTT for all the referenced objects.
- Multiple objects can be sent over a single TCP connection between client and server.

**Advantages of Persistent Connections:**

- Lower CPU and memory usage because of fewer connections.
- Allows HTTP pipelining of requests and responses.
- Reduced network congestion (fewer TCP connections).
- Reduced latency in subsequent requests (no handshaking).
- Errors can be reported without the penalty of closing the TCP connection.

**Disadvantages of Persistent Connections:**

- Resources may be kept occupied even when not needed and may not be available to others.

In summary, non-persistent HTTP connections create a new connection for each request-response pair, whereas persistent HTTP connections reuse the same connection for multiple request-response pairs. The persistent connection reduces the overhead and latency of establishing and closing connections for each pair, leading to a more efficient use of resources and faster load times.

### HTTP Method Type

| Method | Description                                                   |
| ------ | ------------------------------------------------------------- |
| GET    | Requests an object from a server                              |
| POST   | Uploads data (in message body) to the server                  |
| HEAD   | Asks server to leave requested object out of response         |
| PUT    | Uploads file (in message body) to path specified in URL field |
| DELETE | Deletes file specified in the URL field                       |

### Mail Access Protocols

**SMTP (Simple Mail Transfer Protocol)**

SMTP is used for sending and delivering outgoing email. It's the standard protocol for sending email across the Internet. It operates on port 25 by default, though port 587 is also commonly used.

**Mail Access Protocols**

These protocols are used for accessing and retrieving email from a mail server.

1. **POP (Post Office Protocol)**:

   The current version is POP3, and it's used for downloading mail from the server to the client. Once the messages are downloaded to the client, they are typically deleted from the server (although there is an option to keep them on the server). It operates on port 110 by default, or port 995 for secure connections (POPS).

2. **IMAP (Internet Mail Access Protocol)**:

   IMAP is more advanced than POP3. It allows the client to read and manage mail directly on the server. Changes made on the client (like marking messages as read, deleting, moving to a folder) are reflected on the server. This makes it useful for accessing mail from multiple devices. It operates on port 143 by default, or port 993 for secure connections (IMAPS).

3. **HTTP (HyperText Transfer Protocol)**:

   Some web-based mail systems, like Gmail, Hotmail (Outlook.com), and Yahoo! Mail, use HTTP to allow access to email through a web browser. These systems often also provide IMAP access for traditional mail clients.

Here's a brief comparison:

| Protocol | Description                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| SMTP     | Used for sending and delivering outgoing email                                                                       |
| POP      | Used for downloading email from the server to the client. Changes made on the client are not reflected on the server |
| IMAP     | Used for accessing and managing email directly on the server. Changes made on the client are reflected on the server |
| HTTP     | Used for accessing email through a web browser, typically with web-based email systems                               |

### DNS

**DNS (Domain Name System):**

- Translates human-friendly domain names to machine-friendly IP addresses.
- Key components: Domain Names, IP Addresses, DNS Servers.
- Key services: hostname to IP translation, host aliasing, mail server aliasing, load distribution.

**Recursion:**

- A method where a function calls itself until a certain condition is met.
- In DNS: A recursive query asks a DNS server to respond with either the requested resource record or an error message if the server cannot find the record.

**Iteration:**

- A method where a set of instructions is repeated in a loop until a certain condition is met.
- In DNS: An iterative query asks a DNS server to respond with the best answer it can give, even if it's not the final answer. The client continues to ask other DNS servers until it gets the final answer.

**Recursive DNS Query:**

- The DNS resolver does the work, querying other DNS servers until it finds the answer.
- Pros: Can resolve faster due to caching.
- Cons: Potential for heavy load on server; security risks with open DNS servers.

**Iterative DNS Query:**

- The DNS client (often an operating system) does the work, querying each DNS server until it finds the answer.
- Pros: Reduces load on each individual DNS server.
- Cons: Can be slower, as the client must make multiple requests.

### DNS Record

DNS (Domain Name System) records are a vital part of the internet's infrastructure as they provide a mapping between human-friendly domain names and the numerical IP addresses that computers use to identify each other. Here are the most common types of DNS records along with their descriptions:

1. **A Record (Address Record):** Associates a domain or subdomain with an IPv4 address. For example, it might map `www.example.com` to `203.0.113.5`.

   Syntax: `type=A; name=hostname; value=IP address`

2. **CNAME Record (Canonical Name Record):** Maps one domain name (an alias) to another domain name (the canonical name). It's used to keep domain names in sync when one domain has multiple names. For example, `www.example.com` might be an alias for `example.com`.

   Syntax: `type=CNAME; name=alias name; value=canonical name`

3. **NS Record (Name Server Record):** Points a domain or subdomain to a set of DNS servers that are responsible for its DNS records. This is typically used to delegate a subdomain to use different DNS records.

   Syntax: `type=NS; name=domain; value=hostname of authoritative name server for this domain`

4. **MX Record (Mail Exchange Record):** Points a domain name to an email server and is used to route emails to the correct mail servers for that domain.

   Syntax: `type=MX; value=name of mail server associated with name`
