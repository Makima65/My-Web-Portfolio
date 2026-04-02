"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { X } from "lucide-react";

export function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Stop background scrolling when the modal is open
  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isContactOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-3xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="font-bold tracking-tight text-lg">
            My Portfolio
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Experience
            </Link>
            
            <ModeToggle />
            
            {/* Animated Contact Button */}
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group relative hidden sm:flex h-9 items-center overflow-hidden rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow transition-all duration-200 hover:bg-primary/90 active:scale-95"
            >
              <div className="flex items-center justify-center transition-all duration-300 group-hover:translate-x-[1.9rem] group-hover:rotate-45 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className="fill-current">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                </svg>
              </div>
              <span className="ml-2 block transition-all duration-300 group-hover:translate-x-[5rem] group-hover:opacity-0">
                Contact
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* --- OPTIMIZED CONTACT FORM MODAL --- */}
      {/* Container stays in DOM, toggled via CSS visibility for instant response */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
          isContactOpen 
            ? "visible opacity-100 pointer-events-auto" 
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Overlay with GPU Acceleration */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm transform-gpu"
          onClick={() => setIsContactOpen(false)} // Clicking outside closes it
        ></div>
        
        {/* Animated Gradient Border Wrapper */}
        <div 
          className={`relative w-full max-w-[400px] p-[2px] rounded-2xl bg-gradient-to-br from-transparent via-primary/50 to-blue-500 shadow-2xl transition-all duration-300 transform-gpu ${
            isContactOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          {/* Inner Form Container */}
          <div className="relative w-full bg-card rounded-[14px] p-8 flex flex-col gap-6">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
              <p className="text-sm text-muted-foreground">Send me a message and I'll get back to you.</p>
            </div>

           <form 
              className="flex flex-col gap-5" 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                
                // 1. Add your Web3Forms Access Key here!
                formData.append("access_key", "b8036109-decf-444e-953d-847a00158726");

                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });
                  
                  const data = await response.json();
                  if (data.success) {
                    alert("Message sent successfully! I will get back to you soon.");
                    setIsContactOpen(false); // Close the modal on success
                  }
                } catch (error) {
                  console.error("Error submitting form", error);
                  alert("Something went wrong. Please try again.");
                }
              }}
            >
              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Company Email</label>
                <input 
                  required 
                  name="email" // Web3Forms uses the 'name' attribute to format your email
                  id="email" 
                  type="email" 
                  placeholder="hello@company.com"
                  className="w-full p-3 rounded-lg bg-transparent border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-muted-foreground">How Can I Help You?</label>
                <textarea 
                  required 
                  id="message" 
                  name="message" // Changed from 'textarea' to 'message' so it looks better in your inbox
                  placeholder="Tell me about your project..."
                  className="w-full h-24 p-3 rounded-lg bg-transparent border border-border text-foreground text-sm placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-2 w-[40%] py-2.5 px-4 rounded-md bg-muted/50 border border-border text-muted-foreground text-sm font-semibold hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 active:scale-95 self-start"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}