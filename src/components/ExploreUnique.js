import { useEffect, useState } from "react"
import { ExploreUniqueCards } from "./ExploreUniqueCards"
import img1 from '../assets/image5.png';
import img2 from '../assets/image6.png';
import img3 from '../assets/image7.png';

export const ExploreUnique = () => {

    const cards = [
        {
            imageUrl: img1,
            venue: "Stay among the atolls in ",
            country: "Maldives",
            description: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
        },
        {
            imageUrl: img2,
            venue: "Experience the Ourika Valley in ",
            country: "Morocco",
            description: "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
        },
        {
            imageUrl: img3,
            venue: "Live traditionally in ",
            country: "Mongolia",
            description: "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
        }
    ]
    const [list,setList] = useState([]);

  /*  useEffect(() =>  {
        fetch('http://localhost:8082/explore-unique')
        .then(res => res.json())
        .then((result) => {
            setList(result);
            console.log(result);
        })
    },[])*/
    return (

        <div className="w-full py-12 px-4 bg-white" id="packages">
            <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-gray-500 md:pl-4 pl-2 px-4 mx-auto">Explore unique  <span className="text-[#3dccb2] font-bold">places to stay</span></h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 justify-center">
                {cards.map((card, index) => {
                    return (
                        <ExploreUniqueCards
                            key={index}
                            {...card}
                        />
                    )
                })
                }

            </div>
            <div className="py-8 px-4 text-center">
            <button className='bg-[#605dec] w-[250px] rounded-md shadow-xl font-light my-6  ml-1 mx-auto px-6 py-3 text-white '>Explore More Stays</button>
            </div>
            
        </div>
    )
}