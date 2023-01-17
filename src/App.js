import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import {ToastContainer} from "react-toastify";
import {ContextProvider} from "./context/context";

function App() {
  return (
    <div className="App">
        <ToastContainer autoClose={2000}/>
        <Header/>
        <ContextProvider>
            <Shop/>
        </ContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
