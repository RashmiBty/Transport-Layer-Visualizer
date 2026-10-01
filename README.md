# Computer Networks – Transport Layer Visualizer

## Dual-Panel Activity & Transport-Layer Protocol Visualizer

This project is a web-based visualization tool developed for **Computer Networks – Transport Layer, Assignment 2**.

The application demonstrates how common activities such as **Browsing, Mail, and Streaming** use transport-layer communication. It provides a dual-panel interface where users can switch between **Application Layer** and **Transport Layer** views and observe simulated protocol exchanges step by step.

## Features

- 🌐 **Browsing Activity**
  - Enter a URL and simulate website browsing
  - DNS Request and Response
  - HTTP Request and Response
  - TCP connection establishment and data transfer

- 📧 **Mail Activity**
  - Enter recipient, subject, and message
  - Simulated SMTP communication
  - TCP handshake and SMTP data transfer

- 🎬 **Streaming Activity**
  - Play and pause streaming
  - Select video quality
  - Simulated manifest and media segment requests
  - TCP-based media transfer visualization

- 🔄 **Application Layer View**
  - Displays DNS, HTTP, and SMTP activities

- 🚚 **Transport Layer View**
  - Displays TCP packet communication
  - SYN
  - SYN-ACK
  - ACK
  - PSH
  - FIN

- 📦 **Packet Details**
  - Direction
  - Sequence Number
  - Acknowledgement Number
  - Window Size
  - Flags
  - Packet Length

- ⏯️ **Visualization Controls**
  - Previous
  - Play
  - Pause
  - Next
  - Replay

- 📋 **Activity Log**
  - Records user actions such as browsing, sending mail, and streaming

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Live Server

## Project Structure

```text
Transport-Layer-Assignment-2/
│
├── index.html
├── style.css
└── script.js
