import { Cpu, Code2, Brain, Globe } from "lucide-react";

const pillars = [
  { icon: Code2, title: "Desenvolvimento Web", desc: "React, JS/TS e interfaces modernas." },
  { icon: Cpu, title: "IoT & Embarcados", desc: "ESP32, sensores e automação." },
  { icon: Brain, title: "Inteligência Artificial", desc: "ML, regressão, classificação e RNAs." },
  { icon: Globe, title: "Engenharia da Computação", desc: "Software + hardware integrados." },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-mono text-sm text-primary mb-3">01 / sobre</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Sobre mim
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou <span className="text-foreground font-medium">Alex Bruno Duarte</span>, tenho 22 anos,
                graduado em <span className="text-foreground">Ciência e Tecnologia</span> e atualmente
                curso <span className="text-foreground">Engenharia da Computação</span>.
              </p>
              <p>
                Tenho interesse em desenvolvimento web, sistemas embarcados, IoT e inteligência artificial.
                Gosto de criar soluções que unem <span className="text-foreground">software e hardware</span>,
                especialmente projetos com ESP32, automação e aplicações voltadas à resolução de problemas reais.
              </p>
              <p>
                Minha trajetória acadêmica inclui projetos em programação, estruturas de dados,
                orientação a objetos, aprendizado de máquina e sistemas inteligentes.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group p-6 rounded-xl border border-border bg-card shadow-card hover:border-primary/50 transition-smooth"
              >
                <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
