import { Code, Server, Cpu, Brain, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code,
    title: "Front-end",
    items: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Back-end & lógica",
    items: ["Node.js", "Java", "C", "Python"],
  },
  {
    icon: Cpu,
    title: "IoT & sistemas embarcados",
    items: ["ESP32", "Sensores ultrassônicos", "IoT", "C/C++ p/ microcontroladores"],
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    items: ["KNN", "Regressão Linear", "Regressão Logística", "Redes Neurais", "Machine Learning"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "AWS Amplify"],
  },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-sm text-primary mb-3">04 / habilidades</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Stack & habilidades
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
