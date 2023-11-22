import React from "react";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>

      <form action="/register" method="POST" noValidate>
        <label>Username</label>
        <input type="text" id="username" name="username" required />

        <label>Email</label>
        <input type="email" id="email" name="email" required />

        <label>Password</label>
        <input type="password" id="password" name="password" required />

        <button>Send</button>
      </form>
    </div>
  );
}
