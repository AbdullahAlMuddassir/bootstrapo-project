import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Company Information</h6>
                            <hr/>
                            <p className='text-white'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h6>Social Media</h6>
                            <hr/>
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/about">About</Link></div>
                            <div><Link to="/contact">Contact</Link></div>
                        </div>
                        <div className="col-md-4">
                            <h6>Contact Information</h6>
                            <hr/>
                            <div><p className="text-white mb-1">#345 Chittagong</p></div>
                            <div><p className="text-white mb-1">#345 Chawkbazar</p></div>
                            <div><p className="text-white mb-1">0185052650</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;