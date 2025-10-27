import { Card } from "@/components/ui/card"

export function Experience() {
const experiences = [
  {
    title: "Senior Web Developer",
    company: "Unity IT Solutions Provider Co., Ltd.",
    period: "2024 - 2025",
    description: [
      "Led the development of enterprise web applications for diverse clients",
      "Implemented scalable solutions using Laravel, React, and Next.js",
      "Optimized workflows with Filament dashboards and Livewire components",
      "Mentored junior developers and collaborated on full-stack projects",
    ],
    technologies: ["Laravel", "React", "Next.js", "Filament", "Livewire", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Web Developer",
    company: "SpeakEasy Global Academy",
    period: "2023 - 2024",
    description: [
      "Developed interactive web applications for education and business use",
      "Integrated third-party APIs and built responsive UI with React",
      "Worked on both backend and frontend using Laravel and Next.js",
    ],
    technologies: ["Laravel", "React", "Next.js", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Junior Developer",
    company: "Za Information Co. Ltd.",
    period: "2023 - 2024",
    description: [
      "Assisted in building internal tools and web applications",
      "Learned and applied MVC patterns with Laravel and modern JS frameworks",
      "Collaborated in team sprints and agile development cycles",
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL"],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 - 2023",
    description: [
      "Built custom websites and web applications for small businesses",
      "Focused on frontend with React/Next.js and backend with Laravel",
      "Delivered client-focused solutions with clean and maintainable code",
    ],
    technologies: ["Laravel", "React", "Next.js", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Web Development Student",
    company: "MMSIT",
    period: "2021 - 2022",
    description: [
      "Studied modern web development technologies and best practices",
      "Worked on projects using JavaScript, React, and PHP/Laravel",
      "Built foundational skills in full-stack web application development",
    ],
    technologies: ["JavaScript", "React", "Laravel", "PHP", "MySQL"],
  },
  {
    title: "Digital Marketing Assistant",
    company: "Cherry Learn Digital Marketing",
    period: "2020 - 2021",
    description: [
      "Assisted in digital marketing campaigns and website updates",
      "Gained exposure to business workflows and online tools",
      "Developed an interest in web development through hands-on tasks",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];


  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Experience</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1.5">▹</span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
