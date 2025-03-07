import {Button} from "@/components/ui/button";


const Hero = () => {
    return (
      <div className="flex flex-col items-left justify-left bg-[var(--hero-color)] px-10 py-20 lg:p-20 gap-5">
        <div className="text-3xl font-bold sm:w-full lg:w-[30%]">Computer Science Student and Aspiring Backend Developer</div>
        <div className="text-md sm:w-full lg:w-[30%]">Tech enthusiast and software developer who loves turning ideas into functional applications</div>
        <Button asChild className="bg-[var(--dark-color)] text-white max-w-[150px] rounded-full px-4 py-2 transition hover:brightness-75">
          <a href="#projects" rel="noopener noreferrer">View Projects</a>
        </Button>
      </div>
    )
}

export default Hero