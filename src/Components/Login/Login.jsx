import React, { useState, useEffect, useRef } from "react";

import "./Login";

const Login = () => {
  const focusRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={focusRef}
          autoComplete="off"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account? <br />
        <span>
          <a href="#">Sign up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
