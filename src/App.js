import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-red-300">Hola mundo tailwind</div>

      <div className="flex flex-col items-center justify-center">
        <div className="mx-2 bg-green-500">Elemento 1</div>
        <div className="mx-2 bg-red-800">Elemento 2</div>
        <div className="mx-2 bg-purple-400">Elemento 3</div>
        <div className="mx-2 bg-yellow-700">Elemento 4</div>
        <button className="border-2 border-blue-900 p-4 bg-green-200 text-gray-700 hover:bg-pink-500 rounded-lg shadow-lg">
          Haz clic aquí
        </button>
        <button className="border-2 border-blue-900 p-4 bg-green-200 text-gray-700 hover:bg-pink-500 rounded-lg shadow-lg">
          Este es el botón 2
        </button>
      </div>
    </div>
  );
}

export default App;
