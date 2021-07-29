import React from 'react';
import {useRef, useEffect, useState, useCallback} from 'react'
import { TextField } from "@material-ui/core";
import './App.sass';

import {MessageList} from './components/MessageList'
import {Form} from './components/Form'
import {Message} from './components/Message'
import {Chats} from './components/Chats'
function App(){
    const [chats, setChats] = useState(
        [
            {
                chatId: 0, 
                chatName: "Какой-то чат", 
                chatDate: "01.01.2021", 
                chatLastMessage: "Последнее сообщение", 
                chatCountLastMessage: 3,
            }
        ]
    )
    const handlerChats = useCallback((newChat) => {
        setChats([...chats, newChat]);
    }, [chats]);

    const [messages, setMessages] = useState(
        [
            {
                text: 'Welcome to chat!', 
                author: "Chat", 
                id: 0,
            }
        ]
    );

    const hanlderClick = () => {
        setMessages(' ');
    };

    const handlerSending = useCallback((newMessage) => {
        if (newMessage.text !== ""){
            setMessages([...messages, newMessage]);
        }
    }, [messages]);


    useEffect(() => {
        const timeout = setTimeout(()=>{
            if (!messages.length || messages[messages.length - 1].author === "AI: Alex"){
                return;
            }
            const newMessage = {
                author: "AI: Alex",
                text: "Hello! I'm Alex!",
                id: 1,
            }
            setMessages([...messages, newMessage]);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [messages])

    return (
        <div className="app">
            <div className="app_messenger">
                <div className="app_messenger-chats">
                    <Chats chats={chats}/>
                </div>
                <div className="app_messenger-chat">
                    <MessageList messages={messages} />
                    <Form onSendMessage={handlerSending} />
                </div>
            </div>
        </div>
    );
}


export default App;