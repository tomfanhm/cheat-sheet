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

### Routers vs Switches

Routers and switches are both essential networking devices, but they serve different purposes in a network.

- **Switches**: A network switch primarily works in the Data Link layer of the OSI model (Layer 2). It connects devices on a local area network (LAN), like computers and printers, and allows them to communicate with each other efficiently. Switches create a network of devices where each device has a direct, high-speed connection to the network. They operate using MAC addresses to forward data to the appropriate destination within the LAN.

- **Routers**: A router works at a higher level, in the Network layer of the OSI model (Layer 3). Its main job is to connect multiple networks together and route network traffic between them. This includes connecting a home or business network to the internet. Routers use IP addresses to determine the best path for forwarding the packets, and they also provide additional features like DHCP serving, NAT, static routing, and network firewall protection.
