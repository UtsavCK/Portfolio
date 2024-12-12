import React from "react";
import discord from "../assets/Images/discord.png";
import facebook from "../assets/Images/facebook.png";
import github from "../assets/Images/github.png";
import instagram from "../assets/Images/instagram.png";
import linkedin from "../assets/Images/linkedin.png";
import whatsapp from "../assets/Images/whatsapp.png";
import telegram from "../assets/Images/telegram.png";
import { useState } from "react";
import tick from "../assets/Images/tick.svg";
import copy from "../assets/Images/copy.svg";

const Footer = () => {
  const [hasCopied, setHasCopied] = React.useState(false);
  function handleCopy() {
    navigator.clipboard.writeText("utsavkayastha.000@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }
  return (
    <>
      <hr />
      <footer>
        <div className="foot_container">
          <div className="foot_col">
            <h2>Phone</h2>
            <p>+977 986 956 2922</p>
          </div>
          <div className="foot_col">
            <h2>Email</h2>
            <div className="email_flex">
              <p>utsavkayastha.000@gmail.com</p>
              <img
                src={hasCopied ? tick : copy}
                style={{ marginLeft: 10, cursor: "pointer" }}
                alt="copy"
                onClick={handleCopy}
              />
            </div>
          </div>
          <div className="foot_col">
            <h2>Socials</h2>
            <a target="__blank" href="https://www.facebook.com/utsav.kayastha">
              <img src={facebook} alt="fb_logo" className="social_logos" />
            </a>
            <a target="__blank" href="https://www.instagram.com/utsav.kayastha">
              <img src={instagram} alt="insta_logo" className="social_logos" />
            </a>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/utsav-kayastha-05b69125a/"
            >
              <img
                src={linkedin}
                alt="linkedin_logo"
                className="social_logos"
              />
            </a>
            <a target="__blank" href="https://wa.me/+9779869562922">
              <img
                src={whatsapp}
                alt="whatsapp_logo"
                className="social_logos"
              />
            </a>
            <a target="__blank" href="https://t.me/utsavck">
              <img
                src={telegram}
                alt="telegram_logo"
                className="social_logos"
              />
            </a>
          </div>
        </div>
        <hr />
        <br />
        <section style={{ marginBottom: 10 }}>
          &copy;2024 A simple website by Utsav Kayastha.
          <br />
          {/* Icons from <a href="https://icons8.com" target="_blank"><i>icons8</i></a> */}
        </section>
      </footer>
    </>
  );
};

export default Footer;
