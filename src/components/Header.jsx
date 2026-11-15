
import { Link } from "react-router-dom";
import { BrainCircuit, Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <div className="brand-icon">
          <BrainCircuit size={25} />
        </div>
        <span>GenAI<span className="brand-highlight">Visualiser</span></span>
      </Link>

      <nav className="header-nav">
        <Link to="/">Explore</Link>
        <a href="#about">About</a>
        <a href="#concepts">Concepts</a>
      </nav>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        <Code2 size={19} />
        <span>GitHub</span>
      </a>
    </header>
  );
}
