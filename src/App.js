import "./App.css";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import TokenDataContainer from "./components/TokenDataContainer/TokenDataContainer";
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <>
      <Header />

      <TokenDataContainer />

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        hideProgressBar={false} />
    </>
  );
}

export default App;
