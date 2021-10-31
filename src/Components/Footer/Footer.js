import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_container">
            <div className='footer-body'>
                <div className="row ">
                    <div className="footer-items ">
                        <div className="about col-md-4">
                            <h3>Contact Info</h3>
                            <h6>Bangladesh Office</h6>
                            <div className='color'>
                                <p>72/2, BB ghosh Lane,Kalishankarpur,Kushtia,Dhaka.<br></br> Phone & Whatsapp: +8801915441238,+918420421766</p>
                                <h6>Email us</h6>
                                <p>deshtravel@gmail.com</p>
                                <p>info.deshtravel@gmail.com</p>
                            </div>
                        </div>

                        <div className="links col-md-4">
                            <h3>Quicks Links</h3>
                            <div className='color'>
                                <p>Tours in Bangladesh</p>
                                <p>Popular Tours</p>
                                <p>World Heritages</p>
                                <p>Top Attractions</p>
                                <p>About Bangladesh</p>
                                <p>Help Desk</p>
                            </div>
                        </div>

                        <div className="condition col-md-4">
                            <h3>Terms & Condition</h3>
                            <div className='color'>
                                <p>Payment Method</p>
                                <p>Booking Policy</p>
                                <p>Cancellation Policy</p>
                                <p>Legal Help</p>
                                <p>Money Return Policy</p>
                                <p>Vat & Taxs</p>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <h5 className='color'><strong>Copyrights @ protyoy2021||all rights reserved</strong></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;