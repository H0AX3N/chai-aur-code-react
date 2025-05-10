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


//to pass an array or object, first create the array or object and store it in a variable
// then pass it to the component as a prop

// for example:
// const arr = [1, 2, 3, 4, 5]; this is my array
// to pass it to the component, use the following syntax:
// <ComponentName data={arr} />

// same goes for objects
// for example:
// const obj = { name: "John", age: 30 }; this is my object
// to pass it to the component, use the following syntax:
// <ComponentName data={obj} />