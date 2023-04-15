import { Link, Outlet  } from 'react-router-dom';

const Layout = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link className='title' to="/">Stock X</Link>
            </li>
            <li>
              <input type='text'></input>
            </li>
            <li>
              <Link to="/Library">Library</Link>
            </li>
            <li>
              <Link to="/Library">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/HowTo">How To's</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Subscribe">Subscribe</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  };

//   <nav className="navbar">
//   <div className='title'>
//     <a className='logs' href="/Login">Login</a>
//     <a className='subs' href="/Subscribe">Subscribe</a>
//   </div>
// </nav>

export default Layout