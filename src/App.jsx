import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";


import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"


function App(){
    return (

      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    );
}

export default App;