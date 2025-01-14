import React, { useState, useEffect } from "react";

const ChatORP = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [
        ...prev,
        `User ${data.profileId}: ${data.message}`,
      ]);
    };

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(
        JSON.stringify({
          type: "message",
          message,
        })
      );
      setMessages((prev) => [...prev, `You: ${message}`]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat with Users</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatORP;
