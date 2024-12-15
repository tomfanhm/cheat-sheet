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

| Keys For Comparison                                        | MD5                                    | SHA                                     |
| ---------------------------------------------------------- | -------------------------------------- | --------------------------------------- |
| Security                                                   | Less Secure than SHA                   | Higher Secure than MD5                  |
| Message Digest Length                                      | 128 Bits                               | 160 Bits                                |
| Attacks required to find out original Message              | 2^128 bit operations required to break | 2^160 bit operations required to break  |
| Attacks to try and find two messages producing the same MD | 2^64 bit operations required to break  | 2^80 bit operations required to break   |
| Speed                                                      | Faster, only 64 iterations             | Slower than MD5, required 80 iterations |
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

---

### Social Engineering

#### Overview

- Definition: Social engineering involves manipulating people into giving up sensitive information or performing actions that benefit the attacker, often without requiring technical skills.
- Methods: Deception and trickery are used in various forms, including in person, over the phone, or through phishing emails.

#### Types of Social Engineering

| Method     | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| In Person  | Attackers impersonate trusted individuals (e.g., repairmen) to gain access.                                        |
|            | Example: An attacker may disconnect a phone line, then appear as a repairman and gain access to a restricted area. |
|            | They may use tools like wireless access points to capture network traffic.                                         |
| Phone Call | Attackers impersonate executives or employees to gain unauthorized access.                                         |
|            | Example: An attacker calls the help desk pretending to be an executive and requests a password reset.              |

#### Countermeasures Against Social Engineering

| Countermeasure                      | Description                                                                                                          |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Verify Identity for Password Resets | Ensure users provide specific, non-public information before resetting passwords.                                    |
| Limit Password-Reset Rights         | Restrict password reset capabilities to authorized personnel, especially for high-level accounts (e.g., executives). |

---

### Phishing and Related Social Engineering Attacks

#### Phishing with Email

- Definition: A fraudulent attempt to trick users into revealing personal information (e.g., usernames, passwords, banking details) via email.
- Common Characteristics:
  - Appears to be from a trusted source (e.g., bank, ISP).
  - Claims there is an urgent issue with an account and asks for personal information for verification.
  - Promises rewards, prizes, or commissions in exchange for sensitive information.

---

#### Types of Phishing

| Type           | Description                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Masked URL     | A link that looks legitimate but redirects to a malicious site when hovered over.                                            |
| Email Spoofing | The "From" address is manipulated to make it appear as if the email is from a trusted source.                                |
| Spear Phishing | A targeted phishing attack where the email appears to come from someone within the victim’s organization.                    |
| Typosquatting  | A technique where the domain name is altered slightly (e.g., "microsft.com" instead of "microsoft.com") to deceive the user. |

#### Other Social Engineering Techniques

| Technique                | Description                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Phone Phishing (Vishing) | Fraudulent calls or voicemail messages pretending to be from reputable companies to steal personal information (e.g., bank details). |
| Dumpster Diving          | Stealing personal information from discarded documents, providing criminals with data to open or steal from accounts.                |

#### Countermeasures Against Phishing

| Countermeasure                           | Description                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Be Cautious with Links                   | Always verify URLs before clicking. Hover over links to check for masked URLs.                    |
| Verify Sender Information                | Check email addresses for typos or unusual domains (e.g., microsft.com instead of microsoft.com). |
| Enable Multi-Factor Authentication (MFA) | Adds an extra layer of security to protect accounts even if credentials are compromised.          |
| Educate Users                            | Teach users to identify phishing emails, and encourage reporting suspicious messages.             |

---

### Pharming and Related Attacks

#### Pharming Overview

- Definition: Pharming is a type of attack where users are redirected to malicious websites even if they enter the correct URL in their browser. It targets name-resolution methods like the hosts file or DNS server to hijack website traffic.

---

#### Pharming Techniques

| Technique               | Description                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Hosts File Modification | Malware alters the hosts file to map legitimate websites to malicious IP addresses (e.g., preventing access to Windows Update). |
| DNS Cache Poisoning     | Attackers modify DNS cache data on a DNS server, redirecting users to fraudulent sites.                                         |
| DNS Server Compromise   | Attackers manipulate DNS records to redirect users to their own malicious website.                                              |

---

#### Name-Resolution Process

1. Hosts File: First, the system checks the local hosts file for any entries (e.g., `c:\windows\system32\drivers\etc` on Windows).
2. DNS Cache: If no entry is found, the system checks the DNS cache, which can be viewed using the command: `ipconfig/displaydns`.
3. DNS Server Query: If neither local method provides a result, the system queries the DNS server for the IP address.

---

#### Countermeasures Against Pharming

| Countermeasure                   | Description                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Regularly Check Hosts File       | Monitor and protect the hosts file from unauthorized modifications.                                            |
| Clear DNS Cache Regularly        | Regularly clear the DNS cache to prevent cached poison attacks.                                                |
| Use Secure DNS Services          | Use reputable DNS servers or DNSSEC to prevent DNS poisoning.                                                  |
| Enable Antivirus and Antimalware | Keep security software up-to-date to detect malware that may modify the hosts file or compromise DNS settings. |

---

### Protecting Email

#### Antivirus Software (AV)

- Function:
  - Primary protection against email-borne threats.
  - Strips off or quarantines malicious attachments.
  - Real-time protection detects malware when a user attempts to open it.
  - AV on both client systems and email servers filters out malicious emails.

---

#### Antispam Techniques

- Spam Filters:
  - Most email programs (e.g., Outlook Junk E-mail Filter) automatically move suspected spam to a Junk E-mail folder.
- Purpose:
  - Spam is a major source of malware. Filtering spam reduces the risk of infection.

---

#### Disable Automatic Display of Pictures

- Why:
  - Prevents web beacons (hidden images in emails) from loading.
- How:
  - Web beacons can track the recipient’s email address, validating it for attackers and increasing spam.
- Benefit:
  - Stops attackers from collecting valid email addresses.

---

#### User Education

- Focus:
  - Phishing attacks are best prevented with user awareness.
  - Educate users to recognize common scams to avoid falling for them.

---

#### Threat Statistics

- Spam:
  - 89% of all email is spam.
- Botnets:
  - Approximately 5 million active botnets are used to spread malware.
- Malware Strains:
  - Over 339,600 strains of malware detected in emails.
- Phishing Emails:
  - 95.1 billion phishing emails were sent in 2010.
- Impersonated Organizations:
  - Over 1,500 organizations were impersonated in phishing attacks.

---

### Types of Hackers

| Type of Hacker    | Description                                                                 | Intent                                                                                                            | Legality                    | Activities                                                                  |
| ----------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------- |
| White Hat Hackers | Ethical hackers with advanced knowledge of systems and networks.            | Identify and fix vulnerabilities                                                                                  | Legal                       | Penetration testing, vulnerability assessments, ethical hacking.            |
| Black Hat Hackers | Hackers with malicious intent, aiming to harm systems or steal information. | Unauthorized access, harm, theft                                                                                  | Illegal                     | Stealing data, damaging systems, violating privacy, blocking communication. |
| Grey Hat Hackers  | Blend of white and black hat hackers.                                       | Exploit vulnerabilities for fun, often without malicious intent, and report weaknesses for recognition or bounty. | Unclear, often unauthorized | Finding and reporting vulnerabilities without permission, seeking rewards.  |

---

### Advanced Hacking Techniques

| Technique                    | Description                                                                                                                          | Risk                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ARP Poisoning (ARP Spoofing) | Attackers forge ARP packets to flood the switch and poison the ARP cache of devices, allowing the attacker to sniff network traffic. | Man-in-the-middle (MITM) attack, compromising data and system confidentiality.                     |
| Man-in-the-Middle (MITM)     | The attacker intercepts communication between two victims, impersonating them and altering data.                                     | Data manipulation, credential theft, unauthorized access to sensitive information.                 |
| DNS Poisoning                | Manipulates a DNS server’s cache to replace legitimate IP addresses with malicious ones, redirecting users to fake websites.         | Redirects users to malicious sites, potentially stealing sensitive data (e.g., login credentials). |
| Exploitation                 | Hackers use software or scripts (e.g., Metasploit) to exploit vulnerabilities in a system.                                           | Gaining unauthorized access, controlling systems, or launching further attacks.                    |
| Backdoor                     | An undocumented access point created by hackers for illicit access or by admins for legitimate maintenance purposes.                 | Permanent access for attackers, bypassing regular security measures.                               |
| TCP/IP Hijacking             | The attacker intercepts and hijacks an existing network connection to bypass authentication and take over sessions.                  | Session hijacking, bypassing password authentication, impersonating legitimate users.              |
| Password Attacks             | Techniques like Dictionary, Hybrid Dictionary, and Brute Force attacks are used to crack weak passwords.                             | Unauthorized access to systems, services, or accounts using stolen passwords.                      |
| Wireless Network Attacks     | Attackers exploit vulnerabilities in wireless networks, such as weak encryption, to gain unauthorized access.                        | Unauthorized access, data theft, eavesdropping on wireless communications.                         |
| Cross-Site Scripting (XSS)   | Malicious JavaScript is injected into a website, executing in another user’s browser, exploiting a website vulnerability.            | Data theft, session hijacking, malicious activities disguised as legitimate website behavior.      |
| Penetration Testing          | A controlled process where security professionals simulate attacks to find vulnerabilities in systems and networks.                  | Helps identify and fix vulnerabilities before real attackers can exploit them.                     |

---

### User Authentication

| Authentication Type            | Description                                                               | Examples                                     | Risk                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Something the Individual Knows | Knowledge-based authentication. Relies on secrets known only to the user. | Password, PIN, answers to security questions | Weak passwords or password reuse can be easily guessed or stolen through attacks like phishing. |
| Something the Individual Has   | Something physical that the user possesses.                               | Smartcard, Keycard, Token                    | Lost/stolen tokens could be used by attackers to gain unauthorized access.                      |
| Something the Individual Is    | Biometric-based authentication, relying on unique physical traits.        | Fingerprint, Retina Scan, Facial Recognition | Biometric data theft or spoofing using high-tech methods.                                       |
| Something the Individual Does  | Behavior-based authentication, relying on actions or patterns.            | Voice Pattern, Handwriting, Typing Rhythm    | Inaccurate measurements or pattern changes could lead to access denial or false positives.      |

---

### Authentication vs. Authorization

- Authentication: The process of verifying a user's identity (e.g., entering a password).
- Authorization: Determines what the authenticated user is allowed to do on the system (e.g., access certain files or resources).

Note: Authentication is the first step, but successful authentication does not automatically grant authorization to access all resources.

---

### Password Authentication

#### Password Authentication Basics

- What is it?
  - Password authentication relies on the something the individual knows (the password).
  - The user provides a username and password, and the system checks if the password matches the one stored in the system for that specific login.

#### Password Selection Strategies

1. User Education

   - Goal: Teach users about the importance of choosing hard-to-guess passwords.
   - Tips: Provide guidelines on selecting strong passwords (e.g., minimum length, complexity, avoid common words).

2. Computer-Generated Passwords

   - Pros: Strong passwords generated automatically.
   - Cons: Hard to remember, may require storage tools like password managers.

3. Reactive Password Checking

   - Goal: The system uses password crackers periodically to check for weak passwords.
   - Pro: Identifies weak or commonly guessable passwords.

4. Complex Password Policy
   - Goal: Allow users to select their own passwords but enforce rules to avoid guessable passwords.
   - Example: Enforcing a mix of upper/lowercase letters, numbers, and symbols, with a minimum length.

---

### CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart)

- Purpose: Prevents automated systems (bots) from performing actions like spam or mass account creation by using a challenge that is easy for humans but difficult for machines.
- Common Usage: Blocking automated systems from scraping emails or signing up for services.

---

### Hash Functions for Password Storage

- What is a Hash?
  - A hash function converts the password into a fixed-length string, making it difficult to reverse and obtain the original password.
  - Key Properties:
    - One-way function: Easy to compute the hash, but very hard to reverse.
    - Deterministic: The same input always produces the same output.

#### Common Hashing Algorithms

| Algorithm | Hash Size        | Storage Format                                          |
| --------- | ---------------- | ------------------------------------------------------- |
| MD5       | 128-bit          | CHAR(32) or BINARY(16)                                  |
| SHA-1     | 160-bit          | CHAR(40) or BINARY(20)                                  |
| SHA-224   | 224-bit          | CHAR(56) or BINARY(28)                                  |
| SHA-256   | 256-bit          | CHAR(64) or BINARY(32)                                  |
| SHA-384   | 384-bit          | CHAR(96) or BINARY(48)                                  |
| SHA-512   | 512-bit          | CHAR(128) or BINARY(64)                                 |
| BCrypt    | 448-bit (varies) | CHAR(56), CHAR(60), CHAR(76), BINARY(56), or BINARY(60) |

#### Best Practices for Hashing Passwords

1. Salt the Passwords:

   - Why: Adding a unique salt value to each password before hashing prevents attackers from using precomputed hash tables (rainbow tables) to crack passwords.
   - Effect: Salted passwords do not affect the length of the hash, but make it unique to each user.

2. Use Strong Hashing Algorithms:
   - Recommendation: Use SHA-256 or higher for storing passwords.
   - Note: Older algorithms like MD5 and SHA-1 are considered weak and vulnerable to attacks.

---

### How Password Authentication Works

1. User Login:
   - The user enters their password.
2. Hashing the Password:

   - The system computes the hash `h(password)` using a secure hash function.

3. Verification:

   - The system compares the computed hash with the stored hash in the password file.

4. Authentication:
   - If the hashes match, the user is authenticated and granted access.

---

### Brute Force Attack

#### What is a Brute Force Attack?

- Definition: A brute force attack is a method where an attacker tries every possible combination to guess a password or uncover hidden pages on a website.
- Goal: To find the correct password or hidden resource by systematically testing all possible options.
- Conditions for Success:
  - Direct access to the password file (for password cracking).
  - Large computing power to quickly test combinations.

---

#### Brute Force Beyond Password Cracking

- Website Hidden Pages:
  - Attackers can use brute force to guess URLs of hidden pages.
  - The attacker sends requests to different URLs, checking responses:
    - 404 Response: Page does not exist.
    - 200 Response: Page exists (success).

---

#### How to Protect Against Brute Force Attacks

1. Use Long and Complex Passwords

   - Why: A longer and more complex password increases the number of possible combinations, making it harder for an attacker to crack.
   - Best Practices:
     - Minimum 12 characters.
     - Mix of upper/lowercase, numbers, and special characters.

2. Account Lockout Mechanism

   - How it Works: After a certain number of failed login attempts, the account is temporarily locked or blocked.
   - Effect: Prevents attackers from continuously trying combinations without consequences.
   - Limitations:
     - Not effective for offline attacks where the attacker has access to the password hash.

3. Implement CAPTCHA

   - Purpose: Adds a challenge-response test to ensure the login attempt is human and not an automated script.
   - Effect: Slows down automated brute force attempts.

4. Multi-Factor Authentication (MFA)

   - Why: Even if the attacker guesses the password, they still need the second factor (e.g., SMS code, authenticator app) to access the system.

5. Password Hashing & Salting

   - Why: Even if an attacker gains access to password files, salted hashes are much harder to reverse (compared to plain-text passwords).
   - Effect: Makes brute force password cracking more time-consuming.

6. Rate Limiting and Throttling
   - How it Works: Restrict the number of login attempts a user can make in a given period.
   - Effect: Prevents rapid-fire brute force attacks, slowing the attacker down.

---

### Data Loss Prevention (DLP)

#### Definition

- DLP is a strategy to prevent end users from sending sensitive or critical information outside the corporate network.
- Includes software solutions to monitor, classify, and restrict data transfers by end users.

#### How DLP Works

- Uses business rules to classify confidential information and block unauthorized access or sharing.
- Prevents accidental or malicious sharing of sensitive data (e.g., emails, files uploaded to cloud storage services).
- Example: Blocking an employee from forwarding corporate emails outside the domain or uploading files to consumer cloud services like Dropbox.

#### Why DLP?

1. Insider Threats:
   - Protects against intentional or accidental data leaks by employees.
2. Regulatory Compliance:
   - Driven by stringent state privacy laws with strict data protection requirements.

#### Capabilities of DLP Tools

- Endpoint Monitoring: Controls activities on devices (e.g., file copying, email forwarding).
- Network Protection: Filters data streams and safeguards data in motion across corporate networks.
- Cloud Security: Restricts unauthorized cloud storage usage.

---

### Database Security

Definition:  
Database security involves mechanisms to protect databases from intentional or accidental threats, ensuring confidentiality, integrity, and availability.

#### Common Threats to Databases

1. Theft and Fraud
2. Loss of Confidentiality

#### Impacts of Database Attacks

- Loss of Privacy: Sensitive data exposed to unauthorized users.
- Loss of Integrity: Data is altered, leading to inaccurate or corrupted information.
- Loss of Availability: Database becomes inaccessible, disrupting business operations.

#### Why Databases Are Vulnerable

1. Excessive and Unused Privileges: Over-privileged accounts increase attack surfaces.
2. Privilege Abuse: Legitimate users misusing granted privileges.
3. SQL Injection: Attackers manipulate database queries to access or modify data.
4. Weak Audit Trails: Inadequate logging of user actions makes detecting breaches difficult.
5. Storage Media Exposure: Physical theft or unauthorized access to storage devices.
6. Exploitation of Misconfigured Databases: Vulnerabilities due to improper setup or outdated software.
7. Unmanaged Sensitive Data: Lack of oversight on critical or confidential data.

#### Key Takeaways

- Ensure proper access controls and privilege management.
- Regularly audit database activity.
- Address vulnerabilities through updates and secure configurations.
- Protect sensitive data with encryption and robust security protocols.

---

### SQL Injection

#### Definition

- SQL Injection is a security vulnerability where malicious SQL commands are inserted into input fields, URLs, or data structures to manipulate or exploit a database via a web application.

#### Characteristics of SQL Injection Attacks

- Targets: Web applications using databases, often built with PHP or ASP.NET.
- Input Sources: Address bars, search fields, or form inputs.
- Vulnerability: Occurs when input is not properly validated before being passed to SQL statements.

#### Common Intentions of Attackers

1. Dump Database: Extract sensitive data from the database.
2. Modify Content: Alter existing data maliciously.
3. Execute Unauthorized Queries: Perform unauthorized database operations.
4. Delete Data: Remove critical database information (e.g., via `DROP TABLE`).
5. Execute OS Commands: Run system commands via SQL.
6. Launch DoS Attacks: Overload the database to disrupt service.

#### Examples of SQL Injection

1. Basic Injection to Extract Data:  
   Input:  
   `blah' OR 'x' = 'x`  
   SQL Generated:  
   `SELECT prodinfo FROM prodtable WHERE prodname = 'blah' OR 'x' = 'x';`

   - Always true, resulting in the extraction of all data.

2. Destructive Query:  
   Input:  
   `blah'; DROP TABLE prodinfo; --`  
   SQL Generated:

   ```sql
   SELECT prodinfo FROM prodtable WHERE prodname = 'blah';
   DROP TABLE prodinfo; --
   ```

   - Deletes the table `prodinfo`.

3. Manipulate Prices:  
   Modify prices or add incorrect data by inserting malicious queries (e.g., `INSERT` or `UPDATE` statements).

#### Why SQL Injection is Dangerous

- Prevalent: One of the most common web-based security threats.
- Exploitation Potential: Can extract data, manipulate records, or even control the database server.
- Business Impact: Embarrassing data changes, financial losses, or user account compromise.

#### Countermeasures

1. Input Validation:

   - Check input syntax for validity based on expected formats (e.g., email, dates).
   - Exclude problematic characters like quotes (`'`), semicolons (`;`), or SQL keywords.

2. Parameterized Queries (Prepared Statements):

   - Use placeholders instead of directly embedding user input in SQL queries.
   - Example:
     ```php
     $stmt = $conn->prepare("SELECT prodinfo FROM prodtable WHERE prodname = ?");
     $stmt->bind_param("s", $prod_search);
     $stmt->execute();
     ```

3. Escaping Input:

   - Use escape functions to neutralize special characters in user input.

4. Length Limits on Inputs:

   - Restrict input size to prevent overly long malicious strings.

5. Error Handling:

   - Avoid exposing database error messages to users, as they can reveal table names or other sensitive details.

6. Access Control:

   - Use least privilege for database accounts; limit permissions for read/write actions.

7. Web Application Firewalls (WAF):
   - Deploy WAFs to detect and block SQL injection attempts dynamically.

#### Key Takeaway

- Preventing SQL injection requires a combination of input validation, secure query practices, and robust application design to minimize vulnerabilities and mitigate risks effectively.

---

### SQLMAP

#### What is SQLMAP?

- SQLMAP is a powerful, open-source tool for detecting and exploiting SQL injection vulnerabilities. It automates the process of identifying and leveraging these vulnerabilities in web applications.

#### Key Features of SQLMAP

- Detects and exploits SQL injection vulnerabilities.
- Supports a wide range of database management systems (e.g., MySQL, Oracle, PostgreSQL, Microsoft SQL Server).
- Automates testing and payload generation for SQL injection.
- Capable of database fingerprinting, data extraction, and accessing the file system.

#### How to Access SQLMAP

1. Download SQLMAP:

   - Official site: [http://sqlmap.org](http://sqlmap.org).
   - Pre-installed in Kali Linux at:  
     Applications → Database Assessment → Sqlmap.

2. Identify SQL Injection Points:
   - Navigate to the target page containing the SQL injection vulnerability.
   - Capture the HTTP request header using a browser or proxy tool like Burp Suite.

#### Example Command

Run SQLMAP with the HTTP request to test for vulnerabilities.

```bash
sqlmap -u "http://targetsite.com/page?id=1" --dbs
```

- `-u`: Specifies the URL to test.
- `--dbs`: Retrieves database names if the site is vulnerable.

#### Testing Variables

- SQLMAP tests parameters in the request (e.g., `id` in `?id=1`) to identify vulnerable points.
- Example:  
   The tool may indicate:  
   "The parameter 'id' is vulnerable."

#### SQLMAP Output

- Shows the tested variables and their vulnerability status.
- Highlights the type of SQL injection found (e.g., error-based, time-based blind).
- Allows further exploitation, such as dumping database contents.

#### Usage Tips

- Use proxies to monitor and refine SQLMAP commands.
- Combine with other tools (e.g., Burp Suite) for effective vulnerability assessment.
- Always conduct testing with proper authorization to avoid legal issues.

#### Key Takeaway

- SQLMAP simplifies the detection and exploitation of SQL injection vulnerabilities, making it an essential tool for penetration testers and security professionals. However, it should only be used ethically and with permission.

---

### Wireless Security

#### Definition

- Wireless security prevents unauthorized access or damage to systems using wireless networks.

#### Key Points

- Network Type: Supported by radio communications.
- Vulnerability: Wireless networks are exposed to specialized attacks.
- Shared Concerns: Similar security issues as in wired environments.

---

### Wireless Local Area Network (WLAN)

#### Definition

- A WLAN is a wireless network that connects two or more devices to form a local area network within a limited range.

#### Benefits

- Mobility: Provides internet connectivity while on the move.
- Cost-Effective: Reduces expenses for cabling and infrastructure.
- Ease of Maintenance: Less hassle for IT and maintenance teams.
- Flexibility: Offers adaptability for organizational needs.
- Disaster Recovery: Useful when physical infrastructure is damaged.

---

### Why Security is a Bigger Concern in Wireless Networks

1. Lack of Physical Protection:

- No physical connections between devices; replaced by logical associations.
- Messages can be sent/received without physical access to infrastructure (e.g., cables, hubs, routers).

2. Broadcast Communications:

- Nature of Wireless: Typically uses radio waves, which are broadcast.
- Eavesdropping Risk: Transmissions can be overheard by anyone within range.
- Transmission Interference:
  - Any nearby device can generate signals.
  - Signals can interfere with others, causing jamming and disrupting communication.

---

### Wireless Network Attack

Key Attack Methods:

1. Eavesdropping: Intercepting communications is straightforward.

- Wireless signals are broadcast, making it easy for attackers to intercept unencrypted communications. Tools like packet sniffers (e.g., Wireshark) allow attackers to capture and analyze transmitted data.

2. Message Injection: Easy to inject bogus messages into the network.

- Attackers inject fake packets into the network, exploiting weak authentication mechanisms. This can manipulate communications, disrupt operations, or spread malware.

3. Replay Attacks: Previously recorded messages can be replayed effortlessly.

- Attackers record legitimate messages and retransmit them later to trick systems into performing unauthorized actions. This bypasses time-sensitive protocols if replay detection isn't implemented.

4. Unauthorized Access: Gaining illegitimate access to the network and services is simple.

- Weak or no authentication allows attackers to connect to the network, access sensitive resources, or use network services for malicious purposes (e.g., launching further attacks).

5. Denial of Service (DoS): Easily achieved by jamming wireless signals.

- How it works: Attackers flood the wireless spectrum with signals (jamming), causing interference that disrupts legitimate communication. This makes the network unavailable to users.

---

### Wireless Communication Security Requirements

1. Confidentiality:

- Messages sent over wireless links must be encrypted to prevent unauthorized access.

2. Authenticity:

- Verify the origin of messages received over wireless links to ensure they are genuine.

3. Replay Detection:

- Check the freshness of messages to prevent replay attacks.

4. Integrity:

- Ensure messages have not been altered during transmission.
- Verify the integrity of all received messages.

5. Access Control:

- Only legitimate entities should have access to the network and its services.
- Access control must be continuous and enforced at all times.

6. Protection Against Jamming:

- Implement measures to detect and mitigate jamming attacks.

---

### Wireless Security Precautions

1. Change Default Settings:

   - Rename default network names (SSIDs).
   - Add strong passwords to all devices.

2. Limit Visibility:

   - Disable SSID broadcasting on network hubs.
   - Avoid naming the network with identifiable information (e.g., company name).

3. Physical Security:

   - Place wireless hubs away from windows to limit signal range.

4. Use Encryption:

   - Enable built-in encryption protocols (e.g., WPA3).

5. Disable Unused Features:

   - Turn off unnecessary network functions to reduce attack surface.

6. Firewall Protection:

   - Use a firewall between the wireless network and company systems.

7. Data Protection:

   - Encrypt sensitive data before transmission.

8. Regular Security Audits:
   - Routinely test and update wireless network security measures.

---

### Wireless Security Countermeasures

1. Encrypt:

- Use robust encryption protocols like WPA3 to protect data transmitted over wireless networks.
- Ensure end-to-end encryption for sensitive communications.

2. Apply Access Control Rules:

- Limit network access to authorized devices and users using MAC address filtering or VLANs.
- Regularly review and update access permissions.

3. Secure Trusted Devices:

- Protect devices connected to the wireless network with strong passwords, firewalls, and security updates.
- Disable unnecessary features or ports on devices to reduce vulnerabilities.

4. Authenticate Users & Devices:

- Implement multi-factor authentication (MFA) for all users.
- Use digital certificates or pre-shared keys to verify devices.

5. Integrate with IDPS & Other Security Tools:

- Deploy Intrusion Detection and Prevention Systems (IDPS) to monitor and block suspicious activities.
- Use firewalls, endpoint protection, and network monitoring tools to enhance security.

---

### Secure Wi-Fi Networks

1. Use Encryption Methods:

- Enable strong encryption protocols like WPA3 to protect transmitted data.
- Avoid outdated protocols such as WEP or WPA.

2. Activate Router Firewall:

- Enable the built-in firewall on your router to block unauthorized access and filter traffic.

3. Protect Service Set Identifier (SSID):

- Change the default SSID to a unique name that doesn’t reveal personal or organizational information.
- Disable SSID broadcasting to hide the network from casual discovery.

4. Utilize Virtual Private Networks (VPNs):

- Use a VPN to encrypt internet traffic and protect sensitive data from interception, especially on public Wi-Fi.

5. Deploy Wireless Security Software:

- Implement security tools that monitor and secure Wi-Fi connections, detect unauthorized access, and prevent intrusions.

---

### Wired Equivalent Privacy (WEP)

#### Definition

- WEP is part of the IEEE 802.11 specification designed to secure Wi-Fi networks, aiming to provide the same level of security as wired LANs without specific protection mechanisms.

#### Goals

- Secure Wi-Fi to match the security of a wired LAN.
- Provide basic security for access control, confidentiality, and integrity.
- Note: WEP failed to achieve even weak security due to significant vulnerabilities.

#### Services Provided

1. Access Control: Restricts network access to authorized users.
2. Message Confidentiality: Encrypts packets to protect data from eavesdropping.
3. Message Integrity: Ensures packets are not modified during transmission.

#### How WEP Works

1. Secret Key:

   - A shared key is used between the sender (mobile station) and receiver (access point).
   - Packets are encrypted with this key before transmission.

2. Integrity Check:
   - A checksum is added to ensure packets are not altered in transit.
   - However, this mechanism is weak and easily exploitable.

#### Security Issues

- Weak Encryption: Uses static keys and vulnerable algorithms, making it susceptible to attacks like key cracking.
- Integrity Vulnerability: Poor integrity mechanisms make WEP easy to bypass.
- Obsolescence: WEP has been deprecated and replaced by more secure protocols like WPA2 and WPA3.

---

### Wireless Security Solutions

1. Wired Equivalent Privacy (WEP) & WEP2:

- Early encryption standards for Wi-Fi networks.
- Weakness: Vulnerable to attacks; now considered obsolete.

2. Media Access Control (MAC) Address Filtering:

- Configure access points to allow only specific MAC addresses.
- Advantages: Simple to set up.
- Drawbacks: Easy to spoof MAC addresses, providing limited protection.

3. Virtual Private Networks (VPNs):

- Encrypt all data transmitted over wireless networks.
- Advantages: Strong protection for sensitive communications.
- Drawbacks: Requires significant management and client-side configuration.

4. User Authentication:

- Enforce strong user verification methods, such as passwords or multi-factor authentication (MFA).
- Enhances access control by validating authorized users.

5. Temporal Key Integrity Protocol (TKIP) [IEEE 802.11i]:

- A security enhancement to WEP, introduced as part of WPA.
- Advantages: Dynamically generates new encryption keys for every data packet.
- Drawbacks: Considered outdated compared to modern standards like WPA3.

---

### WEP vs. WPA vs. WPA2 vs. WPA3

| Feature           | WEP                         | WPA                                   | WPA2                                            | WPA3                                        |
| ----------------- | --------------------------- | ------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| Release Year      | 1997                        | 2003                                  | 2004                                            | 2018                                        |
| Encryption        | RC4                         | TKIP / RC4                            | AES-CCMP                                        | AES-CCMP / AES-GCMP                         |
| Session Key       | 64/128 bit                  | 128 bit                               | 128 bit                                         | 128/256 bit                                 |
| Authentication    | Open system, shared key     | Pre-shared key                        | Pre-shared key                                  | SAE (Simultaneous Authentication of Equals) |
| Level of Security | Very low                    | Low                                   | Moderate                                        | High                                        |
| Weakness          | Easily exploited by hackers | Weak encryption, compatibility issues | Vulnerable to KRACK (Key Reinstallation Attack) | Complex deployment but highly secure        |

#### Key Highlights

- WEP: Outdated and highly insecure due to weak RC4 encryption and static keys.
- WPA: Improved security with TKIP but still has weaknesses and compatibility issues.
- WPA2: Introduced strong AES encryption but vulnerable to KRACK attacks.
- WPA3: Latest and most secure standard with enhanced encryption (AES-GCMP) and robust authentication (SAE).
