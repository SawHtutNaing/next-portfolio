import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users, Zap } from "lucide-react"

export function About() {
 const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Laravel",
  "Livewire",
  "Filament",
  "PHP",
  "MySQL",
  "Eloquent ORM",
  "Blade",
  "RESTful APIs",
  "MVC Architecture",
  "Tailwind CSS",
  "Git",
  "Docker",
  "AWS",
];


  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying current with latest technologies and best practices",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">About Me</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground text-pretty">
                Hello! I'm Saw Htut Naing , a senior web developer with over 5 years of experience building web applications. My
                journey in web development started back in 2020, and I've been passionate about creating exceptional
                digital experiences ever since.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
               I’m a full-stack developer specializing in Laravel, React, and Next.js, building scalable, high-performance web applications. I follow the MVC pattern to craft clean, maintainable code and use Filament for developing modern, intuitive admin dashboards. With a strong focus on business-driven solutions, I’ve built a wide range of software — from management systems and real-time chart applications to AI-powered web apps. Passionate about solving complex problems, I deliver efficient, user-centered, and future-ready digital products.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Here are some technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-accent">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <Card key={highlight.title} className="p-6 space-y-3">
                  <highlight.icon className="h-8 w-8 text-accent" />
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
