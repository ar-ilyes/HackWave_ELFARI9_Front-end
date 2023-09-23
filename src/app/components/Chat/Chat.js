"use client"
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';
import { useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_ENDPOINT;

const Chat = () => {

  const socket = useRef(null);
  let { user } = useAuth();
  const [room, setRoom] = useState(useSearchParams().get('room'));
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.current = io(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT);

    socket.current.emit('join', { name: user.name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.current.disconnect();
    }
  }, [ENDPOINT, user.name, room]);
  
  useEffect(() => {

    const onMessage = (message) => {
      setMessages(messages => [ ...messages, message ]);
    }

    const onRoomData = ({ users }) => {
      setUsers(users);
    }

    socket.current.on('message', onMessage);
    socket.current.on("roomData", onRoomData);

    return () => {
      socket.current.off('message', onMessage);
      socket.current.off('roomData', onRoomData);
    }
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.current.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={user.name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
