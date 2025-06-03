"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setFormLoading(true);

    try {
      if(userName === ''){
        setError('Please kindly fill the username!');
        return;
      } else if(password === ''){
        setError('Please fill in your password!');
        return;
      }
      
      const success = "@Kenny2000$";
      if(password === success) {
        Swal.fire({title: 'Login successfully!', icon: 'success'});
        router.push('/home');
      } else {
        Swal.fire({title: 'Oops! something happened', icon: 'error',});
      }
    } catch (error) {
      setError("Failed to submit form");
    } finally { setFormLoading(false) }
  };

  return (
    <main className="w-full h-screen overflow-y-auto flex flex-col justify-between px-5 md:px-10 py-10 border border-blue-400">
      <section className="w-full max-w-[600px] mx-auto rounded shadow bg-white py-10">
        <div className="w-full flex justify-center items-center gap-4 mb-5">
          {/* <img src={image} alt="" className="text-black"  /> */}
          <h1 className="font-bold text-3xl">Client Login</h1>
        </div>
        {/* {error?} */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full max-w-[400px] mx-auto flex flex-col justify-start items-start gap-3 px-3">
            <div className="w-full">
              <label htmlFor="">Username: </label>
              <input 
                type="text"
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                className="setup-form-input p-2"
                required 
              />
            </div>

            <div className="w-full">
              <label htmlFor="">Password: </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="setup-form-input p-2"
                required 
              />
            </div>
            <button type="submit" className=" px-4 py-3 bg-slate-100 hover:bg-white rounded shadow-sm mt-5">
              { formLoading ? (<i>Loading ...</i>) : "Login"}
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}