
import { motion } from "framer-motion";
import { concepts } from "../data/concepts";
import ConceptCard from "../components/ConceptCard";
import { Sparkles, Play } from "lucide-react";

export default function Home() {
  return (
    <main className="home-page">

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="hero-label">
            <Sparkles size={15} />
            INTERACTIVE AI LEARNING
          </span>

          <h1>
            Understand AI.
            <br />
            <span>Visualize Intelligence.</span>
          </h1>

          <p>
            Explore the internal architecture of Generative AI
            through interactive, step-by-step visualizations.
            Don't just read how AI works. Watch it work.
          </p>

          <a href="#concepts" className="primary-button">
            <Play size={18} />
            Start Exploring
          </a>
        </motion.div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="hero-core">
            <Sparkles size={55} />
          </div>
          <span className="floating-tag tag-one">LLMs</span>
          <span className="floating-tag tag-two">RAG</span>
          <span className="floating-tag tag-three">Agents</span>
        </div>
      </section>

      <section className="concept-section" id="concepts">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LEARNING LIBRARY</span>
            <h2>Explore Core Concepts</h2>
            <p>
              Select a concept to explore its internal working.
            </p>
          </div>
          <span className="concept-count">
            {concepts.length} Concepts
          </span>
        </div>

        <div className="concept-grid">
          {concepts.map((concept, index) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              index={index}
            />
          ))}

          <motion.div
            className="concept-card coming-soon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="concept-icon">＋</div>
            <h2>More Concepts</h2>
            <p>
              Chunking, Vector Databases, Fine-tuning,
              Prompt Engineering and more.
            </p>
            <span className="coming-label">Coming Soon</span>
          </motion.div>
        </div>
      </section>

      <section className="about-section" id="about">
        <span className="eyebrow">OUR APPROACH</span>
        <h2>Learn by Watching</h2>
        <p>
          Every concept is divided into stages. Watch the
          visualization, understand the internal processing,
          and explore the theory behind each stage.
        </p>
      </section>

    </main>
  );
}
