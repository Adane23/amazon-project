import React, { useState } from 'react'
import "../Css/Login.css";
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential)
                    navigate("/");
            })
            .catch((error) => alert(error.message));

    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if(userCredential)
                    navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png'
                />
            </Link>

            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type='submit'
                        onClick={signIn}
                        className='login_signInButton'>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Condtions of Use Sale. Plase see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
                </p>

                <button onClick={register} className='login_registerButton'>
                    Create your Ammazon Account 
                </button>
            </div>
        </div>
    )
}

export default Login;