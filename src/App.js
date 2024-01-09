import "./App.css";
import Header from "./components/Header";
import TokenDataContainer from "./components/TokenDataContainer";
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <>
      <Header />

      <TokenDataContainer />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        hideProgressBar={false} />
    </>
  );
}

export default App;
