import "./App.css";
import Header from "./components/Header";
import TokenData from "./components/TokenData";
import { mantle, linea, kroma } from 'viem/chains';

const App = () => {
  return (
    <>
      <Header />

      <TokenData
        heading="Mantle"
        chain={mantle}
        contractAddress="0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7" />
      <TokenData
        heading="Linea"
        chain={linea}
        contractAddress="0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7" />
      <TokenData
        heading="Kroma"
        chain={kroma}
        contractAddress="0x7afb9de72A9A321fA535Bb36b7bF0c987b42b859" />
    </>
  );
}

export default App;
