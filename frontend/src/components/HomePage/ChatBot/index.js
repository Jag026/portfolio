import React, {useEffect, useState} from 'react';
import {csrfFetch} from "../../../store/csrf";

const ChatBot = () => {
    const [chatMessages, setChatMessages] = useState([])
    const [userMessage, setUserMessage] = useState("");
    const [showTopics, setShowTopics] = useState(true);
    const [topics, setTopics] = useState(["Resume & Exp. Questions", "General Info", "Send me his resume", "Send him a message"])
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [disableSendButton, setDisableSendButton] = useState(true);

    const updateChat = (user, message) => {
        setChatMessages((prevItems) => [...prevItems, {user: user, message: message}]);
    }

    const sendMessageToBot = async(message) => {
        setDisableSendButton(true);
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
                if (data) {
                    updateChat('bot', data.response.content);
                    setTimeout(() => {
                        setDisableSendButton(false);
                    }, 500)
                }
                return response;
                break;

            case 'General Info':
                updateChat('user', message)
                const resp = await csrfFetch('/api/users/post-ai-about', {
                    method: 'POST',
                    body: JSON.stringify({
                        message,
                    }),
                });
                const dataa = await resp.json();
                if (dataa) {
                    updateChat('bot', dataa.response.content);
                    setTimeout(() => {
                        setDisableSendButton(false);
                    }, 500)
                }
                return resp;
                break;

            case 'Send me his resume':
                updateChat('user', message)
                updateChat('bot', 'Sending email.....');
                const respo = await csrfFetch('/api/users/send-resume', {
                    method: 'POST',
                    body: JSON.stringify({
                        message,
                    }),
                });
                const dataaa = await respo.json();
                if (dataaa) {
                    updateChat('bot', 'Email sent');
                }
                return respo;
                break;

            case 'Send him a message':
                updateChat('user', message)
                updateChat('bot', 'Sending message.....');
                const respoo = await csrfFetch('/api/users/send-message', {
                    method: 'POST',
                    body: JSON.stringify({
                        message,
                    }),
                });
                const dataaaa = await respoo.json();
                if (dataaaa) {
                    updateChat('bot', 'Message Sent');
                }
                return respoo;
                break;
        }
    }

    return (
        <div className="w-[380px] h-[460px] bg-black border-b-0 border-[1px] border-white rounded-md flex flex-col font-source-sans">
            <div className="w-full h-full p-4 overflow-auto">
                {showTopics && <div className="flex items-center justify-center pl-1">
                    <img className="h-10 px-2 rounded-3xl" src={require("../../../images/raven-profile-pic.png")}/>
                    <div className="text-[#edf6fc] bg-blue-500 rounded-xl py-2">
                        <p className="pl-4">Hello! I'm Raven, Drew's AI assistant, please select a topic to ask me
                            questions about Drew:</p>
                    </div>
                </div>}
                {showTopics &&
                    <div className="flex flex-col items-end mt-4">
                    {topics.map((topic, index) => {
                        return (
                            <div key={index} className="flex my-2 hover:cursor-pointer text-[#edf6fc] bg-blue-500 rounded-xl" onClick={() => {
                                setShowTopics(false);
                                setDisableSendButton(false)
                                setSelectedTopic(topic)
                                switch (topic) {
                                    case "Resume & Exp. Questions":
                                        case "General Info":
                                        updateChat('bot', 'What would you like to ask?');
                                        break;
                                    case "Send me his resume":
                                        updateChat('bot', 'Please enter only your email and Ill send you his resume.');
                                        break;
                                    case "Send him a message":
                                        updateChat('bot', 'Enter your message and Ill forward it to him. Please include your contact so he can follow up.');
                                        break;
                                }
                            }}>
                                <div className="w-48 flex justify-center items-center">
                                    <p>{topic}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>}

                {!showTopics && <div>
                    <p className="text-[#edf6fc] hover:cursor-pointer" onClick={() => {
                        setShowTopics(true);
                        setDisableSendButton(true)
                        setChatMessages([]);
                    }}>Back</p>
                    <div
                        className="text-[#edf6fc]rounded-xl p-2">
                        <p className="text-[#edf6fc]">{selectedTopic}</p>
                        {chatMessages.map((message, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex my-4">
                                        {message.user === 'bot' && <img className="h-10 px-2 rounded-3xl" src={require("../../../images/raven-profile-pic.png")}/>}
                                        <div className="w-full flex">
                                            <div
                                                className={message.user === 'bot' ? "text-[#edf6fc] bg-blue-500 rounded-xl p-2" : "text-[#edf6fc] bg-green-500 rounded-xl p-2"}>
                                                <p>{message.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
            <div className="bg-gray-200 w-full h-20 py-2 pl-4 flex items-center justify-center">
                <input
                  type="textarea"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full h-10 p-2 rounded-md"
                />
                <div className={disableSendButton ? 'opacity-20 px-2' : 'hover:cursor-pointer px-2'} onClick={disableSendButton ? () => {return} : () => {
                    sendMessageToBot(userMessage);
                    setUserMessage("");
                }}>
                    <img className="w-8 h-6" src={require("../../../images/send-icon.png")} />
                </div>
            </div>
        </div>
    )
}

export default ChatBot;
