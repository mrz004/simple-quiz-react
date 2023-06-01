import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QuestionContainer from "./components/QuestionContainer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <QuestionContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
