import './Footer.css';

function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-items">
                <div className="footer-list">
                    <h3>CareLink</h3>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Press</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h3>For Patients</h3>
                    <ul>
                        <li>Search for doctors</li>
                        <li>Search for clinics</li>
                        <li>Search for hospitals</li>
                        <li>Book Diagnostic Tests</li>
                        <li>Book Full Body Checkups</li>
                        <li>Covid Hospital listing</li>
                        <li>Read health articles</li>
                        <li>Read about medicines</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h3>For Doctors</h3>
                    <ul>
                        <li>Profile</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h3>For clinics</h3>
                    <ul>
                        <li>Test Centers</li>
                        <li>Lab Reports</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h3>For Hospitals</h3>
                    <ul>
                        <li>Profile</li>
                        <li>Reach</li>
                        <li>Drive</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h3>More</h3>
                    <ul>
                        <li>Help</li>
                        <li>Developers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Healthcare Directory</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h3>Social</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Youtube</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
            <div className="footer-logo">
                <img src="images/logo.png" alt="CareLink" />
                <h3>Copyright © 2023, CareLink. All rights reserved.</h3>
            </div>
        </div>
    );
}

export default Footer;