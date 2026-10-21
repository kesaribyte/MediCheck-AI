
import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, ArrowRight } from "lucide-react";


const questions = [
  { key: "fever", label: "Do you have a fever?" },
  { key: "cough", label: "Do you have a cough?" },
  { key: "headache", label: "Do you have a headache?" },
  { key: "sore_throat", label: "Do you have a sore throat?" },
  { key: "fatigue", label: "Are you feeling unusually tired?" },
  { key: "body_aches", label: "Do you have body aches?" },
  { key: "runny_nose", label: "Do you have a runny nose?" },
  { key: "sneezing", label: "Are you sneezing?" },
  { key: "nausea", label: "Do you feel nauseated?" },
  { key: "vomiting", label: "Have you vomited?" },
  { key: "diarrhea", label: "Do you have diarrhea?" },
  { key: "dizziness", label: "Do you feel dizzy?" },
  { key: "chills", label: "Do you have chills?" },
  { key: "shortness_of_breath", label: "Are you experiencing shortness of breath?" },
];

function Assessment() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const allAnswered = questions.every((question) =>
    Object.prototype.hasOwnProperty.call(answers, question.key)
  );

  function handleAnswer(key, value) {
    setAnswers((previous) => ({
      ...previous,
      [key]: value,
    }));
    setResult(null);
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!allAnswered) {
      setError("Please answer all four questions.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/assess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error("The server could not process your answers.");
      }

      const data = await response.json();
      setResult(data);
    } catch {
      setError(
        "Could not connect to FastAPI. Please check that your backend is running."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetAssessment() {
    setAnswers({});
    setResult(null);
    setError("");
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-orange-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <section className="mt-8 rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
              <Activity size={28} />
            </div>

            <div>
              <p className="text-sm font-semibold text-orange-600">
                MEDICHECK AI
              </p>
              <h1 className="text-3xl font-bold text-stone-900">
                Symptom Assessment
              </h1>
            </div>
          </div>

          <p className="mt-4 leading-7 text-stone-600">
            Please answer the following questions based on how you feel.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {questions.map((question, index) => (
              <fieldset
                key={question.key}
                className="rounded-xl border border-stone-200 p-5"
              >
                <legend className="px-2 font-semibold text-stone-800">
                  {index + 1}. {question.label}
                </legend>

                <div className="mt-3 flex gap-4">
                  {[true, false].map((value) => (
                    <label
                      key={String(value)}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-3 ${
                        answers[question.key] === value
                          ? "border-orange-500 bg-orange-50 text-orange-700"
                          : "border-stone-200 text-stone-600 hover:border-orange-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.key}
                        checked={answers[question.key] === value}
                        onChange={() => handleAnswer(question.key, value)}
                        className="accent-orange-600"
                      />
                      {value ? "Yes" : "No"}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 p-4 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Processing..." : "Submit Answers"}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          {result && (
            <section
              aria-live="polite"
              className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6"
            >
              <h2 className="text-2xl font-bold text-stone-900">
                Assessment Result
              </h2>

              <p className="mt-4 font-semibold text-orange-700">
                {result.message ||
                  result.result ||
                  "Assessment completed."}
              </p>

              <p className="mt-3 text-stone-600">
                Positive answers: {result.symptom_count ?? 0}
              </p>

              <p className="mt-2 text-stone-600">
                Reported symptoms:{" "}
                {Array.isArray(result.positive_symptoms) &&
                result.positive_symptoms.length > 0
                  ? result.positive_symptoms.join(", ").replace(/_/g, " ")
                  : "None"}
              </p>

              <div className="mt-5 rounded-xl bg-white p-4">
                <h3 className="font-semibold text-stone-900">
                  General Guidance
                </h3>
                <p className="mt-2 leading-7 text-stone-600">
                  {result.guidance ||
                    "Consult a qualified healthcare professional if you are concerned about your symptoms."}
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-stone-500">
                This educational tool does not diagnose illness. Seek urgent
                medical help for severe symptoms, including difficulty breathing
                or chest pain.
              </p>

              <button
                type="button"
                onClick={resetAssessment}
                className="mt-5 rounded-xl border border-orange-300 px-5 py-3 font-semibold text-orange-700 hover:bg-white"
              >
                Start Again
              </button>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}

export default Assessment;
