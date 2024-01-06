import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../../src/firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
        <span ref={scroll}></span>
        {messages?.map((message) => (
          <Message key={message.id} message={message} user={user} />
        ))}
      </div>

      <SendMessage scroll={scroll} user={user} />
    </main>
  );
};

export default ChatBox;
