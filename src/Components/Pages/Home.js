import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import Services from './inct/Services';
import Vms from './inct/Vms';
import service1 from '../imges/serviec/jublu.png';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="under-line mx-auto"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            </p>
                            <Link to="/about" className='btn btn-warning shadow'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Vms></Vms>
            <Services></Services>
        </div>
    );
};

export default Home;