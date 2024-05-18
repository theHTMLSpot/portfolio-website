import {useState, useEffect} from 'react';
import gitHub from '../assets/icons8-github-48.png'

function NavMenu()
{

  const [ActiveLink, SetActiveLink] = useState('/');

  useEffect(()=>{
    const cu = window.location.href;
      SetActiveLink(cu.replace('http://localhost:3000', ''));
      console.log(ActiveLink);
  }, []);
  return(
    <div className='NavBar'>
      <ul>
        <li className='NavLink' id='NavTitle'><a href="#">My Portfolio</a></li>
        <li className={ActiveLink === '/' ? 'ActiveNavLink' : 'NavLink'}><a href="#">Home</a></li>
        <li className={ActiveLink === '/projects' ? 'ActiveNavLink' : 'NavLink'}><a href="#">My Projects</a></li>
        <li className='NavLink' id='NavSocialLink'><a href="https://github.com/theHTMLSpot"><img src={ gitHub } alt='github'/></a></li>
      </ul>
    </div>
  );
}

export default NavMenu;