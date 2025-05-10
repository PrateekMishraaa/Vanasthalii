import React from 'react';
import Navbar from '../Components/Navbar';
import Video from "../assets/wildlife.mp4";
import Banner from "../assets/banner.webp";
import BannerOne from "../assets/room1.webp"
import BannerTwo from "../assets/room2.webp"
import BannerThree from "../assets/room3.webp"
const HomePage = () => {
    const accommodation =[
        {
            image: BannerOne
        },
          {
            image: BannerTwo
        },
        {
            image: BannerThree
        },
        
    ]
  return (
    <>
      <Navbar />

      {/* Hero Video Section */}
      <section className="h-[76vh] w-full">
        <video
          src={Video}
          controls
          loop
          autoPlay
          muted
          className="h-full w-full object-cover"
        ></video>
      </section>

      {/* Welcome Section */}
      <section className="min-h-[50vh] w-full bg-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold font-sans">
              WELCOME TO <br />
              <span className="text-red-700">RIVERSIDE LUXURY RESORT</span>
            </h2>
            <hr className="h-1 w-40 bg-red-700 border-0" />
            <p className="text-base font-medium">
              Vanasthali Jungle Resort Jim Corbett, Ramnagar offers air-conditioned rooms with
              modern amenities, free WiFi, and a restaurant. Located 1.5 km from the main road
              amidst the jungle, it’s near a seasonal river and 46 km from Pantnagar Airport.
              Guests can enjoy cycling, a playground, and a continental breakfast.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img src={Banner} alt="Resort Banner" className="w-full h-auto max-h-96 rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="h-[60vh] w-full   flex items-center justify-center">
        <p className=" text-black text-3xl font-bold">ACCOMMODATION</p>
        <div className='h-full w-full flex justify-between '>
            {
                accommodation.map((item ,index)=>(
                    <div key={index}>
                        <img src={item.image} alt="" />
                    </div>
                ))
            }
        </div>
      </section>
    </>
  );
};

export default HomePage;
