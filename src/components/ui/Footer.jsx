import {Github, Linkedin} from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-[var(--dark-color)] shadow-md p-4 flex justify-between items-center">
      <p className="text-bold text-[var(--light-color)] pl-10">Victor's Portfolio</p>
      <div className="flex flex-row justify-center pr-10 gap-5">
        <a href="https://github.com/VictorNguyen0702" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/victor-nguyen-43dwa/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer;