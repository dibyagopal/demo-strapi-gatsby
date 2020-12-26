import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

const Header = () => {

    const [pageScrolled, setPageScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const onScroll = e => {
            if(e.target.documentElement.scrollTop>70){
                setPageScrolled(true);
            }
            else{
                setPageScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [pageScrolled]);

    function openMobileMenu() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    //console.log(pageScrolled)

    return (
        <header className={"mainHeader " + (pageScrolled ? 'pageScrolled' : '') + (mobileMenuOpen ? 'active' : '')}>
            <h1 className="logo"><a href="#" /></h1>
            <span className="mobileNav" onClick={openMobileMenu} />
            <span className="closeNav"  onClick={openMobileMenu} />
            <nav>
                <ul>
                    <li className="active"><Link to="/">HOME</Link></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">Our Approach</a></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><a href="#">Careers</a></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
