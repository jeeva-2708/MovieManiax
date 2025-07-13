import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-[#121418]  footer-center text-white p-14">
        <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col items-center font-inter  ">
          <div className="quickLinks flex gap-5 my-5 text-sm font-light">
            <span>Terms Of Use </span>
            <span>Privacy Policy</span>
            <span>About</span>
            <span> Blog</span>
            <span>FAQ</span>
          </div>
          <div className="socialMedia flex gap-5  my-5">
            <span className=" inline-block">
              <FaTwitter className="text-xl" />
            </span>
            <a href="https://github.com/jeeva-2708">
              <span className="inline-block">
                <FaGithub className="text-xl " />
              </span>
            </a>
          </div>
          <div className="copyrights text-base italic my-5 font-light">
            <p>© 2025 Movimaniax. All rights reserved. Developed by Jeeva.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
