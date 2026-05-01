import { Github, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  role: string;
  highlight?: boolean;
  extra?: string;
}

const projects: Project[] = [
  {
    name: "IoT Water Reuse ESP32",
    description:
      "Sistema para reaproveitamento de água de ar-condicionado utilizando ESP32 e sensor ultrassônico — combatendo o desperdício de água.",
    tech: ["ESP32", "C++", "IoT", "Sensores"],
    link: "https://github.com/alexb7z/iot-water-reuse-esp",
    role: "Desenvolvedor principal",
    highlight: true,
    extra: "Problema resolvido: desperdício de água",
  },
  {
    name: "Sistemas Inteligentes",
    description:
      "Repositório com múltiplos projetos de aprendizado de máquina: KNN, Regressão Linear, Regressão Logística e introdução a Redes Neurais Artificiais.",
    tech: ["Python", "Machine Learning", "IA", "Classificação"],
    link: "https://github.com/guilhermef2k/Sistemas_Inteligentes",
    role: "Desenvolvimento e estudo acadêmico",
  },
  {
    name: "Gerenciamento Hospitalar",
    description:
      "Sistema de gerenciamento hospitalar em Java: cadastro de pacientes e médicos, login, agendamento e visualização de consultas, gerenciamento de acessos.",
    tech: ["Java", "POO", "Herança", "Polimorfismo"],
    link: "https://github.com/izalouyza/GerenciamentoHospitalar",
    role: "Desenvolvimento em equipe",
  },
  {
    name: "Distribuidora Ponteiro sem Ponta",
    description:
      "Sistema de gestão para distribuidoras em C, com foco em controle de estoque, usuários e produtos. Login, cadastro, busca, edição e exclusão.",
    tech: ["C", "Estrutura de Dados", "Modularização"],
    link: "https://github.com/guilhermef2k/Projeto_AEDII",
    role: "Redator",
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-sm text-primary mb-3">02 / projetos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Projetos selecionados
          </h2>
          <p className="text-muted-foreground">
            Uma seleção do que tenho construído — do hardware ao software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className={`group relative flex flex-col p-6 sm:p-8 rounded-2xl border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-glow ${
                p.highlight ? "border-primary/40" : "border-border hover:border-primary/40"
              }`}
            >
              {p.highlight && (
                <Badge className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground border-0 shadow-glow">
                  <Star className="h-3 w-3 mr-1" /> Projeto destaque
                </Badge>
              )}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${p.name} no GitHub`}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              {p.extra && (
                <p className="text-xs text-primary mb-3 font-medium">{p.extra}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{p.role}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-smooth"
                >
                  <Github className="h-4 w-4" /> Código
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
