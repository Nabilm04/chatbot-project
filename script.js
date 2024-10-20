const messagesContainer = document.getElementById("messages");
const inputField = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

let userData = { name: null };

function greetUser() {
    addMessage("Hello, thank you for checking out my bot. What's your name? ", 'bot-message');
}

function chatbotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userData.name === null) {
        userData.name = userMessage;
        return `Nice to meet you, ${userData.name}! What would you like to view? You can choose from: \n1. View Resume \n2. View LinkedIn \n3. View GitHub \n4. Send an Email`;
    } else if (userMessage.includes('resume')) {
        return 'Download my resume here: <a href="assets/nabils_resume.pdf" download="Nabil_Resume.pdf">Download Resume</a>';
    } else if (userMessage.includes('linkedin')) {
        return "My LinkedIn is: https://www.linkedin.com/in/musfiqur-nabil-b65833237/";
    } else if (userMessage.includes('github')) {
        return "My GitHub is: https://github.com/Nabilm04";
    } else if (userMessage.includes('email')) {
        return "Send me a messsage at: nxbilm@gmail.com";
    } else if (userMessage.includes('bye')) {
        return "Have a nice day!";
    } else {
        return "Choose from: \n1. View Resume \n2. View LinkedIn \n3. View GitHub \n4. Send an Email";
    }
}

function sendMessage() {
    const userMessage = inputField.value;
    if (userMessage) {
        addMessage(userMessage, 'user-message');
        inputField.value = '';

        const botResponse = chatbotResponse(userMessage);
        addMessage(botResponse, 'bot-message', true); 
    }
}

sendButton.addEventListener("click", sendMessage);

inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function addMessage(text, className, isHTML = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + className;

    if (isHTML) {
        messageDiv.innerHTML = text; 
    } else {
        messageDiv.textContent = text; 
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; 
}

window.onload = greetUser;
