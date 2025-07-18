
import React from 'react';
import {Link} from 'react-router-dom';
import './Layout.css';

function Layout({children}) {
     return (
        <div>
            <header className="site-header">
                <div className="logo-container">
                    <img src="/logo3.png" alt="Temple Logo" className="logo-image"/>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/add-event">Prayer Request</Link>
                </nav>
            </header>
<div className="scrolling-headline">
  <div className="scroll-text">
    Welcome to Sree Peetam, Kakinada | Maha Sakhti Yaagam 2025 details will be released soon !!
  </div>
</div>


             <main className="site-content">
        {children}
      </main>

      <footer className="site-footer">
        © 2025 Temple Website. All rights reserved.
      </footer>

        </div>
     );
}

export default Layout;