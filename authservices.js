import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role); // Store role
      return response.data.user.role;
    }
  } catch (error) {
    console.error("Login failed", error);
    return null;
  }
};
