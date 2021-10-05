import React from 'react';
import './About.css'
import logo from '../../images/teacher1.jfif'
import logo2 from '../../images/teacher2.jfif'


const About = () => {
    return (
        <div>
            {/* about section strat here */}
            <h1 className="leader-title">LeaderShips</h1>
            <div className="about-container">
                <div>
                    <img src={logo} alt="" />
                    <h3>Dr Toma</h3>
                    <h4>Founder</h4>
                </div>
                <div>
                    <img src={logo2} alt="" />
                    <h3>Dr Isfa</h3>
                    <h4>HeadMaster</h4>
                </div>
                
                
            </div>

            {/* service area start here */}
            <div>
                <div className="services-area">
                    <div>
                        <h1>85 Buses</h1>
                        <p>Free Transportation</p>
                    </div>
                    <div>
                        <h1>Parmanent Campus</h1>
                        <p>2 Acres of Own Land</p>
                    </div>
                </div>
                
            </div>
        </div>


    );
};

export default About;