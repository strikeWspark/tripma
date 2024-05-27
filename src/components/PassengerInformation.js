import InputField from "./InputField"
import bags from '../assets/bags.svg'
import flightCart from '../assets/flight_cart.svg'

export const PassengerInformation = () => {
    return (
        <>

            <div className=" w-[100%] py-16 px-28 grid lg:grid-cols-2 gap-8 text-gray-500 mt-12">
                <div className="">
                    <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-[#605dec] md:pl-4 pl-2 px-4 mx-auto">Passenger Information</h1>
                    <p className='text-sm font-light text-gray-500 px-4 my-4'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>

                    <p className="text-lg font-bold text-gray-500 px-4 my-4 ">Passenger 1 (Adult)</p>
                    <div className="py-4 px-4 grid lg:grid-cols-3 gap-4">
                        <InputField 
                        placeholder="First name*"/>
                        <InputField 
                        placeholder="Middle"/>
                        <InputField 
                        placeholder="Last name*"/>
                    </div>
                    <div className="py-4 px-4 gap-8 flex">
                        <InputField 
                        placeholder="Suffix"/>
                        <InputField 
                        placeholder="Date of birth*"/>

                    </div>
                    <div className="py-4 px-4 grid lg:grid-cols-2 gap-4">
                        <InputField 
                        placeholder="Email address*"/>
                        <InputField 
                        placeholder="Phone number*"/>

                    </div>
                    <div className="py-4 px-4 grid lg:grid-cols-2 gap-4">
                        <InputField 
                        placeholder="Redress number"/>
                        <InputField 
                        placeholder="Known traveller number"/>

                    </div>

                    <p className="text-lg font-bold text-gray-500 px-4 my-4 ">Emergency contact information</p>
                    <div className="py-4 px-4 grid lg:grid-cols-2 gap-4">
                        <InputField 
                        placeholder="First name*"/>
                        <InputField 
                        placeholder="Last name*"/>

                    </div>
                    <div className="py-4 px-4 grid lg:grid-cols-2 gap-4">
                        <InputField 
                        placeholder="Email address*"/>
                        <InputField 
                        placeholder="Phone number*"/>

                    </div>

                </div>
                <div className="mt-24 right-0">
                    Flight Infomation
                    <img className='my-6 ml-12' src={flightCart} alt='' />

                </div>
            </div>

            <div className="w-[100%] py-16 px-28 grid lg:grid-cols-2 gap-8 text-gray-500 mt-4">
                <div>
                    <p className="text-lg font-bold text-gray-500 px-4 my-4 ">Bag information</p>
                    <p className='text-sm font-light text-gray-500 px-4 my-4'>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the <span className="text-[#605dec]">full bag policy.</span></p>

                    <div className="text-lg font-bold text-gray-500 px-4 my-4 grid grid-cols-2 gap-8 ">
                        <div>
                            <p className="text-lg font-bold text-gray-500 my-4 ">Passenger 1</p>
                            <p className="text-lg font-bold text-gray-500 my-2 ">John Soros</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-gray-500  my-4 ">Checked Bags</p>
                            <p className="text-lg font-bold text-gray-500  my-4 justify-between"><span className="px-2 bg-[#e5e5e5] text-xl font-bold text-[#605dec]">-</span>1<span className="px-2 bg-[#e5e5e5] text-xl font-bold text-[#605dec]">+</span></p>

                        </div>

                    </div>
                    <div className="flex">
                        <button className="p-4 border border-[#605dec] text-lg text-[#605dec] shadow-lg">Save and close</button>
                        <button className="ml-4 p-4 text-lg text-gray-400 bg-gray-300 border border-gray-500">Select Seats</button>
                    </div>
                </div>
                <img className='ml-12' src={bags} alt='' />

            </div>
        </>
    )
}