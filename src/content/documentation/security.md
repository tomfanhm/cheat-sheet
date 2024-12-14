---
id: 0cf60581
layout: ../../layouts/MarkdownContainer.astro
title: Computer Security
description: Computer Security encompasses the measures and practices designed to protect computer systems and networks from unauthorized access, damage, or disruption. It includes a range of disciplines such as encryption, network security, application security, and operational security.
imageUrl: ../../assets/security.png
date: Oct 15, 2024
datetime: "2024-10-15"
category: Documentation
disable: false
---

### Certifications

- Microsoft Technology Associate (MTA)
  - Exam: 98-367 Security Fundamentals
- CCNA (Cisco Certified Network Associate)
- CISSP® (Certified Information Systems Security Professional)
  - Issuer: (ISC)² Associate

### Security Keywords

#### Threats

- Man-made: Cyber attacks, vandalism, insider threats.
- Natural: Earthquakes, floods, fires.
- Environmental: Power outages, pollution, humidity.

#### Vulnerabilities

- Software & Hardware: Bugs, outdated systems.
- Procedures: Poor processes or policies.
- Configuration: Misconfigured settings.
- Physical Security: Lack of proper access control to facilities.

#### Adversary

- An entity that attempts to exploit vulnerabilities to harm a system.

#### Risk

- Risk is unavoidable and cannot be eliminated
- Minimizing Risk: Involves understanding risk and taking steps to reduce it
- Definition: Risk is a function of the likelihood of a given threat source exercising a particular potential vulnerability and the resulting impact of that adverse event on the organization.

#### Attack

- An attempt to exploit vulnerabilities and cause damage to assets.

#### Countermeasure

- Action or device that reduces threats, vulnerabilities, or attacks.
- Examples: Passwords, encryption, access controls.

---

### Risk analysis

- Single Loss Expectancy (SLE): The cost of a single loss.
- Annual Rate of Occurrence (ARO): The number of losses you suffer per year.
- Annualized Loss Expectancy (ALE): The yearly cost due to a risk. ALE = SLE x ARO
- TOTAL COST OF OWNERSHIP: Total Cost of Ownership (TCO) is the total cost of a purchasing, operating and maintaining a system.

---

### Security Principles

#### Confidentiality

- Ensures only authorized users can access data.
- Countermeasures: Encryption, usernames & passwords, access permissions.

#### Integrity

- Prevents unauthorized or accidental changes to data.
- Ensures data consistency and accuracy.
- Countermeasures: Auditing, careful database design, version control, hashing, audit logging.

#### Availability

- Ensures authorized users can access systems and data when needed.
- Countermeasures: Backups, RAID, fault tolerance, redundant systems.

---

### Fundamental Security Design Principles

- Economy of Mechanism: Simple, small security measures for ease of understanding and validation.

- Fail-Safe Defaults: Access should be denied unless explicitly permitted.

- Complete Mediation: All access must be verified by an access control system.

- Open Design: Security mechanisms should not rely on secrecy; transparency is key.

- Separation of Privilege: Multiple conditions required to access restricted resources.

- Least Privilege: Users/processes should have the minimum privileges necessary.

- Least Common Mechanism: Minimize shared components to reduce risks between users.

---

### Enforcing the Principle of Least Privilege (PoLP)

#### Minimum Permissions

Grant only the essential rights and permissions to users, resources, and applications needed to perform their tasks—nothing more.

#### Benefits

- Limits the damage that can occur from accidental or malicious actions.
- Reduces attack surface by restricting access to critical systems and data.

#### Avoid Privilege Escalation

- Separate accounts for administrators
- Regular account for everyday tasks.
- Administrative account for performing privileged actions only when necessary.

---

### Ancient Encryption

- Skytale Cipher: A thin sheet of papyrus wrapped around a staff. Messages written along the staff's length, then the papyrus is unwrapped.
- Substitution Cipher: A substitution cipher encrypts plaintext by replacing units.
- Transposition Cipher: A transposition cipher encrypts by scrambling the positions of characters without altering the characters themselves.

---

### ASCII Table

- Char A: Hex 41; Char F: Hex 46; Char K: Hex 4B; Char P: Hex 50; Char U: Hex 55
- Char a: Hex 61; Char f: Hex 66; Char k: Hex 6B; Char p: Hex 70; Char u: Hex 75
- Char 0: Hex 30; Char 9: Hex 39

---

### Symmetric Encryption

- Definition: Symmetric encryption uses the same key for both encrypting and decrypting data.

- Key Characteristics: Both parties must know the symmetric key, which must remain secret from others. The key introduces a randomization factor, altering the ciphertext. A different key produces entirely different ciphertext.

- Strength of Encryption, depends on key length, 16 bits: 65,536 possible keys; 256 bits: Over 1.0e+77 possible keys (1 followed by 77 zeroes).

- Algorithm Selection: End users typically do not choose the encryption algorithm; it is selected by software or an administrator.

#### Disadvantages of Symmetric Encryption

##### Key Sharing Requirement

- Both sender and receiver must share the same secret key.

##### Complex Key Management

- For n people to communicate securely, each must manage n-1 secret keys.
- Total keys needed for _n_ participants = n \* (n-1) /2
- Example: 52 participants would need 1,326 keys, complicating key distribution and management.

---

### Asymmetric Encryption

#### Uses a Public and Private Key Pair

- Also known as public-key encryption.

#### How it Works

- Public key encrypts data → Only the matching private key can decrypt it.
- Private key encrypts data → Only the corresponding public key can decrypt it.

#### Benefits

- Simplifies key management by using separate keys for encryption and decryption.

---

### Pseudo-Random Bit Generator

- Definition: An algorithm that takes a truly random binary sequence of length _k_ (called the “seed”) and outputs a much longer binary sequence (_m >> k_) that appears random.

- Seed Sources for PRBG: System clock, Elapsed time between keystrokes or mouse movements, Input/output buffer contents, User input, Operating system values (e.g., system load, network statistics)

---

### Prime Numbers

- Definition: Prime numbers are integers greater than 1 that are divisible only by 1 and themselves (e.g., 2, 3, 5, 7).

- Importance: All integers (except 0 and 1) are composed of prime numbers, making them fundamental in number theory and cryptography.

---

### Simplified RSA Encryption

- n = p × q: Multiply two prime numbers.
- f = (p-1) × (q-1): Calculate Euler’s totient function.
- 1 <= e < f: Choose a public exponent e such that gcd(e, f) = 1 (i.e., e and f are coprime).
- d × e mod f = 1: Find d, the private key exponent, so that it satisfies this equation.
- Public key: Consists of n and e.
- Private key: Consists of d.

#### Encryption and Decryption

- Encryption: Ciphertext c = m^e mod n (where m is the plaintext message).
- Decryption: Message m = c^d mod n (where c is the ciphertext).

#### Security Levels

- RSA-512: 155 decimal digits (insecure).
- RSA-768: 232 decimal digits (insecure).
- RSA-1024: 308 decimal digits (borderline secure).

---

### Check Digit

- ISBN-10: To check the validity of an ISBN-10, calculate the sum of the first 9 digits multiplied by their positions (1 to 9), add the last digit (which can be 10 for 'X'), and verify if the total is divisible by 11.
- EAN-13: To check the validity of an EAN-13, calculate the sum of the digits at odd positions multiplied by 1, add the sum of the digits at even positions multiplied by 3, and verify if the total modulo 10 equals zero.
- VISA: To check the validity of a Visa card number, use the Luhn algorithm: double every second digit from right to left, sum the digits of the resulting numbers, add the untouched digits, and verify if the total is divisible by 10.

---

### Using Certificates

Certificates are digital files containing key data used in public key encryption. They are primarily used for securely sharing a public key and other important information.

- Certificates serve various purposes, including: Verifying identity., Ensuring secure communication., Sharing a public key.
- Accessing Certificates: You can view and manage certificates in the Personal certificate store on a Windows system.
- Example: A certificate using the RSA algorithm can have a public key that is 4,096 bits long, ensuring a high level of security.

---

### Secure/Multipurpose Internet Mail Extensions (S/MIME)

- A widely-used standard for email security.
- Uses public and private keys to both encrypt and digitally sign emails.
- The sender needs a certificate with an embedded public key that matches the private key, which only the sender can access.

#### Certification Authority (CA)

- Within an Active Directory domain, administrators often set up a CA to issue and manage certificates.
- Public CAs are also available to issue certificates for internet use.

#### Steps in the S/MIME Process

1. Session key creation: The sender generates a session key for symmetric encryption.
2. Encrypting the email: The sender encrypts the email content using the session key and symmetric encryption.
3. Retrieving the recipient’s public key: The sender retrieves the recipient’s certificate, which includes the recipient's public key.
4. Encrypting the session key: The sender encrypts the session key using the recipient's public key.
5. Sending the email: The sender sends the encrypted email along with the encrypted session key to the recipient.
6. Receiving the encrypted content: The recipient receives both the encrypted email and the encrypted session key.
7. Decrypting the session key: The recipient uses their private key to decrypt the session key.
8. Decrypting the email: The recipient then uses the decrypted session key to unlock the contents of the email.

---

### Hashing

- Not Encryption: Hashing is different from encryption. You cannot "decrypt" a hash because it was never encrypted.
- One-Way Function: Hashing is irreversible; you cannot retrieve the original data from the hash.
- Deterministic: The same input always produces the same hash output, no matter how many times it's hashed.

---

### MD5 VS SHA

| Keys For Comparison                                        | MDS                                    | SHA                                     |
| ---------------------------------------------------------- | -------------------------------------- | --------------------------------------- |
| Security                                                   | Less Secure than SHA                   | Higher Secure than MDS                  |
| Message Digest Length                                      | 128 Bits                               | 160 Bits                                |
| Attacks required to find out original Message              | 2^128 bit operations required to break | 2^160 bit operations required to break  |
| Attacks to try and find two messages producing the same MD | 2^64 bit operations required to break  | 2^80 bit operations required to break   |
| Speed                                                      | Faster, only 64 iterations             | Slower than MDS, required 80 iterations |
| Successful attacks so far                                  | Attacks reported to some extent        | No such attack report yet               |

### Hashing vs. Encryption

#### Hashing

- Deterministic: The same data always produces the same hash.
- No Key: Hash functions do not use keys; the process is always consistent.
- One-Way Function: It’s impossible to retrieve the original data from the hash.
- Fixed-Length Output: The hash output is always of the same length, regardless of the input size.

#### Encryption

- Key-Based: Encryption uses a key to transform data, allowing decryption with the same or corresponding key.
- Reversible: Encrypted data can be decrypted to retrieve the original.
- Variable-Length Output: The length of the ciphertext depends on the size of the plaintext.

---

### Application of Hashing

#### Ensuring Integrity

- Contracts & Treaties: Hashes ensure important documents haven’t been altered since signing.
- Software Downloads: Hashes verify that downloaded software or files from USB/CD match the original version released by the vendor.
- Email Signing: Hashing with asymmetric encryption ensures emails haven't been modified in transit, preserving the integrity of the message.

---

#### Digital Signature Verification

##### Sender's Process

- Create Email: The sender writes the email.
- Hash the Email: The content of the email is hashed.
- Encrypt Hash: The hash is encrypted using the sender's private key (this forms the digital signature).
- Send: The unencrypted email and the encrypted hash (digital signature) are sent to the recipient.

##### Recipient's Process

- Receive Message & Signature: The recipient receives both the email and digital signature.
- Retrieve Public Key: The recipient obtains the sender’s public key from the sender’s certificate.
- Decrypt Hash: The encrypted hash is decrypted using the sender's public key.
- Hash the Email: The recipient hashes the received email.
- Compare Hashes: If the decrypted hash matches the recalculated hash, the message's integrity is confirmed (it hasn't been altered).

---

### Rainbow Table

- Definition: A rainbow table is a precomputed table used to reverse cryptographic hash functions, commonly for cracking password hashes.
- Purpose: Helps in recovering plaintext passwords by looking up hashes in the table.
- Limitations: Typically effective for passwords of a certain length and from a limited set of characters.

---

### Hash Salt

- Definition: A salt is random data added to a password before hashing, used to enhance security in cryptographic systems.
- Purpose: Protects against dictionary attacks and rainbow table attacks by making each hash unique, even for identical passwords.
- Usage in Password Storage: Historically, passwords were stored in plaintext, but salts are now used to secure them. A unique, randomly generated salt is created for each password, ensuring that even the same passwords produce different hashes.

---

### Integrity & Non-Repudiation

#### Non-Repudiation

- Ensures that a party cannot deny sending a message they originated.
- Achieved through proof of data integrity and origin, authenticated with high assurance.

#### Achieving Non-Repudiation

- Data Integrity: Use hashing to ensure the data hasn’t been altered (e.g., to prevent man-in-the-middle attacks).
- Data Origin: Use digital certificates to verify the sender's identity.

#### Digital Signature Process

- The sender encrypts the hash with their private key.
- If the recipient's public key can decrypt the hash, it confirms the sender's identity (since only the sender’s private key could have encrypted it).
- This provides non-repudiation because the sender cannot later deny sending the message.

#### Key Points

- Integrity: Data hash ensures the content hasn’t been altered.
- Authentication: The sender is verified by their private key, as shown in the digital certificate.
- Non-Repudiation in Action: If the public key decrypts the hash, the message is genuine and sent by the identified party.

#### Example

- In tools like Microsoft Outlook, digital signatures are easily applied by selecting a checkbox, and the recipient is notified if verification fails.

---

### Encrypting File System (EFS)

#### NTFS & EFS Overview

- NTFS (New Technology File System) is the standard for file management in Microsoft environments, ensuring file integrity and security.
- EFS (Encrypting File System) provides confidentiality by encrypting files and folders on NTFS drives, restricting access to authorized users.

#### EFS Encryption Process

- Symmetric Key Creation: EFS generates a unique symmetric secret key (File Encryption Key, or FEK) for each file.
- Public Key Encryption: EFS retrieves the user’s public key.
- Encrypting the Symmetric Key: The symmetric key is encrypted using the user’s public key.
- Storing the Encrypted Key: The encrypted symmetric key is saved in the file header.

#### EFS Decryption Process

- Retrieve Encrypted Key: The encrypted symmetric key is retrieved from the file header.
- Private Key Decryption: The user's private key decrypts the symmetric key.
- Decrypt the File: EFS uses the decrypted symmetric key to decrypt the file.

#### Key Features

- Symmetric & Asymmetric Encryption: EFS uses symmetric encryption for the file (efficient for large data) and asymmetric encryption for securing the symmetric key.
- Automatic Decryption: Users generally don’t interact with keys directly; decryption happens automatically when accessing the file.

#### Important Considerations

- Password Resets: If a local user's password is reset (not changed), the private key is lost, preventing decryption of previously encrypted files.
- Efficiency: Symmetric encryption is used because it’s faster for large data, while asymmetric encryption secures the key.

---

### Certificates

#### Certificate Issuance

- Can be issued to individuals and linked with a user account.
- Can be embedded in a smart card.
- May also be issued to servers, workstations, or mobile phones.

#### Automated Issuance

- Within a domain, certificates are typically issued automatically to users with minimal user interaction.

#### Manual Installation

- Administrators often request and install certificates on servers manually.

---

### Certificate Authority (CA)

A Certificate Authority (CA) is a trusted entity that issues digital certificates, which verify the identity of digital entities on the internet.

#### Digital Certificates

- Essential for secure communication in Public Key Infrastructure (PKI).
- Contain important details, such as: Owner’s public key, Owner's name, Certificate expiration date, Additional identifying information

#### Trusted CA Lists

Operating systems and browsers maintain trusted CA root certificates to verify certificates issued and signed by CAs, ensuring secure connections.

---

### Purpose of Digital Certificates

#### Authentication

- Certificates verify the identity of a person or server.
- Example: A website like Amazon.com uses a certificate to assure users they are interacting with the legitimate site.

#### Encryption

- Certificates enable encryption for securing data both at rest and during transmission, ensuring data confidentiality.

#### Digital Signatures

- Digital certificates can be used to sign emails, providing authentication, integrity, and non-repudiation by proving the sender’s identity.

#### Code Signing

- Certificates are used to sign software or active web content to verify its origin and integrity.
- Legitimate companies use code-signing certificates to prove their code hasn't been altered. Unsigned or malicious code can be blocked by browsers.

---

### Certificate Revocation List (CRL)

#### Purpose of CRL

- Verifies the validity of a certificate before acceptance for use by a machine.
- Checks are usually automatic; users may encounter errors if a check fails.

#### Revocation Check Process

- When a certificate is presented to a client, it may check with the Certification Authority (CA) to confirm that the certificate hasn't been revoked.

#### Contents of CRL

- Includes the serial numbers of all revoked certificates and their dates of revocation.

#### Publication Format

- A CRL is published in a special format known as a version 2 certificate.

---

### Creating an HTTPS Session

- Client Request: The client initiates the HTTPS session by typing a URL (e.g., Amazon.com).
- Server Sends Certificate: The server responds by sending its digital certificate, which contains the public key.
- Session Key Creation: The client generates a session key that will be used to encrypt all data exchanged during the session.
- Encrypt Session Key: The client encrypts the session key using the server's public key, ensuring only the server can decrypt it with its private key.
- Send Encrypted Session Key: The client sends the encrypted session key to the server.
- Server Decrypts Session Key: The server uses its private key to decrypt the session key, ensuring both the client and server now share the same session key.
- Secure Session Begins: The HTTPS session is encrypted and decrypted using the session key, ensuring confidentiality throughout the communication.

---

### DNS Poisoning Attack

- Attack Overview: In a DNS poisoning attack, the hosts file on a victim's system is altered to redirect a legitimate domain (e.g., google.com) to a malicious site (e.g., baidu.com).

#### Why It Fails in Firefox

- Certificate Mismatch: When Firefox attempts to visit the malicious site (e.g., baidu.com) via HTTPS, it checks the SSL certificate.
- The certificate of baidu.com does not match the expected certificate for google.com stored in Firefox.
- Result: Firefox displays a security warning, preventing the attack from succeeding because the site’s certificate doesn’t match.

---

### Understanding Certificate Errors

#### "The Certificate Has Been Revoked"

- Indicates the private key has been compromised or the certificate is being used fraudulently.
- Revoked certificates should not be trusted, as attackers might be using them maliciously.

#### "The Certificate Is Out of Date"

- The certificate has expired and is no longer validated by the Certificate Authority (CA).
- Expired certificates should not be trusted.

#### "The Certificate Isn’t from a Trusted Source"

- The certificate was not issued by a trusted CA.
- Common in phishing or other malicious attacks where the certificate is self-signed or from an untrusted source.

#### "There Is a Problem with This Website's Security Certificate"

- Triggered by miscellaneous issues, such as a tampered, modified, or unreadable certificate.
- Indicates potential security risks with the website.

---

### Public Key Infrastructure (PKI)

#### Definition

- A Public Key Infrastructure (PKI) is a framework of roles, policies, and procedures for creating, managing, distributing, using, storing, and revoking digital certificates, as well as managing public-key encryption.

#### Purpose

- Facilitates secure electronic transfer of information for various network activities, including: E-commerce, Internet banking, Confidential email

#### Need for PKI

- Essential for activities where simple passwords are inadequate for authentication.
- Provides rigorous proof to confirm the identity of parties in communication and validate the information being transferred.

---

### Components of a PKI (Public Key Infrastructure)

#### Public/Private Key Pairs

- Matched keys for encrypting and decrypting data.

#### Certificates

- Electronic files containing issuer details, recipient info, validity dates, and the public key.

#### Certification Authority (CA)

- Issues and manages certificates.

#### Root CA

- The primary CA in a certificate chain.
- Issues certificates to subordinate CAs within the same chain.
- Trust in the root CA extends to all certificates issued by its subordinate CAs.
- Microsoft systems store certificates from various public root CAs in the Trusted Root Certification Authority store.

---

### Malicious Software (Malware)

#### Definition

Malware is software installed on a system without the user's consent or knowledge.

#### Types:

- Viruses
- Worms
- Trojan Horses
- Spyware
- And more.

#### Purpose:

- Data Theft: Steals personal or financial data for monetary gain (e.g., identity theft, clearing bank accounts).
- Espionage: Used for corporate or government espionage.

#### Attack Methods:

- Gathering large amounts of data (small amounts from millions of users).
- Exploiting data for malicious activities, including financial fraud.

---

### Botnets and Malware

#### Botnet (Robot Network):

- A network of infected computers (clones or zombies) controlled remotely by an attacker.

#### Command-and-Control Server:

- A server used by attackers to manage and send instructions to the infected devices (clones/zombies).

#### Functions of Infected Devices:

- Denial of Service (DoS) Attacks: Coordinated attacks that overwhelm a system.
- Massive Spam Distribution: Sending out large volumes of infected spam emails.

#### Protection:

- Up-to-date Antivirus (AV) software.
- Educated Users: Awareness of security threats and safe online practices.

---

Here's the information in a table format:

### Common Malware Types

| Malware Type    | Protection                             | Characteristics                                                                       |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------- |
| Spam            | None (AV software helps detect)        | Unsolicited email; may contain malware, harmful scripts, or links to malicious sites. |
| Virus           | Up-to-date AV software, educated users | Requires user interaction to spread.                                                  |
| Worm            | Up-to-date AV software, firewalls      | Self-replicates automatically, does not require user interaction.                     |
| Trojan Horse    | Up-to-date AV software, educated users | Appears helpful but contains a hidden harmful component.                              |
| Buffer Overflow | Up-to-date OS and applications         | Exploits memory vulnerabilities by sending unexpected code.                           |
| Spyware         | Up-to-date AV or antispyware software  | Collects user information without the user’s knowledge.                               |

---

### Viruses

#### Virus Overview

- Definition: A virus is an executable program that replicates and spreads from one computer to another.
- Potential Damages:
  - Joins your computer to a botnet.
  - Corrupts or deletes data.
  - Erases everything on your hard disk.
  - Emails itself to other computers via your address list.

#### Virus Delivery Methods

| Method                       | Description                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Attachment in Unwanted Email | Spam emails with attachments (e.g., greeting cards, audio/video files, images). Virus installs when the attachment is opened. |
| Script in Unwanted Email     | Some emails contain scripts. Opening the email runs the script and installs the virus (some email programs block scripts).    |
| Installed on USB Drives      | Viruses can infect USB drives. When plugged into another system, the virus spreads.                                           |
| Embedded in Downloaded Files | Freeware or shareware files downloaded from the internet may contain viruses.                                                 |

#### Types of Files

- Freeware: Software available at no cost.
- Shareware: Software available for free for a limited trial period; payment required to continue using after the trial.

---

### Worms

#### Worm Overview

- Definition: A self-replicating software program that spreads from computer to computer over a network.
- Key Difference from Viruses: Worms do not require human interaction to spread, unlike viruses, which need user execution.

#### Damage Caused by Worms

- Can cause similar damage as viruses:
  - Slows down or crashes systems and networks.
  - Corrupts data or causes system malfunctions.

#### Worm Propagation Methods

| Method                             | Description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| Identify IP Addresses & Open Ports | Worm scans the network for open, exploitable ports to infect other computers. |
| Email Propagation                  | Worm can send itself to email addresses stored in the user's address book.    |

#### Impact on Network

- Worms can slow down network performance by flooding the network with excessive traffic.
- In severe cases, they can cause the entire network to become unusable.

#### Famous Worms

| Worm Name | Year | Description                                                                                        |
| --------- | ---- | -------------------------------------------------------------------------------------------------- |
| RTM       | 1998 | Created by Robert Tappan Morris; crashed many Internet systems.                                    |
| Code Red  | 2001 | Targeted unpatched Microsoft IIS servers.                                                          |
| Stuxnet   | 2010 | Targeted specific systems in the Middle East, including industrial control systems.                |
| Morris    | 1988 | Exploited Unix vulnerabilities (Sendmail, Finger) and weak passwords; caused system crashes.       |
| Conficker | 2008 | Infected unpatched Windows systems, creating a global botnet of over 7 million infected computers. |
| Sasser    | 2004 | Spread via open port 445; caused system crashes, including X-ray machines in hospitals.            |
| Melissa   | 1999 | Email worm that spread via infected attachments.                                                   |

---

### Trojan Horses

#### Trojan Horse Overview

- Definition: Malicious software that disguises itself as a legitimate program to trick users.

- Example: A user downloads a game or utility, but the download also includes embedded malware (Trojan horse).

#### Rogueware (A Popular Trojan Horse Type)

- Definition: Fake programs that pretend to be legitimate security tools (e.g., antivirus software).

- Function: The program alerts the user that their system is infected and asks for payment to remove the threat.

- Intention: The goal is to get the user to pay, regardless of whether any actual threat exists.

- Deception: Some rogueware mimics legitimate software names (e.g., "Security Essentials 2010" mimicking Microsoft’s Security Essentials).

#### Trojan Horse Installation

- Method: When the user installs the legitimate-looking program, the Trojan horse is also installed.
- Example: Clicking a "Scan System Now" button may start the download and installation of malware.

#### Protection

- Up-to-date Antivirus (AV) software from a reliable source.
- Educated Users: Awareness of common Trojan horse tactics and recognizing fake software.

---

### Buffer-Overflow Attacks

#### Overview

- Definition: A buffer overflow occurs when an application receives more data than it can handle, causing the data to overflow into other memory areas.
- Memory Buffers: Applications use buffers (temporary memory areas) to store data, like form inputs on web pages.

#### How It Works

- Data Overflow: When unexpected data is input, the application writes more data than the buffer can hold, causing it to spill over into other parts of memory.
- Exploiting Vulnerabilities: Attackers exploit this overflow to insert malicious code into the system.

#### Attack Process

1. Buffer Overflow: The application writes data to the buffer, causing an overflow.
2. Code Injection: Attackers append malicious code to the overflowing data.
3. Malicious Code Execution: The malicious code is executed when it enters the exposed memory, allowing the attacker to control the system.

#### Protection

- Up-to-date operating systems and applications: Prevent vulnerabilities that lead to buffer overflows.

---

### Countermeasures Against Buffer-Overflow Attacks

| Countermeasure      | Description                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| Input Validation    | Ensure data is validated before use (e.g., check if numbers fall within the expected range).     |
| Application Testing | Test applications with edge-case data (e.g., input values at the boundaries of accepted ranges). |
| Up-to-Date Patching | Apply patches promptly when vulnerabilities are discovered to fix buffer overflow issues.        |

---

### Spyware

#### Overview

- Definition: Spyware is software that installs itself without the user's consent, often running silently in the background to gather information.
- Purpose: It collects personal data, including online habits and personally identifiable information (PII), which can lead to identity theft or financial account hacking.

#### Spyware Example: Keylogger

- Keylogger: A type of spyware that records all keystrokes on a system, including sensitive information like usernames, passwords, and URLs. The attacker later views this logged data.

---

### Other Countermeasures Against Malware

| Method                                    | Description                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------- |
| 1. Use Firewalls                          | Content filtering firewalls can block some spam and malware.                       |
|                                           | AV and spam software on email servers strip off spam and malware.                  |
|                                           | AV software on end-user devices provides an extra layer of protection.             |
| 2. Keep Systems Up to Date                | Regular software updates fix known vulnerabilities.                                |
|                                           | Updates only effective if applied to the system.                                   |
| 3. Reduce the Attack Surface              | Disable unused services and protocols to minimize vulnerabilities.                 |
|                                           | Fewer services mean fewer potential entry points for malware.                      |
| 4. Educate Users                          | Training users to recognize and avoid malware threats helps prevent infections.    |
|                                           | Simple guidelines can empower users to avoid common malware tactics.               |
| 5. Minimize Use of Administrator Accounts | Users should use accounts with the least privilege necessary.                      |
|                                           | Administrators should have separate accounts for regular and administrative tasks. |
