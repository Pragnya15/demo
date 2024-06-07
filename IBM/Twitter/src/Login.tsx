import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data:any) => console.log(data);
  const handleError = (errors:any) => {};
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
  
  const registerOptions = {
    username: { required: "Name is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 4,
        message: "Password must have at least 4 characters"
      }
    }
  };

  return (
    <form onSubmit={loginUser} style={{ maxWidth: '300px', margin: '0 auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username">Name</label>
        <input
          name="username"
          type="text"
          {...register('username', registerOptions.username)}
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        <small style={{ color: 'red' }}>
          {errors?.username && errors.username.message}
        </small>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)}
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        <small style={{ color: 'red' }}>
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
    </form>
  );
}

export default Login;
