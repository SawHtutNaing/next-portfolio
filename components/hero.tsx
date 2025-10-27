import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Facebook, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-accent/20">
              <Image src="./profile.jpg" alt="Saw Htut Naing" fill className="object-cover" priority />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-accent font-mono text-sm sm:text-base">Hi, my name is</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">Saw Htut Naing</h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground text-balance">
              I build exceptional digital experiences
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm a senior web developer specializing in building scalable web applications. Currently focused on creating
            accessible, human-centered products with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="./sawhtutnaing.pdf" download="Saw_Htut_Naing_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/SawHtutNaing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/saw-htut-naing-17952a227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sawhtutnaing2004@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/saw.htut.naing.775279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
