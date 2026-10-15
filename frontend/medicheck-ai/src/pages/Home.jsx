
import { Link } from "react-router-dom";
import { Activity, ArrowRight, ShieldCheck, ClipboardCheck } from "lucide-react";

function Home() {
  return (
    <main className="mx-auto max-w-7xl px-8 py-20">
      <div className="grid grid-cols-2 items-center gap-16">
        <section>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            <Activity size={16} />
            AI-powered educational tool
          </span>

          <h1 className="mt-7 text-6xl font-bold leading-tight tracking-tight text-stone-900">
            Understand your symptoms.
            <span className="text-orange-600"> Know your next step.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            Answer a few questions about how you feel and explore an
            educational, rule-based symptom assessment.
          </p>

          <Link
            to="/assessment"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-orange-600 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-200 hover:bg-orange-700"
          >
            Start Assessment <ArrowRight size={20} />
          </Link>

          <p className="mt-5 text-sm text-stone-500">
            No account required for this demonstration.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-xl shadow-orange-100/50">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-orange-100 p-4 text-orange-600">
              <ClipboardCheck size={34} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900">
                Your health overview
              </h2>
              <p className="mt-1 text-stone-500">
                A simple three-step process
              </p>
            </div>
          </div>

          {[
            ["01", "Answer questions", "Tell us which symptoms you have."],
            ["02", "Review your answers", "Submit them for rule-based assessment."],
            ["03", "Read safety guidance", "Understand the tool's limitations."],
          ].map(([number, title, description]) => (
            <div key={number} className="mt-8 flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-bold text-orange-700">
                {number}
              </span>
              <div>
                <h3 className="font-semibold text-stone-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-stone-500">
                  {description}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-9 flex items-start gap-3 rounded-xl bg-stone-50 p-4">
            <ShieldCheck className="shrink-0 text-orange-600" size={22} />
            <p className="text-sm leading-6 text-stone-600">
              This tool does not diagnose illnesses or replace professional
              medical advice.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
