
import React from 'react';
import {Link} from 'react-router-dom';
import './Layout.css';

function Layout({children}) {
     return (
        <div>
            <header className="site-header">
                <div className="logo-container">
                    <img src="/logo4.png"alt="Temple Logo" className="logo-image"/>
                </div>
                <nav className="nav-links">
                   <div className="site-title">Sree Peetham</div>
                    <Link to="/">Home</Link>
                    <Link to="/add-event">Prayer Request</Link>
                </nav>
            </header>
<div className="scrolling-headline">
  <div className="scroll-text">
Welcome to Sree Peetam, Kakinada 🙏|Maha Sakhti Yaagam 2025 details will be released soon !! | For Gowdurbar products please visit Gowdurbar Official website
  </div>
</div>


             <main className="site-content">
        {children}
      </main>

      <footer className="site-footer">
  <div className="footer-container">
    <p>© 2025 SreePeetam Official Website. All rights reserved.</p>
    <h3>Contact Us</h3>
    <p><strong>Temple Address:</strong> Maruthi Nagar,Pithapuram Road, Andhra Pradesh, India</p>
    <p><strong>Email:</strong> contact@sreepeetam.org</p>
    <p><strong>Phone:</strong> +91 8105111988</p>
    <p><strong>Timings:</strong> 6:00 AM – 8:30 PM</p>
  </div>
</footer>


        </div>
     );
}

export default Layout;