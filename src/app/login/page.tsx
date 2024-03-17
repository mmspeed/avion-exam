"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/");
    confirm("Registered successfully !");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-4 px-20 py-12 rounded-xl border-blue-950">
        <h1 className="text-center mb-10 text-4xl">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <div>
              <input
                className="border-2 border-blue-950 p-3 mt-1 rounded-md"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username..."
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <div>
              <input
                className="border-2 border-blue-950 p-3 mt-1 rounded-md"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                required
              />
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="password">Password</label>
            <div>
              <input
                className="border-2 border-blue-950 p-3 mt-1 rounded-md"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password..."
                required
              />
            </div>
          </div>
          <button
            className="border-2 border-blue-950 font-semibold bg-blue-950 text-white w-[100%] py-3 rounded-lg
            hover:bg-white hover:text-blue-950 hover:border-blue-950 hover:border-2 duration-500"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
