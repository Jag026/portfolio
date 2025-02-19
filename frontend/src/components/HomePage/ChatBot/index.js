import React, {useState} from 'react';
import {csrfFetch} from "../../../store/csrf";

const ChatBot = () => {
    const [chatMessages, setChatMessages] = useState([
        {user: 'bot',
         message: 'What would you like to learn?'
        }
    ])
    const [userMessage, setUserMessage] = useState("");
    const [showTopics, setShowTopics] = useState(true);
    const [topics, setTopics] = useState(["Resume & Exp. Questions", "General Info", "Send me his resume", "Send him a message"])
    const [selectedTopic, setSelectedTopic] = useState(null);

    const updateChat = (user, message) => {
        setChatMessages((prevItems) => [...prevItems, {user: user, message: message}])
    }

    const sendMessageToBot = async(message) => {

        switch (selectedTopic) {
            case 'Resume & Exp. Questions':
                updateChat('user', message)
                const response = await csrfFetch('/api/users/post-ai-message', {
                    method: 'POST',
                    body: JSON.stringify({
                        message,
                    }),
                });
                const data = await response.json();
                console.log(data.response.content)
                updateChat('bot', data.response.content)
                return response;
                break;
        }
    }

    return (
        <div className="w-[400px] h-[460px] bg-black border-b-0 border-2 border-white flex flex-col">
            <div className="w-full h-full p-4 overflow-auto">
                <div className="text-[#edf6fc] bg-blue-200 rounded-xl py-2">
                    <p>Hello, I'm Drews AI assistant, please select a topic to ask questions:</p>
                </div>

                {showTopics &&
                    <div>
                    {topics.map((topic, index) => {
                        return (
                            <div key={index} className="flex py-2 hover:cursor-pointer" onClick={() => {
                                setShowTopics(false);
                                setSelectedTopic(topic)
                            }}>
                                <div className="w-48 bg-blue-200">
                                    <p>{topic}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>}

                {!showTopics && <div>
                    <p className="text-[#edf6fc]" onClick={() => {
                        setShowTopics(true)
                        setChatMessages([
                            {user: 'bot',
                                message: 'What would you like to learn?'
                            }
                        ])
                    }}>Back</p>
                    <div
                        className="text-[#edf6fc]rounded-xl p-2">
                        <p className="text-[#edf6fc]">{selectedTopic}</p>
                        {chatMessages.map((message, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex">
                                        {message.user === 'bot' && <img className="rounded-2xl h-[25px] w-[25px]"
                                                                        src={require("../../../images/react-icon.png")}/>}
                                        <div
                                            className={message.user === 'bot' ? "text-[#edf6fc] bg-blue-200 rounded-xl p-2" : "bg-green-200 rounded-xl p-2"}>
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
            <div className="bg-gray-200 w-full h-24 py-2">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
                <p onClick={() => sendMessageToBot(userMessage)}>Send</p>
            </div>
        </div>
    )
}

export default ChatBot;
