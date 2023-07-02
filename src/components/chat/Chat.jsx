import { useEffect, useState } from "react";

import "./Chat.css";
import { HubConnectionBuilder } from "@microsoft/signalr";
import client from "../../utils/API.js";

let key = 0;

const Chat = ({ chatId }) => {
    const [connection, setConnection] = useState(null);
    const [value, setValue] = useState('');
    const [myId, setMyId] = useState(null);
    const [otherId, setOtherId] = useState(null);
    const [messages, setMessages] = useState([]);

    const joinChat = async (id, otherId) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("http://localhost:5234/chathub")
                .build();

            connection.on("GetThatMessage", (userId, message) => {
                key++;
                if (userId === id) {
                    setMessages((prev) => ([
                        ...prev,
                        { mine: true, key, message }
                    ]))
                }
                if (userId === otherId) {
                    setMessages((prev) => ([
                        ...prev,
                        { mine: false, key, message }
                    ]))
                }
            })

            await connection.start();

            return connection;
        } catch (e) {
            console.log(e);
        }
    }

    const onSend = (e) => {
        e.preventDefault();
        setValue('');
        connection.invoke("AddMessageToChat", myId, value)
    }

    useEffect(() => {
        let c;

        (async () => {
            let { data: { id } } = await client.get('User/Informations');
            let otherData = await client.get(`User/${chatId}`);
            id = id.toString()
            let id2 = otherData.data.id;
            id2 = id2.toString();
            setMyId(id);
            setOtherId(id2);
            c = await joinChat(id, id2);
            setConnection(c);
        })()

        return async () => {
            await c?.stop();
        }
    }, [])


    return (
        <>
            <div className="chat-wrapper">
                <ul className="chat">
                    {messages && messages.map((el) => {
                        if (!el.mine) {
                            return (
                                <li
                                    key={el.key}
                                    className="my_message message"
                                >
                                    {el.message}
                                </li>
                            );
                        } else {
                            return (
                                <li
                                    key={el.key}
                                    className="ot_message message"
                                >
                                    {el.message}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <form className="panel" onSubmit={onSend}>
                <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                <input type="submit" value="SEND" />
            </form>
        </>
    );
};

export default Chat;
