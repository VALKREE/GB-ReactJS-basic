import React from 'react';
import {useRef, useEffect, useState, useCallback} from 'react'

import './App.sass';
import {MessageList} from './components/MessageList'
import {Form} from './components/Form'
import {Message} from './components/Message'
function App(){
    const [messages,setMessages]=useState([{text: 'Welcome to chat!', author: "Chat", id: 0,}]);

    const hanlerClick = () => {
        setMessages(' ');
    };

    const handlerSending = useCallback((newMessage)=>{
        setMessages([...messages, newMessage]);
    }, [messages]);


    useEffect(() => {
        const timeout = setTimeout(()=>{
            if (!messages.length || messages[messages.length - 1].author === "AI: Alex"){
                return;
            }
            const newMessage = {
                author: "AI: Alex",
                text: "Hello! I'm Alex!",
                id: 0,
            }
            setMessages([...messages, newMessage]);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [messages])

    return (
        <div className="app">
            <div className="app_chat">
                <MessageList messages={messages} />
                <Form onSendMessage={handlerSending} />
            </div>
        </div>
    );
}


export default App;