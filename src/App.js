import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TokenDataContainer from "./components/TokenDataContainer";
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
