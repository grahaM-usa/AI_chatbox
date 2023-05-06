// Importing useState and useEffect hooks from React library
import { useState, useEffect } from "react";

// Login function which handles the form submission
function Login() {
  // Setting up username and password states using useState hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Setting up error states for username and password using useState hook
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

   // UseEffect to check if username is empty and update the usernameError state accordingly
   useEffect(() => {
    if (username.trim() === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
  }, [username]);

    // UseEffect to check if password is empty and update the passwordError state accordingly
    useEffect(() => {
        if (password.trim() === "") {
          setPasswordError("Password is required");
        } else {
          setPasswordError("");
        }
      }, [password]);