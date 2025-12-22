import { useEffect, useState } from "react";

export default function useWebSocket(url) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = (event) => setMessages((prev) => [...prev, event.data]);
    return () => ws.close();
  }, [url]);

  return messages;
}
