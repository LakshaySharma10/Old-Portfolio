import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data"; 
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in <span className="text-purple">collaborating </span> or have a project in mind?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect today to explore how we can collaborate on exciting projects together!
        </p>
        <a href="mailto:lakshay7004@gmail.com" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" aria-label={`Visit our ${info.title} profile`}
            >
              <img src={info.img} alt="Social Media Icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
      </div>

      
    </footer>
  );
};

export default Footer;

