"use client"
import "@/styles/Register.scss"
import { FcGoogle } from "react-icons/fc";
import { addUser } from "@/lib/action";
import { useState } from "react";


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    profileImage: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  return (
    <div className="register">
    <div className="register_content">
      <form className="register_content_form" action={addUser}  >
        <input
          placeholder="Username"
          name="username"
          
          required
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          
          required
        />
        
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile"
              style={{ maxWidth: "80px", maxHeight: "100px" }}
            />
          )}
          <input
            id="image"
            type="file"
            onChange={handleChange}
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
          />
           <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile" />
            <p>Upload Profile Photo</p>
          </label>
        <button type="submit">
          Register
        </button>
      </form>
      <button
        type="button"
        
        className="google"
      >
        <p>Log In with Google</p>
        <FcGoogle />
      </button>
      <a href="/login">Already have an account? Log In Here</a>
    </div>
  </div>
);
  
}

export default RegisterPage