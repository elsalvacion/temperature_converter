import { Fragment, useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize";
import Navbar from "./components/general/Navbar";
import TempCard from "./components/temp/TempCard";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <TempCard />
      </div>
    </Fragment>
  );
}

export default App;
