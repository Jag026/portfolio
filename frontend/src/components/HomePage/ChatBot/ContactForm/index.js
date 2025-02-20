import React, {useState} from 'react';
import {csrfFetch} from "../../../../store/csrf";
import {motion, AnimatePresence} from "framer-motion";


//bring in the current api call to the new form, need to pass in form type props
const ContactForm = ({ updateChat, formType }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [hideForm, setHideForm] = useState(false);
    const sendForm = async(e) => {
        e.preventDefault();
        switch(formType) {
            case 'Send me his resume':
                const response = await csrfFetch('/api/users/send-resume', {
                    method: 'POST',
                    body: JSON.stringify({
                        name, email
                    }),
                });
                const data = await response.json();
                if (data) {
                    setHideForm(true);
                    setTimeout(() => {
                        updateChat('bot', 'Sending resume....');
                    }, 300);
                    setTimeout(() => {
                        updateChat('bot', 'Resume sent successfully, please check your inbox.');
                    }, 2000);
                }
                return response;
                break;
            case 'Send him a message':
                const respons = await csrfFetch('/api/users/send-message', {
                    method: 'POST',
                    body: JSON.stringify({
                        name, email, message
                    }),
                });
                const dat = await respons.json();
                if (dat) {
                    setHideForm(true);
                    setTimeout(() => {
                        updateChat('bot', 'Sending message....');
                    }, 300);
                    setTimeout(() => {
                        updateChat('bot', 'Message sent successfully, Drew will follow up once he reviews your message.');
                    }, 2000);
                }
                return respons;
                break;
        }
    }
    return (
        <div className="w-full">
            <AnimatePresence>
                {!hideForm && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <form className="w-full rounded-xl h-auto bg-green-400 px-4 pt-4" onSubmit={sendForm}>
                            <input
                                className="h-10 w-full px-4 rounded-md mt-2"
                                placeholder="Your name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="h-10 w-full px-4 rounded-md my-4"
                                placeholder="Your email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {formType === 'Send him a message' && (
                                <textarea
                                    className="h-20 w-full px-4 rounded-md"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            )}
                            <div className="w-full flex justify-end mb-4 pb-4 pt-2">
                                <button className="bg-blue-500 w-24 h-10 rounded-md">Submit</button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ContactForm;
