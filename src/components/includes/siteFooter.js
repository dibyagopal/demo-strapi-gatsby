import React from "react"

const Footer = () => (
    <footer className="mainFooter">
        <div className="footerTop">
            <div className="wrapper">
            <div className="footerLeft">
                <a className="footerLogo" />
            </div>
            <div className="footerRight">
                <section>
                <div><strong>Singapore</strong></div>
                <div>30 Cecil Street</div>
                <div>Prudential Tower, #19-08</div>
                <div>Singapore 049712</div>
                <div><a href="mailto:biz@digitalavenues.com">biz@digitalavenues.com</a></div>
                </section>
                <section>
                <div><strong>India</strong></div>
                <div>133A Southern Avenue</div>
                <div>Kolkata 700 029</div>
                <div>West Bengal, India</div>
                </section>
                <section>
                <div><strong>United States</strong></div>
                <div>1234 SW Avenue</div>
                <div>Portland, Oregon</div>
                <div>USA</div>
                </section>
            </div>
            </div>
        </div>
        <div className="footerBottom">
            <div className="wrapper">
            <div className="footerLeft">
                <div><strong>© {new Date().getFullYear()} Digital Avenues Pte. Ltd.</strong></div>
                <div><a href="#">Privacy Policy</a>  •  <a href="#">Terms &amp; Conditions</a></div>
            </div>
            <div className="footerRight">
                <ul className="footerNav">
                <li><a href="#">HOME</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Our Approach</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            </div>
        </div>
    </footer>

)

export default Footer
