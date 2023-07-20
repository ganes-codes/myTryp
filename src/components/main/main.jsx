import React from "react";
import './main.css';
import images from '../../Assets/img (1).jpg';
import images from '../../Assets/img (2).jpg';
import images from '../../Assets/img (3).jpg';
import images from '../../Assets/img (4).jpg';
import images from '../../Assets/img (5).jpg';
import images from '../../Assets/img (6).jpg';
import images from '../../Assets/img (7).jpg';
import images from '../../Assets/img (8).jpg';
import images from '../../Assets/img (9).jpg';
import images from '../../Assets/img (10).jpg';
import images from '../../Assets/img (11).jpg';
import images from '../../Assets/img (12).jpg';
import images from '../../Assets/img (13).jpg';
import images from '../../Assets/img (14).jpg';
import images from '../../Assets/img (15).jpg';
import images from '../../Assets/img (16).jpg';
import images from '../../Assets/img (17).jpg';
import images from '../../Assets/img (18).jpg';
import images from '../../Assets/img (19).jpg';
import images from '../../Assets/img (20).jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from "aos";
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        imgSrc: 'location1.jpg',
        location: 'Paris, France',
        title: 'Eiffel Tower Tour',
        fees: '$30',
        description: 'Visit the iconic Eiffel Tower and enjoy breathtaking views of Paris from the top.'
    },
    {
        id: 2,
        imgSrc: 'location2.jpg',
        location: 'Rome, Italy',
        title: 'Colosseum Guided Tour',
        fees: '$25',
        description: 'Explore the ancient Roman Colosseum with an expert guide and learn about its history.'
    },
    {
        id: 3,
        imgSrc: 'location3.jpg',
        location: 'Kyoto, Japan',
        title: 'Arashiyama Bamboo Grove',
        fees: '$10',
        description: 'Stroll through the serene Arashiyama Bamboo Grove and experience the tranquility of nature.'
    },
    {
        id: 4,
        imgSrc: 'location4.jpg',
        location: 'New York City, USA',
        title: 'Statue of Liberty Tour',
        fees: '$35',
        description: 'Take a ferry to Liberty Island and see the iconic Statue of Liberty up close.'
    },
    {
        id: 5,
        imgSrc: 'location5.jpg',
        location: 'Cairo, Egypt',
        title: 'Pyramids of Giza Tour',
        fees: '$40',
        description: 'Discover the ancient pyramids and Sphinx, symbols of Egypt’s ancient civilization.'
    },
    {
        id: 6,
        imgSrc: 'location6.jpg',
        location: 'Sydney, Australia',
        title: 'Sydney Opera House Visit',
        fees: '$20',
        description: 'Tour the famous Sydney Opera House and learn about its unique architecture.'
    },
    {
        id: 7,
        imgSrc: 'location7.jpg',
        location: 'Barcelona, Spain',
        title: 'Sagrada Familia Tour',
        fees: '$28',
        description: 'Explore the stunning Sagrada Familia basilica, designed by Antoni Gaudí.'
    },
    {
        id: 8,
        imgSrc: 'location8.jpg',
        location: 'Cape Town, South Africa',
        title: 'Table Mountain Hike',
        fees: '$15',
        description: 'Hike up Table Mountain and enjoy panoramic views of Cape Town and the surrounding coastline.'
    },
    {
        id: 9,
        imgSrc: 'location9.jpg',
        location: 'Tokyo, Japan',
        title: 'Shibuya Crossing Experience',
        fees: '$5',
        description: 'Witness the famous Shibuya Crossing, one of the busiest pedestrian crossings in the world.'
    },
    {
        id: 10,
        imgSrc: 'location10.jpg',
        location: 'Venice, Italy',
        title: 'Gondola Ride',
        fees: '$50',
        description: 'Take a romantic gondola ride through the picturesque canals of Venice.'
    },
    {
        id: 11,
        imgSrc: 'location11.jpg',
        location: 'Rio de Janeiro, Brazil',
        title: 'Christ the Redeemer Visit',
        fees: '$22',
        description: 'Visit the iconic Christ the Redeemer statue and enjoy stunning views of Rio de Janeiro.'
    },
    {
        id: 12,
        imgSrc: 'location12.jpg',
        location: 'Athens, Greece',
        title: 'Acropolis Tour',
        fees: '$18',
        description: 'Explore the ancient Acropolis and its historic monuments, including the Parthenon.'
    },
    {
        id: 13,
        imgSrc: 'location13.jpg',
        location: 'Bali, Indonesia',
        title: 'Ubud Monkey Forest Adventure',
        fees: '$12',
        description: 'Embark on an adventure in the Ubud Monkey Forest, home to playful macaques.'
    },
    {
        id: 14,
        imgSrc: 'location14.jpg',
        location: 'London, England',
        title: 'British Museum Tour',
        fees: '$15',
        description: 'Discover a vast collection of art and artifacts from around the world at the British Museum.'
    },
    {
        id: 15,
        imgSrc: 'location15.jpg',
        location: 'Machu Picchu, Peru',
        title: 'Machu Picchu Expedition',
        fees: '$60',
        description: 'Embark on a journey to the ancient Incan citadel of Machu Picchu and witness its majestic beauty.'
    },
    {
        id: 16,
        imgSrc: 'location16.jpg',
        location: 'Amsterdam, Netherlands',
        title: 'Van Gogh Museum Visit',
        fees: '$20',
        description: 'Explore the Van Gogh Museum and admire the works of the legendary painter Vincent van Gogh.'
    },
    {
        id: 17,
        imgSrc: 'location17.jpg',
        location: 'San Francisco, USA',
        title: 'Golden Gate Bridge Walk',
        fees: '$8',
        description: 'Take a leisurely walk or bike ride across the iconic Golden Gate Bridge.'
    },
    {
        id: 18,
        imgSrc: 'location18.jpg',
        location: 'Cusco, Peru',
        title: 'Rainbow Mountain Trek',
        fees: '$45',
        description: 'Embark on a challenging trek to Rainbow Mountain and witness its vibrant colors.'
    },
    {
        id: 19,
        imgSrc: 'location19.jpg',
        location: 'Dubai, UAE',
        title: 'Burj Khalifa Observation Deck',
        fees: '$40',
        description: 'Experience breathtaking views of Dubai from the observation deck of the tallest building in the world.'
    },
    {
        id: 20,
        imgSrc: 'location20.jpg',
        location: 'Berlin, Germany',
        title: 'Berlin Wall Memorial Tour',
        fees: '$10',
        description: 'Learn about the history of the Berlin Wall and its impact on the city.'
    },
];




const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited locations
                </h3>
            </div>
            <div className="secContent grid">
                {/* here I am going to high ordfer array method (map) */}
                {
                    data.map((id, imgSrc, destTitle, fees, title) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">
                                            {title}
                                        </span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        Flex <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main