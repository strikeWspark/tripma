import { useState } from "react";
import { MdFlightTakeoff } from 'react-icons/md'
import { Flights } from "./Flights";
import { InputField } from "./InputField";
import map from '../assets/world_map.svg'

import PriceGrid from '../assets/price_grid.png';
import PriceHistory from '../assets/price _history.png';
import FilterChips from "./FilterChips";
import SearchResult from "./SearchResult";

export const SearchFlight = () => {

    const formInitialDetails = {
        from: '',
        to: ''
    }

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormDetails(formDetails);
        console.log(formDetails);
        setActive("active");
        handleNav();
    }

    const chips = ["Max Price", "Shops", "Times", "Airlines", "Seat Class", "More"];


    return (
        <section className="search-flights" id="flights">
            <div className={nav ? "" : "hidden"}>
                <div className="text-black bg-[url('./assets/world_map.svg')]">
                    <div className='max-w-[1240px] mt-[50px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 bg-gradient-to-r from-[#4e87fd] to-[#8d59fd] text-transparent bg-clip-text'>It's more than</h1>
                        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 bg-gradient-to-r from-[#4e87fd] to-[#8d59fd] text-transparent bg-clip-text'>just a trip.</h1>


                        <div className='w-full py-16  px-4'>
                            <div className=' mx-auto grid lg:grid-cols-5 md:grid-cols-2'>

                                <div className='md:col-span-12 my-4'>
                                    <form className='flex flex-col sm:flex-row items-center justify-center w-full' onClick={handleSubmit}>

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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={nav ? "hidden" : ""}>
                <SearchResult />

            </div>





        </section>

    )
}