
import { Activity, BrainCircuit, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Symptom questionnaire",
    description: "Users provide answers about selected symptoms.",
  },
  {
    icon: BrainCircuit,
    title: "Rule-based reasoning",
    description: "Python evaluates predefined rules rather than a trained ML model.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first",
    description: "Results are educational and are not a diagnosis.",
  },
];

function About() {
  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <h1 className="text-4xl font-bold text-stone-900">
        About <span className="text-orange-600">MediCheck AI</span>
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
        MediCheck AI is a student project demonstrating how a web application
        can collect symptom information and process it using a Python-based
        rule system.
      </p>

      <div className="mt-12 grid grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-orange-100 bg-white p-7">
            <Icon className="text-orange-600" size={32} />
            <h2 className="mt-5 text-xl font-bold text-stone-900">{title}</h2>
            <p className="mt-3 leading-7 text-stone-600">{description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default About;
