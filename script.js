// ===============================
// Global Variables
// ===============================

let currentActivity = "";
let currentView = "application";

let currentStep = 0;
let isPlaying = false;

let timer = null;


// ===============================
// Activity Log
// ===============================

function addActivity(message) {

    const activityLog =
        document.getElementById("activityLog");

    activityLog.innerHTML +=
        `<p>${message}</p>`;
}


// ===============================
// Browsing
// ===============================

function visitWebsite() {

    const url =
        document.getElementById("urlInput").value;

    if (url === "") {

        alert("Please enter a URL.");

        return;
    }


    currentActivity = "Browsing";

    currentStep = 0;


    addActivity(
        "Browsing started: " + url
    );


    showApplicationLayer();
}


// ===============================
// Mail
// ===============================

function sendMail() {

    const to =
        document.getElementById("mailTo").value;

    const subject =
        document.getElementById("mailSubject").value;

    const body =
        document.getElementById("mailBody").value;


    if (to === "" || subject === "") {

        alert("Please enter To and Subject.");

        return;
    }


    currentActivity = "Mail";

    currentStep = 0;


    addActivity(
        "Mail sent to: " + to
    );


    showApplicationLayer();
}


// ===============================
// Streaming
// ===============================

function startStreaming() {

    const quality =
        document.getElementById("quality").value;


    currentActivity = "Streaming";

    currentStep = 0;


    addActivity(
        "Streaming started - Quality: " +
        quality
    );


    showApplicationLayer();
}


// ===============================
// Pause Streaming
// ===============================

function pauseStreaming() {

    addActivity(
        "Streaming paused."
    );
}


// ===============================
// Application Layer View
// ===============================

function showApplicationLayer() {

    currentView = "application";


    const protocolView =
        document.getElementById("protocolView");


    if (currentActivity === "") {

        protocolView.innerHTML = `

            <h3>Select an activity</h3>

            <p>
                Choose Browsing, Mail, or Streaming
                from the left panel.
            </p>

        `;

        return;
    }


    if (currentActivity === "Browsing") {

        protocolView.innerHTML = `

            <h3>Application Layer - Browsing</h3>

            <div class="protocol-step">

                <p>1. DNS Request</p>

                <p>2. DNS Response</p>

                <p>3. HTTP Request</p>

                <p>4. HTTP Response</p>

            </div>

        `;
    }


    else if (currentActivity === "Mail") {

        protocolView.innerHTML = `

            <h3>Application Layer - Mail</h3>

            <div class="protocol-step">

                <p>1. SMTP Connection</p>

                <p>2. MAIL FROM</p>

                <p>3. RCPT TO</p>

                <p>4. DATA</p>

                <p>5. Mail Content</p>

            </div>

        `;
    }


    else if (currentActivity === "Streaming") {

        protocolView.innerHTML = `

            <h3>Application Layer - Streaming</h3>

            <div class="protocol-step">

                <p>1. Request Manifest</p>

                <p>2. Receive Manifest</p>

                <p>3. Request Media Segment</p>

                <p>4. Receive Media Segment</p>

            </div>

        `;
    }
}


// ===============================
// Transport Layer View
// ===============================

function showTransportLayer() {

    currentView = "transport";


    if (currentActivity === "") {

        document.getElementById("protocolView").innerHTML = `

            <h3>Transport Layer</h3>

            <p>
                Start an activity first.
            </p>

        `;

        return;
    }


    updateTransportStep();
}


// ===============================
// Transport Steps
// ===============================

function updateTransportStep() {

    const protocolView =
        document.getElementById("protocolView");


    if (currentActivity === "Browsing") {

        showBrowsingTCP();

    }


    else if (currentActivity === "Mail") {

        showMailTCP();

    }


    else if (currentActivity === "Streaming") {

        showStreamingTCP();

    }
}


// ===============================
// Browsing TCP
// ===============================

function showBrowsingTCP() {

    const steps = [

        {
            message: "SYN",
            direction: "Client → Server",
            seq: "1000",
            ack: "0",
            win: "65535",
            flags: "SYN",
            length: "0"
        },

        {
            message: "SYN-ACK",
            direction: "Server → Client",
            seq: "5000",
            ack: "1001",
            win: "65535",
            flags: "SYN, ACK",
            length: "0"
        },

        {
            message: "ACK",
            direction: "Client → Server",
            seq: "1001",
            ack: "5001",
            win: "65535",
            flags: "ACK",
            length: "0"
        },

        {
            message: "HTTP DATA",
            direction: "Client → Server",
            seq: "1001",
            ack: "5001",
            win: "65535",
            flags: "PSH, ACK",
            length: "512"
        },

        {
            message: "FIN",
            direction: "Client → Server",
            seq: "1513",
            ack: "5501",
            win: "65535",
            flags: "FIN, ACK",
            length: "0"
        }

    ];


    showTCPPacket(steps);
}


// ===============================
// Mail TCP
// ===============================

function showMailTCP() {

    const steps = [

        {
            message: "SYN",
            direction: "Client → Mail Server",
            seq: "2000",
            ack: "0",
            win: "65535",
            flags: "SYN",
            length: "0"
        },

        {
            message: "SYN-ACK",
            direction: "Mail Server → Client",
            seq: "6000",
            ack: "2001",
            win: "65535",
            flags: "SYN, ACK",
            length: "0"
        },

        {
            message: "ACK",
            direction: "Client → Mail Server",
            seq: "2001",
            ack: "6001",
            win: "65535",
            flags: "ACK",
            length: "0"
        },

        {
            message: "SMTP DATA",
            direction: "Client → Mail Server",
            seq: "2001",
            ack: "6001",
            win: "65535",
            flags: "PSH, ACK",
            length: "800"
        },

        {
            message: "FIN",
            direction: "Client → Mail Server",
            seq: "2801",
            ack: "6501",
            win: "65535",
            flags: "FIN, ACK",
            length: "0"
        }

    ];


    showTCPPacket(steps);
}


// ===============================
// Streaming TCP
// ===============================

function showStreamingTCP() {

    const steps = [

        {
            message: "SYN",
            direction: "Client → Streaming Server",
            seq: "3000",
            ack: "0",
            win: "65535",
            flags: "SYN",
            length: "0"
        },

        {
            message: "SYN-ACK",
            direction: "Streaming Server → Client",
            seq: "7000",
            ack: "3001",
            win: "65535",
            flags: "SYN, ACK",
            length: "0"
        },

        {
            message: "ACK",
            direction: "Client → Streaming Server",
            seq: "3001",
            ack: "7001",
            win: "65535",
            flags: "ACK",
            length: "0"
        },

        {
            message: "MEDIA SEGMENT 1",
            direction: "Server → Client",
            seq: "7001",
            ack: "3001",
            win: "65535",
            flags: "PSH, ACK",
            length: "1200"
        },

        {
            message: "MEDIA SEGMENT 2",
            direction: "Server → Client",
            seq: "8201",
            ack: "3001",
            win: "65535",
            flags: "PSH, ACK",
            length: "1200"
        },

        {
            message: "MEDIA SEGMENT 3",
            direction: "Server → Client",
            seq: "9401",
            ack: "3001",
            win: "65535",
            flags: "PSH, ACK",
            length: "1200"
        },

        {
            message: "FIN",
            direction: "Server → Client",
            seq: "10601",
            ack: "3001",
            win: "65535",
            flags: "FIN, ACK",
            length: "0"
        }

    ];


    showTCPPacket(steps);
}


// ===============================
// Display TCP Packet
// ===============================

function showTCPPacket(steps) {

    if (currentStep < 0) {

        currentStep = 0;

    }


    if (currentStep >= steps.length) {

        currentStep = steps.length - 1;

    }


    const step = steps[currentStep];


    document.getElementById("protocolView").innerHTML = `

        <h3>${step.message}</h3>

        <p>
            Direction:
            <strong>${step.direction}</strong>
        </p>

        <p>
            Step:
            ${currentStep + 1} / ${steps.length}
        </p>

    `;


    document.getElementById("direction").innerText =
        step.direction;

    document.getElementById("seqNumber").innerText =
        step.seq;

    document.getElementById("ackNumber").innerText =
        step.ack;

    document.getElementById("windowSize").innerText =
        step.win;

    document.getElementById("flags").innerText =
        step.flags;

    document.getElementById("packetLength").innerText =
        step.length;
}


// ===============================
// Next
// ===============================

function nextStep() {

    if (currentActivity === "") {

        return;
    }


    currentStep++;

    updateTransportStep();
}


// ===============================
// Previous
// ===============================

function previousStep() {

    if (currentActivity === "") {

        return;
    }


    currentStep--;

    updateTransportStep();
}


// ===============================
// Play
// ===============================

function playVisualization() {

    if (currentActivity === "") {

        return;
    }


    currentView = "transport";

    isPlaying = true;


    clearInterval(timer);


    timer = setInterval(function () {

        if (!isPlaying) {

            return;
        }


        currentStep++;

        updateTransportStep();


        if (currentStep > 6) {

            clearInterval(timer);

            isPlaying = false;

        }

    }, 2000);
}


// ===============================
// Pause
// ===============================

function pauseVisualization() {

    isPlaying = false;

    clearInterval(timer);
}


// ===============================
// Replay
// ===============================

function replayVisualization() {

    pauseVisualization();

    currentStep = 0;

    showTransportLayer();
}