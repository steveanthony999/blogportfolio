import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleBlogPost from './components/SingleBlogPost';
import Blog from './components/Blog';
import SingleProject from './components/SingleProject';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SingleBlogPost} path='/blog/:slug' />
        <Route component={Blog} path='/blog' />
        <Route component={SingleProject} path='/projects/:slug' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </Router>
  );
}

export default App;
