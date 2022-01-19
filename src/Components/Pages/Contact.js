import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className='py-4 bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 my-auto'>
                        <h6>Contact Us</h6>
                    </div>
                    <div className='col-md-8 my-auto'>
                        <h6 className="float-end">Home /Contact Us</h6>
                    </div>
                </div>
            </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 border-left'>
                                    <h6>Contact From</h6>
                                    <hr/>
                                    <div className='from-group'>
                                        <lable className="mb-1">Full Name</lable>
                                        <input type="" className="form-control" placeholder='Your Name'/>
                                    </div>
                                    <div className='from-group'>
                                        <lable className="mb-1">E-mail</lable>
                                        <input type="" className="form-control" placeholder='Your Email'/>
                                    </div>
                                    <div className='from-group'>
                                        <lable className="mb-1">Phone Number</lable>
                                        <input type="" className="form-control" placeholder='Your Name'/>
                                    </div>
                                    <div className='from-group'>
                                        <lable className="mb-1">Message</lable>
                                        <textarea row="3" className="form-control"  placeholder='Your details message' ></textarea>
                                    </div>
                                    <div className='from-group py-3'>
                                        <button className='btn btn-primary shadow w-100'>Sent your message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                        <h5 className='main-heading'>Adress Information</h5>
                                        <div className='under-line'>
                                        </div>
                                        <p>
                                            BoroMIA mosjid,chawkbazar,chittagong
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;