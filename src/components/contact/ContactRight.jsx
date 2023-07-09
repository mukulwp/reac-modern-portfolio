import React, { useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isValideEmail from "../../utils/isEmailValidate";

const ContactRight = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { username, email, phone, subject, message } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      toast.error("Name is required!");
      nameRef.current.focus();
    } else if (email === "") {
      toast.error("Email is required!");
      emailRef.current.focus();
    } else if (!isValideEmail(email)) {
      toast.error("Please enter a valid email!");
      emailRef.current.focus();
    } else if (phone === "") {
      toast.error("Phone number is required!");
      phoneRef.current.focus();
    } else if (subject === "") {
      toast.error("Subject is required!");
      subjectRef.current.focus();
    } else if (message === "") {
      toast.error("Message is required!");
      messageRef.current.focus();
    } else {
      toast.success(`Thanks ${username} for messaging me!`);
      setUserData({
        username: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div className="w-full lgl:w-[60%] h-full flex flex-col gap-8 justify-between p-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100 dark:shadow-shadowTwo">
      <form className="w-full flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-3 w-full">
            <label className="labelStyle" htmlFor="name">
              Your Name
            </label>
            <input
              ref={nameRef}
              type="text"
              className="inputStyle"
              id="name"
              value={username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="labelStyle" htmlFor="email">
              Your Email
            </label>
            <input
              ref={emailRef}
              type="email"
              className="inputStyle"
              id="email"
              value={email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-3 w-full">
            <label className="labelStyle" htmlFor="phone">
              Your Phone Number
            </label>
            <input
              ref={phoneRef}
              type="tel"
              className="inputStyle"
              id="phone"
              value={phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="labelStyle" htmlFor="subject">
              Subject
            </label>
            <input
              ref={subjectRef}
              type="text"
              className="inputStyle"
              id="subject"
              value={subject}
              onChange={(e) =>
                setUserData({ ...userData, subject: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 w-full">
            <label className="labelStyle" htmlFor="message">
              Your Message
            </label>
            <textarea
              ref={messageRef}
              id="message"
              className="inputStyle h-40"
              value={message}
              onChange={(e) =>
                setUserData({ ...userData, message: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <div
          onClick={handleSubmit}
          className="flex gap-2 items-center justify-center bg-[#131518] rounded-lg cursor-pointer py-4 hover:border-[1px] hover:border-designColor duration-300 group dark:bg-designColor dark:text-gray-950"
        >
          <button className="text-base text-gray-400 tracking-wide uppercase group-hover:text-designColor duration-300 dark:text-gray-950 dark:group-hover:text-gray-800">
            send message
          </button>
          <span className="group-hover:text-designColor duration-300 dark:group-hover:text-gray-800">
            <AiOutlineSend />
          </span>
        </div>
      </form>
      <ToastContainer theme="dark" autoClose={4000} />
    </div>
  );
};

export default ContactRight;
