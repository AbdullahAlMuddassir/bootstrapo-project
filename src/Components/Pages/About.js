import React from 'react';
import Vms from './inct/Vms';

const About = () => {
    return (
        <div>
            <section className="py-4 bg-info">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 my-auto'>
                        <h6>About Us</h6>
                    </div>
                    <div className='col-md-8 my-auto'>
                        <h6 className="float-end">Home /About</h6>
                    </div>
                </div>
            </div>
            </section>

            <section className='section bg-c-light border-bottom'>
                <div className='container'>
                    < h5 className='main-heading'>Our Company</h5>
                    <div className='under-line text-center'></div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak 
                    </p>
                </div>
            </section>
            <Vms></Vms>
        </div>
    );
};

export default About;