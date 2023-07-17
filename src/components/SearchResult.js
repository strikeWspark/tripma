import { useState } from "react";
import { MdFlightTakeoff } from 'react-icons/md'
import { Flights } from "./Flights";
import { InputField } from "./InputField";
import map from '../assets/world_map.svg'

import PriceGrid from '../assets/price_grid.png';
import PriceHistory from '../assets/price _history.png';
import FilterChips from "./FilterChips";



const SearchResult = () => {

    const formInitialDetails = {
        from: '',
        to: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [active, setActive] = useState('');
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
        setActive("");
    }

    const chips = [{name:"Max Price"}, {name:"Shops"}, {name:"Times"}, {name:"Airlines"}, {name:"Seat Class"}, {name:"More"}];
    return (
        <div className={false?"hidden":""}>
        <div className='w-full py-16 bg-white px-4'>


            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

                <div className='md:col-span-5 my-4 '>
                    <form className='flex flex-col sm:flex-row items-center  w-full'>

                        <InputField
                            placeholder="From Where?"
                            type="text"
                            onChange={(e) => onFormUpdate('from', e.target.value)}
                        />
                        <InputField

                            placeholder="Where to?"
                            type="text"
                            onChange={(e) => onFormUpdate('to', e.target.value)}
                        />
                        <InputField

                            placeholder="Depart-Return"
                            type="text"
                        />
                        <InputField

                            placeholder="1 Adult"
                            type="number"
                        />
                        <button type="submit" className='bg-[#605dec] text-white rounded-md font-medium w-[100px]  my-6 px-6 py-3'>Search</button>
                    </form>


                    <div className="flex">

                        {
                            chips.map((c, index) => (
                                <FilterChips
                                    key={index}
                                    {...c} />

                            )

                            )
                        }

                    </div>
                </div>



                <div className='lg:col-span-2 my-4 '>
                    <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-gray-700 md:pl-4 pl-2 px-4 mx-auto">Choose a <span className="text-[#605dec]">departing</span> flight</h1>
                    <div className="h-[410px] m-4 border border-[#d2d2e9] rounded-lg overflow-y-auto">
                        <ul>
                            <Flights />
                        </ul>

                    </div>
                    <button className="text-[#605dec] border  border-[#605dec]  rounded-lg m-4 p-4">Show All Flights</button>

                </div>
                <div className='my-4'>
                    <div className='items-center justify-center w-full mx-4'>
                        <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-gray-700 md:pl-4 pl-2 px-4 mx-auto">Price gird (flexible dates)</h1>
                        <img className="p-4" src={PriceGrid} alt="" />

                    </div>

                    <div className='items-center justify-between w-full mx-4 my-4'>
                        <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-gray-700 md:pl-4 pl-2 px-4 mx-auto">Price history</h1>
                        <img className="p-4" src={PriceHistory} />

                    </div>


                </div>

            </div>


        </div>


        <div className='w-full  bg-white px-4'>


            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

                <div className='lg:col-span-2 my-4 '>
                    <img src={PriceGrid} />

                </div>
                <div className='my-4'>
                    <div className='items-center justify-center w-full mx-4'>
                        <h1 className="md:text-2xl sm:text-xl text-lg  text-gray-700 md:pl-4 pl-2 px-4 mx-auto">Price rating <span className="bg-[#70DBC7] text-white p-1 rounded-lg">Buy Soon</span></h1>
                        <p className="font-[16px] text-gray-500 md:pl-4 py-2 pl-2 px-4 mx-auto">We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.</p>
                        <p className="font-[16px]  text-gray-400 md:pl-4 pl-2 px-4 mx-auto">Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.</p>


                    </div>

                </div>

            </div>


        </div>
    </div>

    )
}
export default SearchResult;