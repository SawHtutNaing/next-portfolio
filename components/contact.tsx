import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Get In Touch</h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm currently open to new opportunities and interesting projects. Whether you have a question or just want
              to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:john@example.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                sawhtutnaing2004@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                09664988136                
              </a>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-3 bg-accent/10 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">Yangon , Myanmar</p>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" asChild>
              <a href="mailto:sawhtutnaing2004@gmail.com">Send Me an Email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
