import React , {useEffect} from "react";
import './Home.css';
import video from '../../Assets/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFaceBook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripAdvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb';
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <section className="home">
            <div className="overlay">
                <video src={video} muted autoPlay loop type="video/mp4">
                    <div className="homeContent Container">
                        <div className="textDiv">
                            <span data-aos="fade-up" className="smallText">
                                Our Packages
                            </span>
                            <h1 data-aos="fade-up" className="homeTitle" >
                                Search Your Holiday
                            </h1>
                        </div>
                        <div className="cardDiv grid" data-aos="fade-up">
                            <div className="destinationOutput">
                                <label htmlFor="city">Search Your Destination:</label>
                                <div className="input flex">
                                    <input type="text" placeholder="Enter name here...">
                                        <GrLocation className="icon" />
                                    </input>
                                </div>
                            </div>
                            <div className="dateInput">
                                <label htmlFor="date">Search Your Date:</label>
                                <div className="input flex">
                                    <input type="date" placeholder="Enter name here...">
                                        <GrLocation className="icon" />
                                    </input>
                                </div>
                            </div>
                            <div className="destinationOutput">
                                <div className="label_total flex">
                                    <label htmlFor="price">Max Price:</label>
                                    <h3 className="total">$5000</h3>
                                </div>
                                <div className="input flex">
                                    <input type="range" max="5000" min="1000"></input>
                                </div>
                            </div>
                            <div className="SearchOptions flex">
                                <HiFilter className="icon"/>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="homeFooterIcons flex">
                            <div className="rightIcons">
                                <FiFaceBook className="icon" />
                                <AiOutlineInstagram className="icon" />
                                <SiTripAdvisor className="icon" />
                            </div>
                            <div className="leftIcons">
                                <BsListTask className="icon"/>
                                <TbApps className="icon"/>
                            </div>
                        </div>
                    </div>
                </video>
            </div>
        </section>
    )
}

export default Home