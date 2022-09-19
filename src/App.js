import './App.css';
import Welcome from "./component/Welcome";
import Projects from "./component/Projects";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Firmin Exertier"
    }, []);
  return (
      <>
          <Welcome />
          <Projects />
          <div id="site-info">Made with React (Bootstrap), hosted by Netlify</div>
      </>
    );
}

export default App;
