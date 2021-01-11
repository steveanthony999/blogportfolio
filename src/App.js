import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleBlogPost from './components/SingleBlogPost';
import Blog from './components/Blog';
import SingleProject from './components/SingleProject';
import Portfolio from './components/Portfolio';
import Credits from './components/Credits';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [navTextColor, setNavTextColor] = useState('#fff');

  const saveNavTextColor = (e) => {
    setNavTextColor(e);
  };

  return (
    <Router>
      <Navbar textColor={navTextColor} />
      <Switch>
        <Route path='/' exact render={() => <Home saveNavTextColor={saveNavTextColor} />} />
        <Route path='/about' render={() => <About saveNavTextColor={saveNavTextColor} />} />
        <Route component={SingleBlogPost} path='/blog/:slug' />
        <Route path='/blog' render={() => <Blog saveNavTextColor={saveNavTextColor} />} />
        <Route component={SingleProject} path='/portfolio/:slug' />
        <Route component={Portfolio} path='/portfolio' />
        <Route path='/credits' render={() => <Credits saveNavTextColor={saveNavTextColor} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
