import "./App.scss";
import Card from "./components/card";
import FilterBar from "./components/filter-bar";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FilterBar />
      <main>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default App;
