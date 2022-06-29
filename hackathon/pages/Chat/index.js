import React, {useContext} from "react";
import { Context } from "../../context";
import {useRouter} from "next/router";
import axios from "axios";


export default function Auth() {
    const {username, setUsername, sercret, setSecret} = useContext(Context);


  return <div className="background">
    <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-title">NextJS Chat</div>

            <div className="input-container">
                <input 
                placeholder="Email" 
                className="text-input" 
                onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="input-container">
                <input 
                placeholder="password" 
                className="text-input" 
                onChange={e => setSecret(e.target.value)}
                />
            </div>

            <button
            type="submit"
            className="submit">
                Login / Sign Up
            </button>

        </form>
    </div>

  </div>;
}
