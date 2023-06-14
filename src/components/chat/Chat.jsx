import { Messages } from "../../Database.jsx";
import "./Chat.css";

const Chat = ({ chat_id }) => {
    const chat = Messages.filter((el) => el.chat_id === chat_id);
    return (
        <>
            <div className="chat-wrapper">
                <ul className="chat">
                    {chat.map((el) => {
                        if (el.from === 0) {
                            return (
                                <li
                                    key={el.message_id}
                                    className="my_message message"
                                >
                                    {el.content}
                                </li>
                            );
                        } else {
                            return (
                                <li
                                    key={el.message_id}
                                    className="ot_message message"
                                >
                                    {el.content}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <div className="panel">
                <input type="text" />
                <button>SEND</button>
            </div>
        </>
    );
};

export default Chat;
