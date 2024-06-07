import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginUser = (e:any) => {
        e.preventDefault();

        fetch('http://localhost:9000/twitter')
            .then(response =>response.json())
            .then(users => {
                const user = users.find(u => u.userName === username && u.password === password);
                if (!user) {
                    throw new Error('Invalid credentials');
                }
                localStorage.setItem('userid',user.id);
                setUsername('');
                setPassword('');
                window.location.href = '/post';
            })
            .catch(error => {
                setError('Login failed. Please check your credentials.');
            });
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={loginUser}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
         <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
            </form>
        </div>
    );
};

export default Demo;
