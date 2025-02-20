import React from 'react';
import Turnstile, { useTurnstile } from "react-turnstile";
import {csrfFetch} from "../../../store/csrf";

function TurnstileWidget({ setIsValidated }) {
    const turnstile = useTurnstile();
    return (
        <Turnstile
            className="w-32"
            sitekey="0x4AAAAAAA9piluXFQEJRx0U"
            onVerify={(token) => {
                csrfFetch('/api/session/verify-turnstile', {
                    method: 'POST',
                    body: JSON.stringify({
                        token
                    }),
                }).then((response) => {
                    if (response.ok) {
                        console.log(response)
                        setIsValidated(true)
                    } else {
                        turnstile.reset()
                    };
                });
            }}
        />
    );
}

export default TurnstileWidget;
