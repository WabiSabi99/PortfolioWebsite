import type React from "react"
// Import icons from react-icons
import { SiJavascript, SiTypescript, SiPhp, SiPython, SiC, SiCplusplus, SiReact, SiPostgresql , SiNextdotjs, SiUnity , SiNodedotjs, SiTailwindcss, SiMysql, SiMongodb, SiTensorflow , SiPytorch , SiGit, SiGithub, SiPrisma, SiWordpress, SiElementor, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si"

interface TechItem {
  name: string
  icon: React.ReactNode
}

export default function TechStacks() {
  const techItems: TechItem[] = [
    { name: "JavaScript", icon: <SiJavascript size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "PHP", icon: <SiPhp size={32} /> },
    { name: "Python", icon: <SiPython size={32} /> },
    { name: "Csharp", icon: <SiC size={32} /> },
    { name: "C++", icon: <SiCplusplus size={32} /> },
    { name: "React", icon: <SiReact size={32} /> },
    { name: "PostGreSQL", icon: <SiPostgresql  size={32} /> },
    { name: "Next.JS", icon: <SiNextdotjs size={32} /> },
    { name: "Unity", icon: <SiUnity  size={32} /> },
    { name: "Node.JS", icon: <SiNodedotjs size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { name: "MySQL", icon: <SiMysql size={32} /> },
    { name: "MongoDB", icon: <SiMongodb size={32} /> },
    { name: "TensorFlow", icon: <SiTensorflow  size={32} /> },
    { name: "Pytorch", icon: <SiPytorch  size={32} /> },
    { name: "Git", icon: <SiGit size={32} /> },
    { name: "GitHub", icon: <SiGithub size={32} /> },
    { name: "Prisma", icon: <SiPrisma size={32} /> },
  ]

  return (
    <section className="flex flex-col gap-8">
      <h2 className="title text-2xl sm:text-3xl">Tech Stack</h2>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 rounded-full border border-muted/40 px-4 py-2 min-w-0"
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-sm font-normal truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
