import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        {/* Header Area */}
        <Header></Header>

        {/* Switch Area */}
        <Switch>
          <Route exact path="/">
            <Main></Main>
            <Courses></Courses>
            <About></About>
          </Route>
          <Route path="/home">
            <Main></Main>
            <Courses></Courses>
            <About></About>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        {/* footer Area */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
