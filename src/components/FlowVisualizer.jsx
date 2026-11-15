
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function FlowVisualizer({ steps }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = steps[active];

  useEffect(() => {
    if (!playing) return;

    if (active >= steps.length - 1) {
      setPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setActive((value) => value + 1);
    }, 2500);

    return () => clearTimeout(timer);
  }, [playing, active, steps.length]);

  const reset = () => {
    setPlaying(false);
    setActive(0);
  };

  const next = () => {
    setActive((value) =>
      Math.min(value + 1, steps.length - 1)
    );
  };

  const previous = () => {
    setActive((value) =>
      Math.max(value - 1, 0)
    );
  };

  const togglePlay = () => {
    if (active === steps.length - 1 && !playing) {
      setActive(0);
    }

    setPlaying((value) => !value);
  };

  if (!steps || steps.length === 0) {
    return <p>No visualization steps available.</p>;
  }

  return (
    <div className="visualizer">

      {/* HEADER */}

      <div className="visualizer-top">
        <div>
          <span className="eyebrow">
            LIVE ARCHITECTURE
          </span>
          <h2>Processing Pipeline</h2>
        </div>

        <span className="live-indicator">
          <span></span>
          Interactive
        </span>
      </div>

      {/* PROCESS FLOW */}

      <div className="flow-track">

        {steps.map((step, index) => (
          <div className="flow-item" key={step.title}>

            <motion.button
              className={`flow-node ${
                index === active
                  ? "active"
                  : index < active
                  ? "completed"
                  : ""
              }`}
              onClick={() => {
                setPlaying(false);
                setActive(index);
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {index < active ? (
                <CheckCircle2 size={21} />
              ) : (
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </motion.button>

            <span
              className={`flow-label ${
                index === active ? "selected-label" : ""
              }`}
            >
              {step.title}
            </span>

            {index !== steps.length - 1 && (
              <div
                className={`flow-connector ${
                  index < active ? "connector-done" : ""
                }`}
              >
                <div></div>
              </div>
            )}

          </div>
        ))}

      </div>

      {/* ANIMATED VISUALIZATION AREA */}

      <div className="visualizer-screen">

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            className="step-content"

            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}

            exit={{
              opacity: 0,
              y: -15
            }}

            transition={{ duration: 0.4 }}
          >

            <span className="step-number">
              STAGE {String(active + 1).padStart(2, "0")}
            </span>

            <h2>{current.title}</h2>

            <p>{current.detail}</p>

            <motion.div
              className="data-packet"

              initial={{
                opacity: 0,
                scale: 0.85
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              transition={{ delay: 0.2 }}
            >
              <span>PROCESSING DATA</span>

              <code>{current.example}</code>
            </motion.div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* CONTROLS */}

      <div className="player-controls">

        <button
          onClick={reset}
          title="Restart"
        >
          <RotateCcw size={19} />
        </button>

        <button
          onClick={previous}
          disabled={active === 0}
          title="Previous"
        >
          <SkipBack size={20} />
        </button>

        <button
          className="play-button"
          onClick={togglePlay}
        >
          {playing ? (
            <Pause size={20} />
          ) : (
            <Play size={20} />
          )}

          {playing ? "Pause" : "Play"}
        </button>

        <button
          onClick={next}
          disabled={active === steps.length - 1}
          title="Next"
        >
          <SkipForward size={20} />
        </button>

        <span className="step-counter">
          {active + 1} / {steps.length}
        </span>

      </div>

      {/* PROGRESS */}

      <div className="progress-bar">
        <motion.div
          animate={{
            width: `${
              ((active + 1) / steps.length) * 100
            }%`
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* EXPLANATION */}

      <div className="explanation-panel">

        <span className="eyebrow">
          UNDERSTANDING THE PROCESS
        </span>

        <h3>{current.title}</h3>

        <p>{current.explanation}</p>

      </div>

    </div>
  );
}
