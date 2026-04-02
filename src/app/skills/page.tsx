import Link from "next/link";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiPhp, SiNodedotjs, SiPython, 
  SiMysql, SiPostgresql, SiSqlite,
  SiGit, SiGithub, SiVercel, SiHostinger,
  SiFigma, SiCanva, SiGooglesheets 
} from "react-icons/si"; // Goodbye, Simple Icons VS Code!
import { FaJava, FaFileExcel, FaFileWord, FaFilePowerpoint } from "react-icons/fa"; 
import { TbBrandCSharp, TbBrandCpp, TbBrandVisualStudio, TbBrandVscode } from "react-icons/tb"; // <-- NEW: Added TbBrandVscode
import { 
  BrainCircuit, Network, ShieldAlert, KeyRound, Lock, BookOpen, Braces, Code, Video, Terminal
} from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground dark:text-white" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
        { name: "AJAX & DOM", icon: Braces, color: "text-emerald-500" }
      ]
    },
    {
      title: "Backend & Core",
      skills: [
        { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
        { name: "C#", icon: TbBrandCSharp, color: "text-[#512BD4]" },
        { name: "C++", icon: TbBrandCpp, color: "text-[#00599C]" },
        { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "Machine Learning", icon: BrainCircuit, color: "text-emerald-500" }
      ]
    },
    {
      title: "Databases & Security",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "SQLite", icon: SiSqlite, color: "text-[#003B57] dark:text-[#0075B3]" },
        { name: "OWASP Standards", icon: ShieldAlert, color: "text-red-500" },
        { name: "2FA Integration", icon: KeyRound, color: "text-amber-500" },
        { name: "Session Protection", icon: Lock, color: "text-slate-400" }
      ]
    },
    {
      title: "Dev Environments",
      skills: [
        { name: "VS Code", icon: TbBrandVscode, color: "text-[#007ACC]" }, // Swapped to Tabler!
        { name: "Visual Studio 2022", icon: TbBrandVisualStudio, color: "text-[#5C2D91] dark:text-[#C586C0]" }, 
        { name: "NetBeans", icon: Code, color: "text-[#1B6AC6]" },
        { name: "Linux CLI", icon: Terminal, color: "text-[#4EAA25]" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-foreground dark:text-white" },
        { name: "Hostinger", icon: SiHostinger, color: "text-[#673DE6]" },
        { name: "Vercel", icon: SiVercel, color: "text-foreground dark:text-white" },
        { name: "RESTful APIs", icon: Network, color: "text-blue-400" }
      ]
    },
    {
      title: "Productivity & Media",
      skills: [
        { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
        { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
        { name: "CapCut", icon: Video, color: "text-foreground dark:text-white" },
        { name: "Excel", icon: FaFileExcel, color: "text-[#217346]" }, 
        { name: "Google Sheets", icon: SiGooglesheets, color: "text-[#34A853]" },
        { name: "Word", icon: FaFileWord, color: "text-[#2B579A]" },   
        { name: "PowerPoint", icon: FaFilePowerpoint, color: "text-[#B7472A]" }, 
        { name: "Tech Docs", icon: BookOpen, color: "text-primary" }
      ]
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      
      {/* Header Section */}
      <div className="space-y-4">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4 group">
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Portfolio
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">Tech Stack</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          These are the technologies and tools I rely on to build scalable, high-performance web applications and secure enterprise systems.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-sm hover:border-primary/50 transition-colors duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h2 className="text-xl font-semibold mb-5 text-foreground">{category.title}</h2>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name} 
                  className="inline-flex items-center gap-2 rounded-md border border-border/50 bg-background/50 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-card hover:border-primary/50"
                >
                  <skill.icon className={`text-lg ${skill.color}`} />
                  {skill.name}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
      
    </main>
  );
}