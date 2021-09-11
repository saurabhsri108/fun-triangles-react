import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";

import Quiz from "./pages/Quiz";
import Hypotenuse from "./pages/Hypotenuse";
import IsTriangle from "./pages/IsTriangle";
import Area from "./pages/Area";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Quiz} />
        <Route exact path="/hypotenuse" component={Hypotenuse} />
        <Route exact path="/is-triangle" component={IsTriangle} />
        <Route exact path="/area" component={Area} />
      </Switch>
    </>
  );
}

export default App;
