import React, { useEffect } from "react";
import './footer.css';
import { FiSend } from './react-icons/fi';
import { MdOutlineTravelExplore } from './react-icons/md';
import { AiOutlineTwitter } from './react-icons/ai';
import { FaTripAdvisor } from './react-icons/fa';
import { AiFillYoutube } from './react-icons/ai';
import { AiFillInstagram } from './react-icons/ai';
import { FiChevronRight } from './react-icons/fi';
import Aos from "aos";
import 'aos/dist/aos.css';


const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} muted loop autoplay type="video/mp4"></video>
            </div>
            <div className="setContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Keep In Touch</small>
                        <h2>Travel With US</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="flex" type="submit">
                            SEND<FiSend className="icon" />
                        </button>
                    </div>
                    <div className="footerCard flex">
                        <div className="footerInter flex">
                            <div className="logoDiv">
                                <a href="#" className="logo flex">
                                    <MdOutlineTravelExplore className="icon" /> Travel.
                                </a>
                            </div>
                            <div data-aos="fade-up" className="footerParagraph">
                                "Explore the World with myTryp"
                                "Embark on Your Next Adventure with myTryp"
                                "Discover Unforgettable Destinations with myTryp"
                                "Travel Made Easy with myTryp"
                                "Your Passport to Adventure - myTryp"
                                "Unlock the Wonders of the World with myTryp"
                                "Travel Smarter, Explore Further - myTryp"
                                "Your Ultimate Travel Companion - myTryp"
                                "Wherever You Go, myTryp Goes with You"
                                "Start Your Journey Today with myTryp"
                                "Connecting Travelers to the Globe - myTryp"
                                "Your Gateway to Global Adventures - myTryp"
                                "Seamless Travel Planning with myTryp"
                                "Making Travel Dreams a Reality - myTryp"
                                "Travel. Explore. Repeat. - myTryp"
                                "Unleash the Wanderlust in You with myTryp"
                                "Plan, Book, and Go with myTryp"
                                "Your Personalized Travel Experience Awaits - myTryp"
                                "Embrace the World with myTryp"
                                "Empowering Travelers Everywhere - myTryp"
                                "Where Will You Go Next? - myTryp"
                                "Turning Dreams into Journeys - myTryp"
                                "Discover the Extraordinary with myTryp"
                                "Your Ticket to Adventure - myTryp"
                                "Let myTryp Be Your Guide"
                                "Adventures Await - Download myTryp Now"
                            </div>
                            <div className="footerSocials">
                                <AiOutlineTwitter className="icon" />
                                <AiFillInstagram className="icon" />
                                <AiFillYoutube className="icon" />
                                <FaTripAdvisor className="icon" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="footerDiv flex">
                        <small>Best Travel Website</small>
                        <small>CopyRights Reserved</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer