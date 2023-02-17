import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";

function App() {
  return (
    <div className="App">
      <span>Hola mundo</span>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>

      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
    </div>
  );
}

export default App;
