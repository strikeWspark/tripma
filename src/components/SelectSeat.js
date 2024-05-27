import ArrowRight from "../assets/Arrow_Right.svg"
import EconomySeats from "../assets/Economy_Seats.svg"
import BusinessSeats from "../assets/Business_Seats.png"
import Circle from "../assets/Ellipse.svg"
import CheckMark from "../assets/Checkmark.svg"
import Plane from "../assets/Plane.png"

export const SelectSeat = () => {
    return (
        <>
            <div className="flex">
                <div className="w-[50%] ">
                    <img src={Plane} alt="Plane" />
                </div>
                <div className="nav w-[50%] overflow-auto">
                    <div className="grid lg:grid-cols-2  bg-[#27273F] text-[#FAFAFA]">
                        <div className="flex">
                            <div className="text-lg p-4">SFO
                                <div className="text-sm">California, US</div>
                            </div>

                            <div className="text-lg p-4">
                                <img src={ArrowRight} alt="Arrow" />

                            </div>

                            <div className="text-lg p-4">NRT
                                <div className="text-sm">Tokyo, Japan</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-md p-4 bg-[#605DEC]">Feb 25 | 7:00AM
                                <div className="text-sm">Departing</div>
                            </div>

                            <div className="text-md p-4">Mar 21 | 12:15PM
                                <div className="text-sm">Arriving</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full grid-cols-2 mt-8 overflow-auto">
                        {/* Economy Seats */}
                        <div className="text-lg text-grey-700">
                            <img src={EconomySeats} alt="Economy Seats" />
                            <div className="p-4">Economy <span className="bg-[#605DEC] text-white px-2">Selected</span></div>

                            <div className="p-4">
                                Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service
                            </div>
                            <div className="bg-[#B0AEF6] w-12 h-3 px-4 mb-4"></div>

                            <ul className="m-4 p-4">
                                <li className="flex"><img className="p-2" src={Circle} />Built-in entertainment system</li>
                                <li className="flex"><img className="p-2" src={Circle} />Complimentary snacks and drinks</li>
                                <li className="flex"><img className="p-2" src={Circle} />One free carry-on and personal item</li>
                            </ul>
                        </div>
                        {/* Business Seats */}
                        <div className="text-lg text-grey-700">
                            <img src={BusinessSeats} alt="Business Seats" />
                            <div className="p-4 text-lg text-grey-700">Business Class</div>

                            <div className="p-4">
                                Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service
                            </div>
                            <div className="bg-[#ADEBE0] w-12 h-3 px-4 mb-4"></div>

                            <ul className="m-4 p-4">
                                <li className="flex"><img className="p-2" src={CheckMark} />Extended leg room</li>
                                <li className="flex"><img className="p-2" src={CheckMark} />First two checked bags free</li>
                                <li className="flex"><img className="p-2" src={CheckMark} />Priority boarding</li>
                                <li className="flex"><img className="p-2" src={CheckMark} />Personalized service</li>
                                <li className="flex"><img className="p-2" src={CheckMark} />Enhanced food and drink service</li>
                                <li className="flex"><img className="p-2" src={CheckMark} />Seats that recline 40% more than economy</li>
                            </ul>
                        </div>
                    </div>


                    {/* Footer content for Seat Select */}


                    <footer class="bg-[#FAFAFE] text-white py-4">
                        <div class="container mx-auto px-4">
                            <div class="grid grid-cols-3">
                                <div>
                                    <div className="text-md text-[#7C8DB0]">Passenger 1</div>
                                    <div className="text-lg text-[#6E7491]">Sofia Knowles</div>
                                </div>
                                <div>
                                    <div className="text-md text-[#7C8DB0]">Seat Number </div>
                                    <div className="text-lg text-[#6E7491]">9F</div>
                                </div>
                                <div className="flex">
                                    <button className="p-4 border border-[#605dec] text-lg text-[#605dec] round-md">Save and close</button>
                                    <button className="ml-4 p-4 text-lg text-white bg-[#605dec] border border-gray-500">Next Flight</button>
                                </div>

                            </div>
                        </div>
                    </footer>








                </div>



            </div>
        </>
    )
}

export default SelectSeat;