import { Fragment, useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize";
import Navbar from "./components/general/Navbar";
import TempCard from "./components/temp/TempCard";
import TempState from "./context/TempState";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <TempState>
      <Fragment>
        <Navbar />
        <div className="container temp-card-container">
          <TempCard />
        </div>
      </Fragment>
    </TempState>
  );
}

export default App;
