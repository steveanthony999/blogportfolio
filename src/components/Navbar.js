import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <SocialIcon
        url='https://www.linkedin.com/in/steven-woodward-7a422713b/'
        target='_blank'
        fgColor='#000'
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url='https://twitter.com/putersteve'
        target='_blank'
        fgColor='#000'
        style={{ height: 35, width: 35 }}
      />
    </nav>
  );
};

export default Navbar;
