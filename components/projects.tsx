import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Cherry Lann Digital Marketing Service",
      description: "Corporate website for a digital marketing agency showcasing services, projects, and contact portals.",
      image: "./cherrylann.png",
      technologies: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      github: null,
      demo: "https://www.cherrylannmarketingmyanmar.com",
    },
    {
      title: "Dar Dar Collections",
      description: "Fashion e-commerce platform with responsive design and product catalog management.",
      image: "./dardarcollections.png",
      technologies: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      github: null,
      demo: "https://dardarcollections.cherrylannmarketingmyanmar.com",
    },
    {
      title: "Moe Star Travel",
      description: "Tourism website with destination listings, travel packages, and booking inquiries.",
      image: "./moestartravel.png",
      technologies: ["React", "Tailwind CSS", "Laravel", "PostgreSQL"],
      github: null,
      demo: "https://www.moestartravel.com",
    },
    {
      title: "Voyage Mandalay",
      description: "Travel and tour management system with dynamic itinerary management.",
      image: "./voyagemandalay.png",
      technologies: ["React", "Laravel", "Tailwind CSS", "PostgreSQL"],
      github: null,
      demo: "https://www.voyagemandalay.com",
    },
    {
      title: "Myanmar Photo Tour",
      description: "Photography-focused travel booking site with gallery, packages, and lead capture features.",
      image: "./myanmarphototour.png",
      technologies: ["React", "Laravel", "Tailwind CSS", "MySQL"],
      github: null,
      demo: "https://www.myanmarphototour.com",
    },
    // {
    //   title: "Hotel Management ERP System",
    //   description: "Comprehensive ERP for multi-department hotel operations including finance, POS, reservations, HR, inventory, and events.",
    //   image: "/hotel-erp.png",
    //   technologies: ["React", "Laravel", "Tailwind CSS", "MySQL", "PostgreSQL"],
    //   github: null,
    //   demo: "#", // Placeholder, no public demo
    // },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {project.github ? (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      </Button>
                    ) : (
                      <p className="text-xs text-muted-foreground italic">
                        Code is proprietary and not publicly available
                      </p>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
