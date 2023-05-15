import './Chat.css';

const Chat = (props) => {
    const chat = props.chat;
    return (
        <>
            <div className='chat-wrapper'>
                <ul className='chat'>
                    {
                        chat.map((el) => {
                            if (el.id1 === 0) {
                                return <li key={el.id_message} className='my_message message'>{el.message}</li>
                            } else {
                                return <li key={el.id_message} className='ot_message message'>{el.message}</li>
                            }
                        })
                    }
                </ul>
            </div>
                <div className='panel'>
                    <input type="text"/>
                    <button>SEND</button>
                </div>

        </>
    )
}

export default Chat;