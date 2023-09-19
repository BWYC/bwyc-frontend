import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { CoreBlockchain } from "@thirdweb-dev/chains";

import "./style.css";
import Home from "./views/home";
import Ordinals from "./views/ordinals";

const activeChain = CoreBlockchain;

const App = () => {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Router>
        <div>
          <Route component={Home} exact path="/" />
          <Route component={Ordinals} exact path="/ordinals" />
        </div>
      </Router>
    </ThirdwebProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
