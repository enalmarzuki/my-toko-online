import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
