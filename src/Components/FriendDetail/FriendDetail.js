import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, []);

    const {name, phone, email} = friend;
    return (
        <div>
            <h3>This is a friend detail {friendId}</h3>
            <h1>Name : {name}</h1>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default FriendDetail;