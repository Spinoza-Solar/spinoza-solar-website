import { Switch, Route } from 'react-router-dom';

import './App.css';

import {Footer, Navbar} from "./components";
import { HomePage, MediaPage, NewsPage, SponsorPage} from "./pages";

function App() {
  return (
    <div className="App">
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/Media">
                    <MediaPage />
                </Route>
                <Route exact path="/News">
                    <NewsPage />
                </Route>
                <Route exact path="/Sponsors">
                    <SponsorPage />
                </Route>
            </Switch>
        <Footer />
    </div>
  );
}

export default App;
