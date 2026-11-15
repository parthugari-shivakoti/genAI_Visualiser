
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ConceptPage from "./pages/ConceptPage";

export default function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/concept/:id"
            element={<ConceptPage />}
          />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}
