import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Website Name */}
                <div className="footer-section">
                    <h2>KFC 2.0</h2>
                    <p>Your favorite fried chicken, delivered fresh and hot.</p>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Address: 123 Chicken Lane, Karachi, Pakistan</p>
                    <p>Email: support@kfc2.com</p>
                    <p>Phone: +92 300 1234567</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} KFC 2.0. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;