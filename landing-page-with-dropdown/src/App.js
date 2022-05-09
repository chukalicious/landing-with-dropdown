// import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { appStyles } from "./styles/app-styles";

function App() {
  return (
    <div style={appStyles}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
