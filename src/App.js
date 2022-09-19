import { Switch, Route } from 'react-router-dom';

import './App.css';

import {Footer, Navbar} from "./components";
import { AboutPage, HomePage, MediaPage, NewsPage, SponsorPage} from "./pages";

function App() {
  return (
    <div className="App">
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/About">
                    <div className="NavbarFiller"></div>
                    <AboutPage />
                </Route>
                <Route exact path="/Media">
                    <div className="NavbarFiller"></div>
                    <MediaPage />
                </Route>
                <Route exact path="/News">
                    <div className="NavbarFiller"></div>
                    <NewsPage />
                </Route>
                <Route exact path="/Sponsors">
                    <div className="NavbarFiller"></div>
                    <SponsorPage />
                </Route>
            </Switch>
        <Footer />
    </div>
  );
}

export default App;
