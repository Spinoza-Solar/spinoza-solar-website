import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import {Footer, Navbar} from "./components";
import { AboutPage, HomePage, MediaPage, NewsPage, SponsorPage} from "./pages";

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/About" element={<AboutPage />}></Route>
                <Route exact path="/Media" element={<MediaPage />}></Route>
                <Route exact path="/News" element={<NewsPage />}></Route>
                <Route exact path="/Sponsors" element={<SponsorPage />}></Route>
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
