"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const handleAboutMe = () => {
    router.push("/About");
  };

  const handleProjects = () => {
    router.push("/Projects");
  };

  const handleContact = () => {
    router.push("/Contact");
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-500">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-black">
              Portfolio Website
            </span>
            <nav className="flex items-center space-x-4">
              <button
                onClick={handleHome}
                className="text-black-600 hover:bg-purple-100 mr-2"
              >
                Home
              </button>
              <button
                onClick={handleAboutMe}
                className="text-black-600 hover:bg-purple-100 mr-2"
              >
                About Me
              </button>
              <button
                onClick={handleProjects}
                className="text-black-600 hover:bg-purple-100 mr-2"
              >
                Projects
              </button>
              <button
                onClick={handleContact}
                className="text-black-600 hover:bg-purple-100 mr-2"
              >
                Contacts
              </button>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Contact;
