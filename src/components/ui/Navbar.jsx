import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold"></div>

      {/* Desktop Navigation (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-6 gap-10 pr-40">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about-me" className="hover:text-blue-500">About Me</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
      </div>
      
      {/* Mobile Navigation - Sheet (Sidebar) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col space-y-4 mt-6">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
