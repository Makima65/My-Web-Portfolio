"use client";

import { useState } from "react";
import Image from "next/image";
import { SiPhp, SiMysql, SiGithub, SiReact, SiNextdotjs, SiTypescript, SiSupabase, SiVercel, SiPython, SiFastapi } from "react-icons/si";
import { X, ExternalLink, ArrowRightLeft, Bot, TrendingUp, Sparkles, Search, Code, ChevronLeft, ChevronRight, ArrowRight, Database } from "lucide-react";
export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal States
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false); // Freshflow
  const [isTaskflowModalOpen, setIsTaskflowModalOpen] = useState(false); // Taskflow
  const [isOtakuRecsModalOpen, setIsOtakuRecsModalOpen] = useState(false); // OtakuRecs

  return (
    <>
      <section className="space-y-8" id="projects">
        
        {/* Header & Search */}
        <div className="space-y-5">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-serif font-bold tracking-widest uppercase">
              Projects
            </h2>
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects by name or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border/50 rounded-md py-3.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-sm"
            />
          </div>
        </div>
        
        {/* 2-Column Grid Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Freshflow */}
          <div 
            onClick={() => setIsProjectModalOpen(true)}
            className="group cursor-pointer rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            {/* Image & Overlay Area */}
            <div className="w-full aspect-[16/10] bg-muted relative overflow-hidden border-b border-border/50 shrink-0">
              <Image 
                src="/ADmin Login Screenshot.png" 
                alt="Freshflow Preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              {/* Title & Icon Overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
                <div className="bg-background/90 backdrop-blur-sm p-2 rounded-md shadow-sm text-foreground">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                  Freshflow
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase mb-5">
                PHP • MYSQL • AJAX • MACHINE LEARNING
              </p>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Secure full-stack platform with OWASP defenses
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  ML forecasting engine applying Linear Regression
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  AI data assistant using Llama 3 LLM
                </li>
              </ul>
              
              <div className="mt-auto pt-2">
                <span className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Taskflow AI */}
          <div 
            onClick={() => setIsTaskflowModalOpen(true)} 
            className="group cursor-pointer rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            {/* Image & Overlay Area */}
            <div className="w-full aspect-[16/10] bg-muted relative overflow-hidden border-b border-border/50 shrink-0">
              <Image 
                src="/logintask.png" 
                alt="Taskflow AI Preview" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              {/* Title & Icon Overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
                <div className="bg-background/90 backdrop-blur-sm p-2 rounded-md shadow-sm text-foreground">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                  Taskflow AI
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase mb-5">
                NEXT.JS • REACT • TYPESCRIPT • SUPABASE
              </p>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Intelligent task management application
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Built-in productivity engine via Gemini API
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Real-time collaboration workspace sharing
                </li>
              </ul>
              
              <div className="mt-auto pt-2">
                <span className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: OtakuRecs */}
          <div 
            onClick={() => setIsOtakuRecsModalOpen(true)} 
            className="group cursor-pointer rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            {/* Image & Overlay Area */}
            <div className="w-full aspect-[16/10] bg-muted relative overflow-hidden border-b border-border/50 shrink-0">
              <Image 
                src="/otakurecs_main.png" // UPDATE THIS PATH
                alt="OtakuRecs Preview" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              {/* Title & Icon Overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
                <div className="bg-background/90 backdrop-blur-sm p-2 rounded-md shadow-sm text-foreground">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                  OtakuRecs
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
<p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase mb-5">
  NEXT.JS • REACT • SUPABASE • AI • TYPESCRIPT
</p>
              
<ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Semantic "Vibe Search" powered by AI
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Real-time community stats & social profiles
                </li>
                <li className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                  Extensive database via Jikan (MyAnimeList) API
                </li>
              </ul>              
              <div className="mt-auto pt-2">
                <span className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-10 pt-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-border/50 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <span className="text-sm font-medium text-muted-foreground">
            Page 1 of 2
          </span>
          <button className="flex items-center gap-2 px-4 py-2 border border-border/50 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* --- MODALS (Made Mobile-Friendly with full-height on phones) --- */}

      {/* Freshflow Modal */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full h-[100dvh] sm:h-auto max-w-5xl sm:max-h-[90vh] overflow-y-auto bg-card sm:border border-border/50 sm:rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 sm:p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Freshflow Deep Dive</h2>
              <button 
                onClick={() => setIsProjectModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-8 space-y-8 sm:space-y-10">
              <div className="w-full max-w-3xl mx-auto aspect-video bg-black rounded-xl border border-border/50 overflow-hidden relative shadow-lg">
                <video 
                  src="/freshflowad4.mp4" 
                  poster="/ADmin Login Screenshot.png"
                  controls 
                  autoPlay 
                  muted 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">About The Project</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Engineered a secure full-stack platform utilizing PHP, MySQL, and AJAX with OWASP-standard defenses.</li>
                    <li>Developed an ML forecasting engine applying Linear Regression to analyze 30-day historical data.</li>
                    <li>Implemented a Smart Pricing algorithm that dynamically calculates expiration dates.</li>
                    <li>Integrated an AI-powered data assistant utilizing the Groq API and Llama 3 LLM with RAG.</li>
                  </ul>
                </div>

                <div className="lg:w-1/3 space-y-6 bg-muted/30 p-5 sm:p-6 rounded-xl border border-border/30">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Links</h4>
                    <div className="space-y-3">
                      <a href="https://github.com/Makima65/Freshflow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <SiGithub className="w-4 h-4 shrink-0" /> <span className="break-all">View Source Code</span>
                      </a>
                      <a href="https://freshflow.site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <ExternalLink className="w-4 h-4 shrink-0" /> <span className="break-all">Live Demo URL</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
                        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
                        { name: "AJAX", icon: ArrowRightLeft, color: "text-orange-500" },
                        { name: "Llama 3 LLM", icon: Bot, color: "text-emerald-500" },
                        { name: "Linear Regression", icon: TrendingUp, color: "text-blue-400" },
                      ].map((tech) => (
                        <span key={tech.name} className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all hover:border-primary/50">
                          <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/Dashboard 120.png")}>
                    <Image src="/Dashboard 120.png" alt="Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/forecast 120.png")}>
                    <Image src="/forecast 120.png" alt="Inventory view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/ADmin Login Screenshot.png")}>
                    <Image src="/ADmin Login Screenshot.png" alt="Login Page" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskflow AI Modal */}
      {isTaskflowModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full h-[100dvh] sm:h-auto max-w-5xl sm:max-h-[90vh] overflow-y-auto bg-card sm:border border-border/50 sm:rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 sm:p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Taskflow AI Deep Dive</h2>
              <button 
                onClick={() => setIsTaskflowModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-8 space-y-8 sm:space-y-10">
              <div className="w-full max-w-3xl mx-auto aspect-video bg-muted rounded-xl border border-border/50 overflow-hidden relative shadow-lg">
                <video 
                  src="/taskflowvid.mp4" 
                  poster="/logintask.png"
                  controls 
                  autoPlay 
                  muted 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-cover" 
                />
              </div>
        
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">About The Project</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                    <li><strong>Core Development:</strong> Engineered a full-stack, AI-powered task management platform using Next.js, React, and TypeScript.</li>
                    <li><strong>Smart AI Assistant:</strong> Leveraged the Gemini API to act as a built-in productivity engine.</li>
                    <li><strong>Real-Time Collaboration:</strong> Built a robust workspace sharing system powered by Supabase.</li>
                    <li><strong>Modern UI/UX:</strong> Designed a highly responsive, intuitive user interface equipped with seamless Light/Dark mode transitions.</li>
                  </ul>
                </div>

                <div className="lg:w-1/3 space-y-6 bg-muted/30 p-5 sm:p-6 rounded-xl border border-border/30">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Links</h4>
                    <div className="space-y-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <SiGithub className="w-4 h-4 shrink-0" /> <span className="break-all">View Source Code</span>
                      </a>
                      <a href="https://taskflow-ai-cyan.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <ExternalLink className="w-4 h-4 shrink-0" /> <span className="break-all">Live Demo URL</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
{[
                        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground dark:text-white" },
                        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
                        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
                        { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
                        { name: "Gemini API", icon: Sparkles, color: "text-[#8E75B2]" },
                      ].map((tech) => (
                        <span key={tech.name} className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all hover:border-primary/50">
                          <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/kanban.png")}>
                    <Image src="/kanban.png" alt="Taskflow UI 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/workplaceSS.png")}>
                    <Image src="/workplaceSS.png" alt="Taskflow UI 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/logintask.png")}>
                    <Image src="/logintask.png" alt="Taskflow UI 3" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OtakuRecs Modal */}
      {isOtakuRecsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full h-[100dvh] sm:h-auto max-w-5xl sm:max-h-[90vh] overflow-y-auto bg-card sm:border border-border/50 sm:rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 sm:p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">OtakuRecs Deep Dive</h2>
              <button 
                onClick={() => setIsOtakuRecsModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-8 space-y-8 sm:space-y-10">
              <div className="w-full max-w-3xl mx-auto aspect-video bg-muted rounded-xl border border-border/50 overflow-hidden relative shadow-lg">
                <video 
                  src="/otakuvid.mp4" // UPDATE THIS
                  poster="/otakurecs_main.png" // UPDATE THIS
                  controls 
                  autoPlay 
                  muted 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-cover" 
                />
              </div>
        
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">About The Project</h3>
<ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                    <li><strong>AI Vibe Search:</strong> Engineered a semantic search engine using a custom Python/Hugging Face API and Pinecone vector database to recommend anime based on mood and descriptions.</li>
                    <li><strong>API Integration:</strong> Seamlessly integrated the Jikan API to fetch and display extensive, up-to-date MyAnimeList data, including trailers, characters, and relations.</li>
                    <li><strong>Social & Tracking:</strong> Built a personalized tracking system with Supabase for users to save anime, favorite characters, and leave comments.</li>
                    <li><strong>Community Features:</strong> Designed a dynamic routing system for public/private user profiles and real-time community watch statistics.</li>
                  </ul>
                </div>

                <div className="lg:w-1/3 space-y-6 bg-muted/30 p-5 sm:p-6 rounded-xl border border-border/30">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Links</h4>
<div className="space-y-3">
                      <a href="https://github.com/Makima65/otakurecs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <SiGithub className="w-4 h-4 shrink-0" /> <span className="break-all">View Source Code</span>
                      </a>
                      <a href="https://otaku-recs.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <ExternalLink className="w-4 h-4 shrink-0" /> <span className="break-all">Live Demo URL</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
{[
                        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground dark:text-white" },
                        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
                        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
                        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
                        { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
                        { name: "Pinecone", icon: Database, color: "text-foreground dark:text-white" },
                        { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
                        { name: "Vercel", icon: SiVercel, color: "text-foreground dark:text-white" },
                        { name: "AI Vibe Search", icon: Sparkles, color: "text-[#8E75B2]" },
                      ].map((tech) => (
                        <span key={tech.name} className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all hover:border-primary/50">
                          <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                          {tech.name}
                        </span>
                      ))}
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/otaku1.png")}>
                    <Image src="/otaku1.png" alt="OtakuRecs UI 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/otaku2.png")}>
                    <Image src="/otaku2.png" alt="OtakuRecs UI 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200 cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors z-[201]" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <Image 
              src={selectedImage} 
              alt="Fullscreen view" 
              fill
              sizes="100vw"
              className="object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto" 
            />
          </div>
        </div>
      )}
    </>
  );
}