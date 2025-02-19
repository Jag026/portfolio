import React, {useState} from 'react';

const ChatBot = () => {
    const [chatMessages, setChatMessages] = useState([
        {user: 'bot',
         message: 'Greetings! I am Drews AI assistant, please select an option or enter a question about Drew.'
        }
    ])
    const [userMessage, setUserMessage] = useState("");


    const updateChat = (user, message) => {
        setChatMessages((prevItems) => [...prevItems, {user: user, message: message}])
    }
    return (
        <div className="w-[400px] h-[460px] bg-black border-b-0 border-2 border-white flex flex-col">
            <div className="w-full h-full p-4">
                <div>
                    {chatMessages.map((message, index) => {
                        return (
                            <div key={index}>
                                <div className="flex">
                                    {message.user === 'bot' && <img className="rounded-2xl h-[25px] w-[25px]" src={require("../../../images/react-icon.png")} />}
                                    <div className={message.user === 'bot' ? "text-[#edf6fc] bg-blue-200 rounded-xl p-2" : "bg-green-200 rounded-xl p-2" }>
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-gray-200 w-full h-24">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
                <p onClick={() => updateChat('user', userMessage)}>Send</p>
            </div>
        </div>
    )
}

export default ChatBot;
