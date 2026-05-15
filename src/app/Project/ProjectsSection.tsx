"use client";

import { useState } from "react";
import Image from "next/image";
import { SiPhp, SiMysql, SiGithub, SiReact, SiNextdotjs, SiTypescript, SiSupabase } from "react-icons/si";
import { X, ExternalLink, ArrowRight, ArrowRightLeft, Bot, TrendingUp, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Modal States
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false); // Freshflow
  const [isTaskflowModalOpen, setIsTaskflowModalOpen] = useState(false); // Taskflow
  const [isOtakuRecsModalOpen, setIsOtakuRecsModalOpen] = useState(false); // OtakuRecs

  return (
    <>
      <section className="space-y-6" id="projects">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <span className="text-sm font-medium text-muted-foreground">Page 1 of 1</span>
        </div>
        
        {/* Changed to lg:grid-cols-3 so all 3 fit nicely on large screens, or naturally wrap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Freshflow */}
          <div 
            onClick={() => setIsProjectModalOpen(true)}
            className="group cursor-pointer rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-full h-40 bg-muted relative overflow-hidden border-b border-border/50 shrink-0">
              <Image 
                src="/ADmin Login Screenshot.png" 
                alt="Freshflow Preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-background text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">Freshflow</h3>
                <p className="text-xs text-primary font-medium mt-1 line-clamp-1">ML Sales Forecasting & Inventory</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
                A secure full-stack platform utilizing PHP, MySQL, and an ML forecasting engine applying Linear Regression to analyze data.
              </p>
              <button className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-2 border-t border-border/30">
                View Full Project
              </button>
            </div>
          </div>

          {/* Card 2: Taskflow AI */}
          <div 
            onClick={() => setIsTaskflowModalOpen(true)} 
            className="group cursor-pointer rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-full h-40 bg-muted relative overflow-hidden border-b border-border/50 shrink-0">
              <Image 
                src="/logintask.png" 
                alt="Taskflow AI Preview" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-background text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">Taskflow AI</h3>
                <p className="text-xs text-primary font-medium mt-1 line-clamp-1">AI-Powered Task Management</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
                An intelligent task management application built with Next.js and Supabase, leveraging the Gemini API to streamline workflows.
              </p>
              <button className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-2 border-t border-border/30">
                View Full Project
              </button>
            </div>
          </div>

          {/* Card 3: OtakuRecs */}
          <div 
            onClick={() => setIsOtakuRecsModalOpen(true)} 
            className="group cursor-pointer rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-full h-40 bg-muted relative overflow-hidden border-b border-border/50 shrink-0">
              <Image 
                src="/otakurecs-preview.png" // UPDATE THIS PATH
                alt="OtakuRecs Preview" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-background text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">OtakuRecs</h3>
                <p className="text-xs text-primary font-medium mt-1 line-clamp-1">Anime Recommendation Platform</p> {/* UPDATE DESCRIPTION */}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
                A specialized platform for discovering and tracking anime, featuring personalized recommendations and intuitive UI. {/* UPDATE DESCRIPTION */}
              </p>
              <button className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-2 border-t border-border/30">
                View Full Project
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Freshflow Modal */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-foreground">Freshflow Deep Dive</h2>
              <button 
                onClick={() => setIsProjectModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              <div className="w-full max-w-3xl mx-auto aspect-[4/3] bg-black rounded-xl border border-border/50 overflow-hidden relative shadow-lg">
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

                <div className="lg:w-1/3 space-y-6 bg-muted/30 p-6 rounded-xl border border-border/30">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Links</h4>
                    <div className="space-y-3">
                      <a href="https://github.com/Makima65/Freshflow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <SiGithub className="w-4 h-4" /> View Source Code
                      </a>
                      <a href="https://freshflow.site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo URL
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
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/Dashboard 120.png")}>
                    <Image src="/Dashboard 120.png" alt="Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/forecast 120.png")}>
                    <Image src="/forecast 120.png" alt="Inventory view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/ADmin Login Screenshot.png")}>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-foreground">Taskflow AI Deep Dive</h2>
              <button 
                onClick={() => setIsTaskflowModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              <div className="w-full max-w-3xl mx-auto aspect-[4/3] bg-muted rounded-xl border border-border/50 overflow-hidden relative shadow-lg">
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

                <div className="lg:w-1/3 space-y-6 bg-muted/30 p-6 rounded-xl border border-border/30">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Links</h4>
                    <div className="space-y-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <SiGithub className="w-4 h-4" /> View Source Code
                      </a>
                      <a href="https://taskflow-ai-cyan.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo URL
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
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/kanban.png")}>
                    <Image src="/kanban.png" alt="Taskflow UI 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/workplaceSS.png")}>
                    <Image src="/workplaceSS.png" alt="Taskflow UI 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/logintask.png")}>
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
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-foreground">OtakuRecs Deep Dive</h2>
              <button 
                onClick={() => setIsOtakuRecsModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              {/* OtakuRecs Main Image/Video */}
              <div className="w-full max-w-3xl mx-auto aspect-[4/3] bg-muted rounded-xl border border-border/50 overflow-hidden relative shadow-lg">
                {/* Switch to Image or Video depending on what you have for OtakuRecs */}
                <video 
                  src="/otakuvid.mp4" // UPDATE THIS
                  poster="/otakurecs-preview.png" // UPDATE THIS
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
                    <li><strong>Feature 1:</strong> Update this text with a bullet point about what you built.</li>
                    <li><strong>Feature 2:</strong> Update this text with a bullet point about an API or tool you used.</li>
                    <li><strong>Feature 3:</strong> Update this text with details about the UI or backend.</li>
                    <li><strong>Feature 4:</strong> Highlight a specific problem you solved in this project.</li>
                  </ul>
                </div>

                <div className="lg:w-1/3 space-y-6 bg-muted/30 p-6 rounded-xl border border-border/30">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Links</h4>
                    <div className="space-y-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <SiGithub className="w-4 h-4" /> View Source Code
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo URL
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {/* UPDATE THESE TO MATCH OTAKURECS TECH STACK */}
                      {[
                        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground dark:text-white" },
                        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
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
                  {/* UPDATE THESE IMAGES */}
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/otaku1.png")}>
                    <Image src="/otaku1.png" alt="OtakuRecs UI 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-[1896/873] relative bg-muted rounded-lg border border-border/50 overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage("/otaku2.png")}>
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