import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";
import auth from '../../firebase.init';



const Home = () => {
const [user] = useAuthState(auth)
  const navigate = useNavigate()

  return (
    <>
      <PageTitle title="Home" />
      <div className="hero xl:py-32">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl text-primary lg:text-5xl lg:li font-bold lg:leading-snug">
              Welcome <span className="text-accent">{user?.displayName} </span>
              To Daily Task
            </h1>
            <p className="mb-5 text-accent">Hi, Its a Daily task Noted web site, Here you write your small task with date , after complete task delete your task. For Starting your task Click the <strong>Get Start</strong> button and login. </p>
            <button
              onClick={() => navigate("/tasks")}
              className="bg-primary border border-primary text-white text-sm py-2.5 px-6 rounded-md hover:border hover:border-primary hover:text-primary hover:bg-white transition-colors duration-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;