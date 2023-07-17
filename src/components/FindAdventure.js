import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"

import { FindAdventureCard } from "./FindAdventureCard"
import img1 from '../assets/image.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
export const FindAdventure = () => {

    const cards = [

        {
            imageUrl: img1,
            city: "Shanghai",
            place: "The Bund",
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

    /* useEffect(() =>  {
         fetch('http://localhost:8082/')
         .then(res => res.json())
         .then((result) => {
             setList(result);
             console.log(result);
         })
     },[])*/

    return (



        <div className="w-full py-[2rem] px-4 bg-white" id="hotels">
            <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-gray-500 md:pl-4 pl-2 px-4 mx-auto">Find your next adventure with these <span className="text-[#605dec] font-bold">flight deals</span></h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 justify-center">
                {cards.map((card, index) => {
                    return (
                        <FindAdventureCard
                            key={index}
                            {...card}
                        />
                    )
                })
                }

            </div>

            <div className="w-full]  shadow-xl justify-center m-4 border bg-white rounded-lg">
                <img className="w-full  h-[350px] rounded-xl" src={img4} alt="" />
                <div className="flex justify-between">
                        <h3 className="text-lg text-gray-500 font-light px-4 py-2">Tsavo East National Park, <span className="text-[#605dec]">Kenya</span></h3>
                        <h3 className="text-lg text-gray-500 font-light px-4 py-2">$1268</h3>
                        </div>
                <p className="text-sm font-light text-gray-400 px-4 mb-4">Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.</p>


            </div>
        </div>
    )
}