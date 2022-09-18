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
                <Route path="/Media">
                    <MediaPage />
                </Route>
                <Route path="/News">
                    <NewsPage />
                </Route>
                <Route path="/Sponsors">
                    <SponsorPage />
                </Route>
            </Switch>
        <Footer />
    </div>
  );
}

export default App;
