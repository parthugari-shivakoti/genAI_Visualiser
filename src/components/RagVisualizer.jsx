
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

const indexing = [
  {
    title: "Documents",
    description: "Load documents from PDFs, text files or other sources.",
    data: "company_policy.pdf"
  },
  {
    title: "Chunking",
    description: "Split large documents into smaller, meaningful chunks.",
    data: '["Chunk 1", "Chunk 2", "Chunk 3"]'
  },
  {
    title: "Embedding Model",
    description: "Convert each document chunk into a numerical vector.",
    data: "Chunk → [0.21, -0.45, 0.78, ...]"
  },
  {
    title: "Vector Database",
    description: "Store vectors along with their original text and metadata.",
    data: "Vector + Text + Metadata"
  }
];

const retrieval = [
  {
    title: "User Query",
    description: "The user asks a question in natural language.",
    data: "What is the company's leave policy?"
  },
  {
    title: "Query Embedding",
    description: "Convert the question into a vector using the same embedding model.",
    data: "Query → [0.18, -0.39, 0.82, ...]"
  },
  {
    title: "Similarity Search",
    description: "Compare the query vector with stored document vectors.",
    data: "Cosine Similarity → Top K Results"
  },
  {
    title: "Retrieved Context",
    description: "Retrieve the original text of the most relevant chunks.",
    data: "Chunk 2 + Chunk 5 + Chunk 8"
  },
  {
    title: "LLM Generation",
    description: "Send the question and retrieved context to the language model.",
    data: "Prompt + Context → LLM"
  },
  {
    title: "Final Response",
    description: "The LLM generates an answer using the retrieved information.",
    data: "Employees receive 12 casual leave days."
  }
];

export default function RagVisualizer() {

  const [phase, setPhase] = useState("indexing");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const activeSteps =
    phase === "indexing" ? indexing : retrieval;

  const current = activeSteps[step];

  const globalStep =
    phase === "indexing" ? step : step + indexing.length;

  useEffect(() => {
    if (!playing) return;

    const timer = setTimeout(() => {
      const nextStep = Math.min(step + 1, activeSteps.length - 1);
      setStep(nextStep);

      if (nextStep === activeSteps.length - 1) {
        setPlaying(false);
      }
    }, 2500);

    return () => clearTimeout(timer);

  }, [playing, step, activeSteps.length]);

  const changePhase = (value) => {
    setPlaying(false);
    setPhase(value);
    setStep(0);
  };

  const reset = () => {
    setPlaying(false);
    setPhase("indexing");
    setStep(0);
  };

  const next = () => {
    setStep((value) =>
      Math.min(value + 1, activeSteps.length - 1)
    );
  };

  const previous = () => {
    setStep((value) => Math.max(value - 1, 0));
  };

  const togglePlay = () => {
    if (step === activeSteps.length - 1 && !playing) {
      setStep(0);
    }

    setPlaying((value) => !value);
  };

  return (
    <div className="visualizer rag-visualizer">

      {/* HEADER */}

      <div className="visualizer-top">
        <div>
          <span className="eyebrow">
            RAG ARCHITECTURE
          </span>

          <h2>
            Retrieval Augmented Generation
          </h2>
        </div>

        <span className="live-indicator">
          <span></span>
          Live Flow
        </span>
      </div>

      {/* PHASE SELECTION */}

      <div className="phase-tabs">

        <button
          className={
            phase === "indexing" ? "selected" : ""
          }
          onClick={() => changePhase("indexing")}
        >
          01. Offline Indexing
        </button>

        <button
          className={
            phase === "retrieval" ? "selected" : ""
          }
          onClick={() => changePhase("retrieval")}
        >
          02. Query & Generation
        </button>

      </div>

      {/* ARCHITECTURE */}

      <div className="rag-architecture">

        {/* INDEXING */}

        <div className="architecture-label">
          OFFLINE INDEXING
        </div>

        <div className="rag-lane">

          {indexing.map((node, index) => (

            <div className="rag-node-wrap" key={node.title}>

              <motion.div
                className={`rag-node ${
                  phase === "indexing" && step === index
                    ? "active"
                    : phase === "indexing" && step > index
                    ? "completed"
                    : ""
                }`}
              >

                <span>
                  0{index + 1}
                </span>

                <strong>{node.title}</strong>

              </motion.div>

              {index !== indexing.length - 1 && (
                <span className="rag-arrow">→</span>
              )}

            </div>

          ))}

        </div>

        {/* SHARED VECTOR DATABASE */}

        <div className="database-bridge">

          <div className="bridge-line"></div>

          <motion.div
            className="database-symbol"
            animate={{
              boxShadow:
                phase === "indexing" && step === 3
                  ? "0 0 25px #8b5cf677"
                  : "0 0 0px transparent"
            }}
          >
            <span>SHARED STORAGE</span>
            <strong>Vector Database</strong>
            <small>Persistent vectors + metadata + text</small>
          </motion.div>

          <div className="bridge-line"></div>

        </div>

        {/* QUERY TIME */}

        <div className="architecture-label">
          QUERY-TIME RETRIEVAL & GENERATION
        </div>

        <div className="rag-lane retrieval-lane">

          {retrieval.map((node, index) => (

            <div className="rag-node-wrap" key={node.title}>

              <motion.div
                className={`rag-node ${
                  phase === "retrieval" && step === index
                    ? "active"
                    : phase === "retrieval" && step > index
                    ? "completed"
                    : ""
                }`}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{node.title}</strong>

              </motion.div>

              {index !== retrieval.length - 1 && (
                <span className="rag-arrow">→</span>
              )}

            </div>

          ))}

        </div>

        <div className="db-connection-note">
          <span>↕</span>
          Similarity Search reads stored vectors from the same Vector Database.
        </div>

      </div>

      {/* CURRENT STEP EXPLANATION */}

      <div className="rag-current-step">

        <span className="eyebrow">
          CURRENT STAGE {String(globalStep + 1).padStart(2, "0")}
        </span>

        <AnimatePresence mode="wait">

          <motion.div
            key={`${phase}-${step}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="data-packet">
              <span>DATA TRANSFORMATION</span>
              <code>{current.data}</code>
            </div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* CONTROLS */}

      <div className="player-controls">

        <button onClick={reset}>
          <RotateCcw size={19} />
        </button>

        <button
          onClick={previous}
          disabled={step === 0}
        >
          Previous
        </button>

        <button
          className="play-button"
          onClick={togglePlay}
        >
          {playing ? (
            <Pause size={19} />
          ) : (
            <Play size={19} />
          )}

          {playing ? "Pause" : "Play"}
        </button>

        <button
          onClick={next}
          disabled={step === activeSteps.length - 1}
        >
          Next →
        </button>

        <span className="step-counter">
          {step + 1} / {activeSteps.length}
        </span>

      </div>

      {/* PROGRESS */}

      <div className="progress-bar">
        <motion.div
          animate={{
            width: `${
              ((step + 1) / activeSteps.length) * 100
            }%`
          }}
        />
      </div>

    </div>
  );
}
