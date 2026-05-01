import { GraduationCap, BookOpen, Award } from "lucide-react";

const academic = [
  {
    title: "Engenharia da Computação",
    place: "UFERSA",
    status: "Em andamento",
  },
  {
    title: "Ciência e Tecnologia",
    place: "UFERSA",
    status: "Concluído",
  },
];

const courses = [
  "Desenvolvimento Pessoal — T5 ONE",
  "Iniciante em Programação — T5 ONE",
  "Business Agility — T5 ONE",
  "Empreendedorismo — T5 ONE",
  "Front End — T5 ONE",
  "React — T5 ONE",
];

export const Education = () => {
  return (
    <section id="formacao" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-sm text-primary mb-3">03 / formação</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Formação acadêmica
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {academic.map((a) => (
            <article
              key={a.title}
              className="p-6 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.place}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {a.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-11 w-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-glow">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Cursos & formações complementares
              </h3>
              <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5 mt-1">
                <Award className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">1.795 atividades</span> concluídas no programa.
              </p>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {courses.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-secondary/50"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
