import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleBlogPost from './components/SingleBlogPost';
import Blog from './components/Blog';
import SingleProject from './components/SingleProject';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <Router>
      {/* <TopBar /> */}
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SingleBlogPost} path='/blog/:slug' />
        <Route component={Blog} path='/blog' />
        <Route component={SingleProject} path='/portfolio/:slug' />
        <Route component={Portfolio} path='/portfolio' />
      </Switch>
    </Router>
  );
}

export default App;
