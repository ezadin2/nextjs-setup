import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios.put(
        'https://api.chatengine.io/users/',
        { username, secret },
        { headers: { "Private-key": '6f8fa657-cbb2-4fe0-89e6-e8906bacb38b' } } // Replace 'YOUR_PROJECT_ID' with your actual project ID
      )
      .then((r) => router.push("/chats"));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJs Chat</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login/Signup
          </button>
        </form>
      </div>
    </div>
  );
}
