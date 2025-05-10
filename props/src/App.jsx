import "./App.css";
import Card from "./components/card";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />
      <div className="w-screen overflow-y-auto snap-y snap-mandatory">
        <section className="h-screen w-full flex items-center justify-center snap-start">
          <Card price={100} nftName="Tiger NFT" slNo="#001" />
        </section>
        <section className="h-screen w-full flex items-center justify-center snap-start">
          <Card price={200} nftName="Lion NFT" slNo="#002" />
        </section>
        {/* Add more sections/cards as needed */}
      </div>
    </>
  );
}

export default App;
