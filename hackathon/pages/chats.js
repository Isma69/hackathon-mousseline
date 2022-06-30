import React, {useState, useEffect, useContext} from "react";
import {Context} from "../context";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() => 
  import ("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() => 
  import ("react-chat-engine").then((module) => module.MessageFormSocial)
);



export default function Chats() {
    const { username, secret } = useContext(Context)
    const [showChat, setShowChat] = useState(false)
    const router = useRouter();

    useEffect(()  => {
        if (typeof document !== null) {
            setShowChat(true);
        }
    });

    useEffect(() => {
        if (username.length === 0 || secret.length === 0) router.push("/auth");
    })

    if (!showChat) return <div />


  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
        height='calc(100vh - 200px)'
        projectID='0819f29f-cd38-48dc-97a4-0790f92219fa'
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial/>}
        />
    </div>
  </div>
  );
}
