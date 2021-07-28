import React, { useState } from 'react';
import './App.sass';

const userId = 1;
const username = 'User 1';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [
                {
                    id: 0,
                    author: "AI: Alex",
                    text: "Hello! I,m Alex!",
                },
            ]
        }
        this.user = username
        this.sendMessage = this.sendMessage.bind(this)
    }
    sendMessage(text) {
        let msg = text;
        console.log(msg);
        msg,
    }
    render() {
        return (
            <div className="app">
              <MessageList 
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage}
              />
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li  key={message.id} className="message">
                        <div>{message.author}</div>
                        <div>{message.text}</div>
                      </li>
                    )
                })}
            </ul>
        )
    }
}

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })

    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="message-form">
                <input
                    className="message-input"
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Введите ваше сообщение и нажмите Enter"
                    type="text" />
            </form>
        )
    }
}



