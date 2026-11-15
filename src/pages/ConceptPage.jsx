
import { useParams, Link } from "react-router-dom";
import { concepts } from "../data/concepts";
import FlowVisualizer from "../components/FlowVisualizer";
import RagVisualizer from "../components/RagVisualizer";
import { ArrowLeft, BookOpen, Code2, Lightbulb } from "lucide-react";

export default function ConceptPage() {
  const { id } = useParams();

  const concept = concepts.find((item) => item.id === id);

  if (!concept) {
    return (
      <div className="not-found">
        <h2>Concept not found</h2>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <main className="concept-page">

      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to concepts
      </Link>

      <section className="concept-intro">
        <span className="eyebrow">GENAI LEARNING MODULE</span>
        <h1>{concept.title}</h1>
        <p>{concept.subtitle}</p>
      </section>

      {concept.id === "rag" ? (
        <RagVisualizer />
      ) : (
        <FlowVisualizer steps={concept.steps} />
      )}

      <section className="learning-content">

        <div className="learning-heading">
          <BookOpen size={23}/>
          <h2>Understand the Concept</h2>
        </div>

        <p>{concept.description}</p>

        <div className="learning-card">
          <Lightbulb size={23}/>
          <div>
            <h3>What should you understand?</h3>
            <p>
              Follow each stage in the visualization.
              Understand what enters the component,
              what processing happens internally,
              and what output is produced.
            </p>
          </div>
        </div>

        <div className="learning-card">
          <Code2 size={23}/>
          <div>
            <h3>Practical Implementation</h3>
            <p>
              In the next learning section, explore
              Python implementation, real-world examples,
              and the libraries used in industry.
            </p>
          </div>
        </div>

        {concept.steps && (
          <div className="theory-section">
            <h2>Step-by-Step Theory</h2>

            {concept.steps.map((step, index) => (
              <div className="theory-item" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.explanation}</p>
                  <code>{step.example}</code>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

    </main>
  );
}
