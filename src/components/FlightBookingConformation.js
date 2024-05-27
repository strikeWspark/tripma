import { useState } from 'react';
import Airline from '../assets/airline.png';
import { FindAdventure } from './FindAdventure';
import { FindAdventureCard } from './FindAdventureCard';
import { FlightsCard } from './FlightsCard';
import img1 from '../assets/image8.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import { ShopHotelsCard } from './ShopHotelsCard';

export const FlightBookingComformation = () => {
    const cards = [

        {
            imageUrl: img1,
            place: "Rocky Japan",
            description: "China's most international city",
            price: "$598"
        },
        {
            imageUrl: img2,
            city: "Sydney",
            place: "Sydney Opera House",
            description: "Take a stroll along the famous habour",
            price: "$661"
        },
        {
            imageUrl: img3,
            city: "Kyoto",
            place: "Kōdaiji Temple",
            description: "Step back in time in the Gion district",
            price: "$983"
        }
    ]

    const [list, setList] = useState([]);

    return (
        <>
            <div className="container m-12 p-8 flex text-gray-500">
                <div className="w-[60%] m-12 p-4">
                    <div className="p-4 text-center bg-[#EAFFFB] outline outline-1 outline-[#007B65] rounded-md">
                        <h2 className="text-md text-[#007B65]">Your flight has been booked successfully! Your conformation number is #381029404387</h2>
                    </div>
                    <div className=" pt-8 py-4 text-xl font-bold text-[#605dec] ">Bon voyage, Sophia!</div>
                    <div className="text-lg font-light text-gray-700">Conformation number: #381029404387</div>
                    <div className="text-md py-4">Thank you for booking your travel with Tripma! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in <span className="text-[#605dec]">My trips.</span> </div>

                    <h1 className="py-4 text-lg text-grey-700">Flight Summary</h1>
                    <h2 className="py-4 text-md">Departing February 25th, 2024</h2>

                    <FlightsCard />
                    <p className='py-4'>Seat 9F (economy, window), 1 checked bag</p>

                    <h1 className='py-4'>Arriving March 21st, 2024</h1>
                    <FlightsCard />
                    <p className='py-4'>Seat 4F (business, window), 1 checked bag</p>

                    <h1 className='py-4 text-lg'>Price breakdown</h1>

                    <div className='w-[50%]'>
                        <div className='py-2 flex justify-between font-light'>
                            <p className=''>Departing Flight</p>
                            <p className=''>$251.50</p>
                        </div>
                        <div className='py-2 flex justify-between font-light'>
                            <p className=''>Arriving Flight</p>
                            <p className=''>$251.50</p>
                        </div>
                        <div className='py-2 flex justify-between font-light'>
                            <p className=''>Baggage fees</p>
                            <p className=''>$0</p>
                        </div>
                        <div className='py-2 flex justify-between font-light'>
                            <p className=''>Seat Upgrade(business)</p>
                            <p className=''>$199</p>
                        </div>
                        <div className='py-2 flex justify-between font-light'>
                            <p className=''>Subtotal</p>
                            <p className=''>$702</p>
                        </div>
                        <div className='py-2 flex justify-between font-light'>
                            <p className=''>Taxes (9.4%)</p>
                            <p className=''>$66</p>
                        </div>
                        <div className='py-2 border-b border-[#d2d2e9]' />
                        <div className='py-2 flex text-grey-700 justify-between'>
                            <p className=''>Amount paid</p>
                            <p className=''>$768</p>
                        </div>
                        <div className=' border-b border-[#d2d2e9]' />
                    </div>

                </div>
                <div className="w-[40%] m-12 p-4">
                <div className=" text-xl font-bold  ">Shop <span className='text-[#605dec]'>hotels!</span> </div>
                <div className="text-md py-4">Tripma partners with thousands of hotels to get you the best deal. Save up to 30% when you add a hotel to your trip.</div>

                <div className='py-4'>
                {cards.map((card, index) => {
                    return (
                        <ShopHotelsCard 
                            key={index}
                            {...card}
                        />
                    )
                })
                }
                </div>

                </div>
            </div>
        </>
    )
}

export default FlightBookingComformation;