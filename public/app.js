document.addEventListener("DOMContentLoaded", function() {
    loadChatHistory();
  });
  
  function loadChatHistory() {
    var chatHistory = localStorage.getItem("chatHistory");
    if (chatHistory) {
        document.getElementById("chat-box").innerHTML = chatHistory;
    }
  }
  
  function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
  
    if (userInput.trim() !== "") {
        // Display user message
        chatBox.innerHTML += '<div class="chat-bubble user-bubble">' + userInput + '</div>';
  
        // Save chat history to local storage
        saveChatHistory(chatBox.innerHTML);
  
        // Simulate bot response (you can replace this with actual backend communication)
        setTimeout(function() {
            chatBox.innerHTML += '<div class="chat-bubble bot-bubble">Hey there! my name is Emmanuel,where are you at?</div>';
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  
            // Save chat history to local storage after bot response
            saveChatHistory(chatBox.innerHTML);
        }, 500);
  
        document.getElementById("user-input").value = ""; // Clear input field
    }
  }
  
  function saveChatHistory(chat) {
    localStorage.setItem("chatHistory", chat);
  }
  
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
  }
  
  function clearChat() {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";
    localStorage.removeItem("chatHistory");
  }
  
  // Rest of the JavaScript code for sending messages, loading chat history, etc.
  
