import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! I’m your ChatBot. How can I help?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (message) => {
    const lower = message.toLowerCase();

    // Check for greetings
    if (
      lower.includes("hey") ||
      lower.includes("hi") ||
      lower.includes("hello") ||
      lower.includes("greetings")
    ) {
      return "Hello! How can I assist you today?";
    }

    // Check for price-related queries
    if (
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("how much")
    ) {
      return "For prices, please visit our 'Get Equipment' page or contact us directly.";
    } else if (lower.includes("location") || lower.includes("where")) {
      return "We're located in Nairobi. Visit our Contact page for directions!";
    } else if (lower.includes("contact")) {
      return "Reach out through our Contact page or call us at +254-746-269-409.";
    } else if (
      lower.includes("shop") ||
      lower.includes("buy") ||
      lower.includes("equipment")
    ) {
      return "You can shop gear directly on our 'Get Equipment' page.";
    } else if (
      lower.includes("soccer gear") ||
      lower.includes("gear") ||
      lower.includes("sports equipment")
    ) {
      return "We offer a wide range of soccer gear, from balls to jerseys. Visit our 'Get Equipment' page to explore!";
    }

    // Check for thank you responses
    if (
      lower.includes("thank you") ||
      lower.includes("thanks") ||
      lower.includes("thank you very much")
    ) {
      return "Thank you for shopping with us! We are more than honored to serve you again, and we hope you enjoyed the service!";
    }

    // Default response
    return "Hmm, I’m still learning! Can you rephrase that or visit our Contact page for help?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = {
        text: getBotResponse(input),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);

    setInput("");
  };

  const quickReplies = [
    "🛍️ Shop Gear",
    "💸 Ask Price",
    "📞 Contact Us",
    "📍 Where are you?",
  ];

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#007bff" : "#e9ecef",
              color: msg.sender === "user" ? "#fff" : "#000",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.quickReplies}>
        {quickReplies.map((text, i) => (
          <button
            key={i}
            onClick={() => {
              setInput(text);
              setTimeout(handleSend, 100);
            }}
            style={styles.quickButton}
          >
            {text}
          </button>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px",
    margin: "40px auto",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    height: "400px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#f8f9fa",
  },
  message: {
    padding: "10px 14px",
    borderRadius: "20px",
    maxWidth: "70%",
  },
  quickReplies: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "10px",
    gap: "8px",
    backgroundColor: "#f1f1f1",
    borderTop: "1px solid #ddd",
  },
  quickButton: {
    backgroundColor: "#fff",
    border: "1px solid #007bff",
    color: "#007bff",
    padding: "6px 12px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.2s",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "20px",
    marginRight: "8px",
    outline: "none",
  },
  button: {
    backgroundColor: "#007bff",
    border: "none",
    color: "white",
    padding: "10px 16px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default ChatBot;
