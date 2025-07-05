import '../../App.css';
import { useState } from "react";
import { fetchData } from '../../main';



function Register(){

 const [user, setUser] = useState({
        username: '',
        password: ''
    })

const { username, password} = user;


const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });


const onSubmit = (e) => {
        e.preventDefault();
        console.log("Registering user:", user);
        
        fetchData('/user/register',{username, password}, 'POST')
            .then((data) => {
                console.log("Registration successful:", data);
                window.location.href = '/profile';
            })
            .catch((error) => {
                console.error("Registration failed:", error);
            });


}

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4 shadow">
                            <h2 className="text-center mb-4">Register</h2>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="username" 
                                        name="username" 
                                        required 
                                        onChange={onChange}
                                        value={username}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        name="password" 
                                        required 
                                        onChange={onChange}
                                        value={password}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Register;