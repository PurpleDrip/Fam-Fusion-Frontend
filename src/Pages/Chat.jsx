import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
  const role = useSelector((state) => state.user.role);
  const clientId = useSelector((state) => state.user.id);
  const { id } = useParams(); // Child ID as the shared identifier
  const childId = id;
  console.log(childId);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
    setWs(socket);

    socket.onopen = () => {
      // Register with the WebSocket server using childId and clientId
      socket.send(JSON.stringify({ type: "register", childId, clientId }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "message" && data.childId === childId) {
        setMessages((prev) => [
          ...prev,
          { senderId: data.senderId, text: data.message },
        ]);
      }
    };

    return () => socket.close();
  }, [childId, clientId]);

  const sendMessage = () => {
    if (ws && message.trim()) {
      ws.send(
        JSON.stringify({
          type: "message",
          childId,
          senderId: clientId,
          message,
        })
      );
      setMessages((prev) => [...prev, { senderId: clientId, text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100 text-black">
      <h1 className="text-2xl font-bold text-center mb-4">
        Chat about Child {childId}
      </h1>
      <div className="flex-1 overflow-y-auto bg-white p-4 shadow-md rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.senderId === clientId
                ? "bg-blue-500 text-white self-end text-right"
                : "bg-gray-200 text-black self-start text-left"
            }`}
          >
            {msg.senderId === clientId ? "You: " : `${msg.senderId}: `}
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default React.memo(Chat);
