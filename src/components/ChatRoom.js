import React, {useEffect, useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";

function ChatRoom(props) {
    const [chatroom, setChatroom] = useState([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseURL + 'api/student/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setChatroom(response.data)
            })
            .catch((error) => {
                console.log(error);
            });


    }, []);
    return (
        <div>
            <h1>Chat Room</h1>
            <h1>Test CI</h1>
            <h1>Checking</h1>
            <ul>
                {chatroom.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ChatRoom;