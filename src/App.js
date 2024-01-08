import "./App.css";
import Header from "./components/Header";
import TokenDataContainer from "./components/TokenDataContainer";
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  return (
    <>
      <Header />

      <TokenDataContainer />
    </>
  );
}

export default App;
