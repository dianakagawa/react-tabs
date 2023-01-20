import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Tabs
        tabs={[
          {label: "Pestaña 1", content: "Este es el contenido de la pestaña 1"},
          {label: "Pestaña 2", content: "Y este es el de la pestaña 2"},
          {label: "Pestaña 3", content: "y este el de la pestaña 3"},
        ]}
      />
    </div>
  );
}

export default App;
