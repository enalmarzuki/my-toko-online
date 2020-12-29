import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home";
import Login from "../Login";
import Detail from "../DetailPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/detail/:id" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
