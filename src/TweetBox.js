import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Admin',
            username: 'admin',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Favatar-367-456319.png&f=1&nofb=1", 
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Favatar-367-456319.png&f=1&nofb=1" alt="" />
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"></input>
                </div>
                <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
