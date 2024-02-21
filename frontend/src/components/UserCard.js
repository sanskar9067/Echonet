import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';

export default function UserCard() {
    const [users, setUsers] = useState([]);
    const [auth] = useAuth();

    useEffect(() => {
        axios.get("http://localhost:3001/getuser")
            .then(response => setUsers(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = async (friendEmail) => {
        try {
            const userEmail = auth.user.email;
            const res = await axios.post("http://localhost:3001/api/v1/auth/addfriend", { userEmail, friendEmail });
            if (res.data.success) {
                alert("Friend Added");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {
                users.map(users => (
                    <div className="card my-4" style={{ width: '18rem' }} key={users.id}>
                        <div className="card-body">
                            <h5 className="card-title">{users.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{users.email}</h6>
                            <button type='button' onClick={() => handleSubmit(users.email)} className="btn btn-primary"><i class="fa-solid fa-user-plus"></i></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
