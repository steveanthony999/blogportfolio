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
import Loading from './components/Loading';
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <AnimatePresence exitBeforeEnter>
            <ScrollToTop />
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
        </div>
      )}
    </>
  );
}

export default App;
