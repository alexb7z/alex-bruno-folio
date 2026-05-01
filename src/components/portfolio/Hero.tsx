import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl animate-fade-up">
          <p className="font-mono text-sm text-primary mb-4">
            // Olá, mundo 👋
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Alex Bruno <span className="text-gradient">Duarte</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            Desenvolvedor <span className="text-foreground">·</span> IoT{" "}
            <span className="text-foreground">·</span> Engenharia da Computação
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10">
            Construindo soluções que unem <span className="text-foreground font-medium">software e hardware</span> —
            do ESP32 à inteligência artificial, com foco em problemas reais.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild className="shadow-glow">
              <a href="https://github.com/alexb7z" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contato-linkedin">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#contato">
                <Mail className="mr-2 h-4 w-4" /> Contato
              </a>
            </Button>
          </div>
        </div>

        <a
          href="#sobre"
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" /> rolar
        </a>
      </div>
    </section>
  );
};
