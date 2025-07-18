import { useState } from "react";
import React from 'react'

const TweetForm = ({ onAddTweet }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;
        onAddTweet(text);
        setText("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="¿Qué estas pensando?"
                />
            <button type="submit"> Tweet </button>

            </form>
        </div>
    );
};

export default TweetForm