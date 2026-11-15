
export const concepts = [
  {
    id: "embeddings",
    title: "Embeddings",
    subtitle: "How machines understand the meaning of text",
    description:
      "Embeddings convert text into numerical vectors that represent semantic meaning.",
    icon: "Brain",
    color: "#8b5cf6",
    steps: [
      {
        title: "Input Text",
        detail: "The user provides a sentence to the embedding model.",
        example: "I love machine learning",
        explanation:
          "The original sentence is supplied as input to an embedding model."
      },
      {
        title: "Tokenization",
        detail: "The sentence is divided into smaller tokens.",
        example: '["I", "love", "machine", "learning"]',
        explanation:
          "A tokenizer converts text into tokens according to the vocabulary of the model."
      },
      {
        title: "Token IDs",
        detail: "Each token is mapped to a numerical token ID.",
        example: "[40, 125, 842, 921]",
        explanation:
          "The model uses numerical IDs instead of directly processing ordinary text."
      },
      {
        title: "Embedding Model",
        detail: "The model converts the input into a dense vector representation.",
        example: "[0.21, -0.45, 0.78, 0.12, ...]",
        explanation:
          "An embedding model produces a vector with a fixed dimensionality for its particular model."
      },
      {
        title: "Semantic Vector",
        detail: "The vector represents semantic information learned by the model.",
        example: "[0.21, -0.45, 0.78, 0.12, ...]",
        explanation:
          "Texts with related meanings can have vectors that are close in the embedding space."
      }
    ]
  },

  {
    id: "rag",
    title: "Retrieval Augmented Generation",
    subtitle: "How retrieved knowledge grounds a language model's response",
    description:
      "RAG retrieves relevant document context and combines it with a user query to generate a grounded response.",
    icon: "Database",
    color: "#06b6d4"
  },

  {
    id: "transformers",
    title: "Transformers",
    subtitle: "How LLMs process contextual information",
    description:
      "Understand how transformer architecture processes tokens using attention.",
    icon: "Network",
    color: "#06b6d4",
    steps: [
      {
        title: "Input Text",
        detail: "The model receives a sentence.",
        example: "The animal didn't cross the street because it was tired.",
        explanation: "The transformer begins by receiving input text."
      },
      {
        title: "Tokenization",
        detail: "Text is converted into tokens.",
        example: "[The, animal, didn't, cross, ...]",
        explanation:
          "The tokenizer converts text into token IDs."
      },
      {
        title: "Token Embeddings",
        detail: "Token IDs are mapped into vector representations.",
        example: "Token ID → Embedding vector",
        explanation:
          "Each token receives a learned representation."
      },
      {
        title: "Self Attention",
        detail: "Tokens calculate relationships with other tokens.",
        example: "Query × Key → Attention Scores",
        explanation:
          "Self-attention helps the model determine which tokens are important when processing another token."
      },
      {
        title: "Feed Forward Network",
        detail: "The representations are processed through neural network layers.",
        example: "Attention output → MLP",
        explanation:
          "Feed-forward layers transform contextual representations."
      },
      {
        title: "Output",
        detail: "The model produces contextual representations and predicts next-token probabilities.",
        example: "Next token → Probability distribution",
        explanation:
          "The language model uses its output representations to predict the next token."
      }
    ]
  },

  {
    id: "agents",
    title: "AI Agents",
    subtitle: "How autonomous AI systems work",
    description:
      "Explore planning, reasoning, tool calling and observation loops.",
    icon: "Bot",
    color: "#f59e0b",
    steps: [
      {
        title: "User Goal",
        detail: "The user provides a task.",
        example: "Find the weather and prepare a report.",
        explanation: "The agent receives a goal."
      },
      {
        title: "Planning",
        detail: "The agent determines the necessary steps.",
        example: "1. Get weather  2. Analyze  3. Prepare report",
        explanation:
          "The agent breaks the task into smaller actions."
      },
      {
        title: "Tool Selection",
        detail: "The agent chooses an appropriate external tool.",
        example: "Weather API",
        explanation:
          "The agent selects a tool based on the task."
      },
      {
        title: "Execution",
        detail: "The selected tool is called.",
        example: "get_weather(city)",
        explanation:
          "The agent executes an action and receives its result."
      },
      {
        title: "Observation",
        detail: "The agent evaluates the tool result.",
        example: "Temperature: 28°C",
        explanation:
          "The agent uses observations to decide whether another action is needed."
      },
      {
        title: "Final Response",
        detail: "The agent provides the completed result.",
        example: "Your weather report is ready.",
        explanation:
          "The agent returns its response to the user."
      }
    ]
  }
];
