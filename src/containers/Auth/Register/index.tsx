import { addUser } from "../../../api/user";
import { userData } from "../../../api/user/types";

export default function Register() {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent the default form behavior

    const formData = new FormData(event.target);
    const userData: userData = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (!userData.username || !userData.email || !userData.password) {
      console.error("Please fill in all the fields.");
      return;
    }

    try {
      await addUser(userData);
      // Handle success, maybe redirect to login page or show a success message
    } catch (error) {
      // Handle error, maybe show an error message
      console.error("Registration failed", error);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form action="/register" method="POST" onSubmit={handleSubmit} noValidate>
        <label>Username</label>
        <input type="text" id="username" name="username" required />

        <label>Email</label>
        <input type="email" id="email" name="email" required />

        <label>Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
