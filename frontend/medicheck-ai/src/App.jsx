
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Assessment from "./pages/Assessment";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-orange-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
