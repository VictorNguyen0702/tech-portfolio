import {Button} from "@/components/ui/button";


const Hero = () => {
    return (
        <div className="flex flex-col items-left justify-left bg-[var(--hero-color)] p-20 gap-5">
            <div className="text-3xl font-bold">Computer Science Student and Aspiring <br/> Backend Developer</div>
            <div className="text-md ">Tech enthusiast and software developer who loves turning <br/> ideas into functional applications</div>
            <Button asChild className="bg-[var(--dark-color)] text-white max-w-[150px] rounded-full px-4 py-2 transition hover:brightness-75">
                <a href="#projects" rel="noopener noreferrer">View Projects</a>
            </Button>
        </div>
    )
}

export default Hero