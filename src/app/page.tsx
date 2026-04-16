"use client";           

import Tooltip from "@/components/Tooltip";
import ProjectsSection from "@/app/Project/ProjectsSection";
import Link from "next/link";
import { useState } from "react"; 
import { SiPhp, SiMysql, SiReact, SiNextdotjs, SiJavascript, SiTailwindcss } from "react-icons/si";
import { BrainCircuit, MapPin, Mail, Phone, RefreshCw } from "lucide-react"; 

export default function Home() {

  const albumImages = [
    "/codepic.jpg",  
    "/laptopfix.jpg",  
    "/lobby.jpg",  
    "/selfie.jpg",  
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (isAnimating) return; 
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % albumImages.length);
      setIsAnimating(false);
    }, 500); 
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-24">
      
      {/* 1. Hero Header Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row items-center gap-5 sm:gap-8">
          <div className="shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-border/50 shadow-md">
              <img src="/prof.jpg" alt="Ralph Chrysler Silva" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
              Ralph Chrysler Silva
              <span className="animate-pulse text-primary">_</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-lg">
              Full Stack Developer | <span className="text-emerald-500/90 font-medium">Open for work</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground font-medium pt-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Quezon City, Philippines</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>ralphchryslersilva65@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>09218648143</span>
          </div>
        </div>

        <div className="pt-2 pb-4">
          <Tooltip />
        </div>
      </section>

      <hr className="border-t border-border/50" />

      {/* 1.5 About Me Section */}
      <section className="space-y-8 py-4" id="about">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">About Me</h2>
            <p className="text-md text-foreground/90 leading-relaxed">
              I'm a passionate full-stack developer with a unique background that bridges hands-on IT infrastructure and modern software engineering. My journey began with a curiosity about how hardware and networks operate, which quickly evolved into a deep passion for the web and building intelligent, user-centered applications. Today, I specialize in writing clean, secure code using React, Next.js, and PHP, while actively exploring Machine Learning and AI integrations to solve real-world problems. I believe in following best practices, continuously learning, and pushing the boundaries of what I can build.
            </p>
          </div>

          <div className="flex-1 relative w-full aspect-[4/3] max-w-sm mx-auto mt-8 md:mt-0 group cursor-pointer perspective-1000" onClick={nextImage}>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-40 whitespace-nowrap">
              Shuffle photos
              <RefreshCw className="w-3.5 h-3.5" />
            </div>
            {albumImages.map((src, index) => {
              const relativeIndex = (index - activeIndex + albumImages.length) % albumImages.length;
              let zIndex = "z-0";
              let transformClasses = "";

              if (relativeIndex === 0) {
                zIndex = "z-30";
                transformClasses = isAnimating ? "translate-x-[120%] rotate-12 opacity-0" : "translate-x-0 rotate-0 opacity-100 hover:-translate-y-2 hover:rotate-1 shadow-2xl";
              } else if (relativeIndex === 1) {
                zIndex = "z-20";
                transformClasses = isAnimating ? "translate-x-0 rotate-0 opacity-100 shadow-2xl" : "translate-x-[15px] rotate-3 opacity-90 shadow-xl";
              } else {
                zIndex = "z-10";
                transformClasses = isAnimating ? "translate-x-[15px] rotate-3 opacity-90 shadow-xl" : "translate-x-[30px] rotate-6 opacity-70 shadow-lg";
              }

              return (
                <div key={index} className={`absolute inset-0 rounded-2xl overflow-hidden border border-border/30 bg-card transition-all duration-500 ease-in-out origin-bottom-right ${zIndex} ${transformClasses}`}>
                  <img src={src} alt={`About me ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Preview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
            { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
            { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-foreground dark:text-white" },
            { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
            { name: "Machine Learning", icon: BrainCircuit, color: "text-emerald-500" },
          ].map((tech) => (
            <span key={tech.name} className="inline-flex items-center gap-2 rounded-md border border-border/50 bg-card/30 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-card hover:border-primary/50">
              <tech.icon className={`text-lg ${tech.color}`} />
              {tech.name}
            </span>
          ))}
        </div>
        <Link href="/skills" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium shadow-sm transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group">
          View More
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </section>

      {/* 3. Projects Component */}
      <ProjectsSection />

      {/* 4. Work Experience */}
      <section className="space-y-8" id="experience">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        
        <div className="space-y-10 border-l-2 border-muted pl-6 ml-3">
          
          <div className="relative group cursor-default">
            <span className="absolute -left-[35px] top-1 flex h-5 w-5 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300 items-center justify-center z-10"></span>
            
            <div className="p-5 -mt-5 -ml-2 rounded-xl border border-transparent group-hover:border-border/50 group-hover:bg-card/40 group-hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-bold leading-none group-hover:text-primary transition-colors duration-300">Freelance Software Developer</h3>
                <p className="text-sm font-medium text-muted-foreground">Self-Employed • 2026 - Present</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Partnering with clients to design and develop scalable, responsive web applications from scratch.</li>
                <li>Continuously exploring and integrating emerging technologies to engineer practical solutions for complex, real-world challenges.</li>
              </ul>
            </div>
          </div>

          <div className="relative group cursor-default">
            <span className="absolute -left-[35px] top-1 flex h-5 w-5 rounded-full bg-background border-2 border-muted-foreground group-hover:border-primary/70 group-hover:scale-125 transition-all duration-300 items-center justify-center z-10"></span>
            
            <div className="p-5 -mt-5 -ml-2 rounded-xl border border-transparent group-hover:border-border/50 group-hover:bg-card/40 group-hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-none group-hover:text-foreground transition-colors duration-300">IT OSS Intern</h3>
                <p className="text-sm text-muted-foreground">KMC Solutions (SM North Edsa Tower) • Oct 2025 - Feb 2026</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Maintained enterprise network infrastructure, hardware patching, and cable management to ensure optimal uptime.</li>
                <li>Executed daily IT Operations Support Services (OSS) tasks and routine diagnostics.</li>
                <li>Authored detailed technical documentation for IT incidents and standard operating procedures.</li>
              </ul>
            </div>
          </div>

          <div className="relative group cursor-default">
            <span className="absolute -left-[35px] top-1 flex h-5 w-5 rounded-full bg-background border-2 border-muted-foreground group-hover:border-primary/70 group-hover:scale-125 transition-all duration-300 items-center justify-center z-10"></span>
            
            <div className="p-5 -mt-5 -ml-2 rounded-xl border border-transparent group-hover:border-border/50 group-hover:bg-card/40 group-hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-none group-hover:text-foreground transition-colors duration-300">Assistant Technician</h3>
                <p className="text-sm text-muted-foreground">Nald Phone Center (Quezon City) • Feb 2023 - Jul 2023</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Diagnosed and repaired hardware/software issues on smartphones and tablets.</li>
                <li>Managed device intake and workbench organization, reducing repair turnaround time.</li>
                <li>Communicated complex technical issues clearly to non-technical clients.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        
        <div className="space-y-4">
          <div className="group relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-bold text-foreground">
                Bachelor of Science in Information Technology
              </h3>
              <span className="inline-flex shrink-0 items-center rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-secondary-foreground whitespace-nowrap">
                2023 - Present
              </span>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              PHINMA-Saint Jude College (Manila)
            </div>
          </div>

          <div className="group relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-bold text-foreground">
                Science, Technology, Engineering, and Mathematics (STEM)
              </h3>
              <span className="inline-flex shrink-0 items-center rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-secondary-foreground whitespace-nowrap">
                2021 - 2023
              </span>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Technological Institute of the Philippines (QC)
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}