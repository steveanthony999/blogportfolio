import { Route, Switch, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import SingleBlogPost from './components/SingleBlogPost';
import Blog from './components/Blog';
import SingleProject from './components/SingleProject';
import Portfolio from './components/Portfolio';
import Credits from './components/Credits';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/about' render={() => <About />} />
          <Route component={SingleBlogPost} path='/blog/:slug' />
          <Route path='/blog' render={() => <Blog />} />
          <Route component={SingleProject} path='/portfolio/:slug' />
          <Route component={Portfolio} path='/portfolio' />
          <Route path='/credits' render={() => <Credits />} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
