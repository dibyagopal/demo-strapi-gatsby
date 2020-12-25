import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

const Header = () => {

    const [pageScrolled, setPageScrolled] = useState(false);
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

    console.log(pageScrolled)

    return (
        <header className={"mainHeader " + (pageScrolled ? 'pageScrolled' : '')}>
            <h1 className="logo"><a href="index.html" /></h1>
            <span className="mobileNav" />
            <span className="closeNav" />
            <nav>
                <ul>
                    <li className="active"><Link to="/">HOME</Link></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">Our Approach</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
