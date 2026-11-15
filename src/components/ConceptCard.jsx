
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Network,
  Database,
  Bot,
  ArrowUpRight
} from "lucide-react";

const icons = {
  Brain,
  Network,
  Database,
  Bot
};

export default function ConceptCard({ concept, index }) {
  const Icon = icons[concept.icon] || Brain;

  return (
    <motion.div
      className="concept-card"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -7 }}
    >
      <div
        className="concept-icon"
        style={{ color: concept.color }}
      >
        <Icon size={30} />
      </div>

      <h2>{concept.title}</h2>

      <p>{concept.description}</p>

      <Link
        to={`/concept/${concept.id}`}
        className="explore-link"
      >
        Explore visualization
        <ArrowUpRight size={18} />
      </Link>
    </motion.div>
  );
}
