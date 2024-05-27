import { FlightsCard } from "./FlightsCard";
import InputField from "./InputField";
import Google from "../assets/google.svg"
import Apple from "../assets/apple.svg";
import Facebook from "../assets/facebook_blue.svg"
import flightCart from '../assets/flight_cart.svg'
import CreditCard from '../assets/18/creditcard.svg'
import GooglePay from '../assets/18/google_blue.png'
import ApplePay from '../assets/18/apple_blue.png'
import Paypal from '../assets/18/paypal.svg'
import Bitcoin from '../assets/18/bitcoin.svg'

export const PaymentMethodPage = () => {
    return (
        <>
            <div className="contianer flex m-12 p-8 text-gray-500">
                <div className="w-[60%]  m-12 p-4">
                    <div className="text-xl text-[#605dec] ">Payment Method</div>
                    <div className="text-lg py-4">Select a payment method below. Tripma processes your payment securely with end-to-end encryption.</div>

                    {/*Payment tab */}
                    <div className="gird grid-cols-5 flex outline outline-1 outline-[#605dec] w-[70%] rounded-md justify-between">
                        <button class="flex items-center space-x-2 px-4 py-2  rounded  ">

                            <span>   <img src={CreditCard} /></span>

                            <span>Credit Card</span>
                        </button>
                        <button class="flex items-center space-x-2 px-4 py-2  rounded  ">

                            <span>   <img src={GooglePay} /></span>

                            <span>Google Pay</span>
                        </button>
                        <button class="flex items-center space-x-2 px-4 py-2  rounded  ">

                            <span>   <img src={ApplePay} /></span>

                            <span>Apple pay</span>
                        </button>
                        <button class="flex items-center space-x-2 px-4 py-2  rounded  ">

                            <span>   <img src={Paypal} /></span>

                            <span>Paypal</span>
                        </button>
                        <button class="flex items-center space-x-2 px-4 py-2  rounded  ">

                            <span>   <img src={Bitcoin} /></span>

                            <span>Crypto</span>
                        </button>


                    </div>

                    <h1 className=" py-4"> Credit card details</h1>

                    <h2 className="py-4"> Billing address is same as Passenger 1</h2>

                    <div className="py-4 gap-4 w-[60%]">
                        <InputField
                            placeholder="Name on card" />


                    </div>
                    <div className="py-4 gap-4 w-[60%]">
                        <InputField
                            placeholder="Card number" />


                    </div>
                    <div className="py-4 grid lg:grid-cols-2 gap-4 w-[60%]">
                        <InputField
                            placeholder="Expiration date" />
                        <InputField
                            placeholder="CVV" />

                    </div>

                    <div className="py-4">
                        <h1 className="">Create an account</h1>

                        <div className="text-lg py-4">Tripma is free to use as a guest, but if you create an account today, you can save and view flights, manage your trips, earn rewards, and more.</div>

                        <div className="py-4 flex">
                            <InputField type="checkbox" />
                            <div className="px-4 text-md">Save card and create account for later</div>
                        </div>

                        <div className="py-4 gap-4 w-[60%]">
                            <InputField
                                placeholder="Email address or phone number" />
                        </div>
                        <div className="py-4 gap-4 w-[60%]">
                            <InputField
                                placeholder="Password" type="password" />
                        </div>

                        <div className="py-4 gap-4 text-[#605dec] text-center text-md w-[60%]">
                            <div className="py-2 px-4 outline outline-1 outline-[#605dec]  rounded-sm my-4">
                                <button className='bg-white w-[250px] rounded-md  font-light flex items-center'><span className="flex"><img src={Google} /></span>Continue with Google</button>
                            </div>
                            <div className="py-2 px-4 outline outline-1 outline-[#605dec]  rounded-sm my-4">
                                <button className='bg-white w-[250px] rounded-md  font-light      '><span className="flex"><img src={Apple} /></span>Continue with Apple</button>
                            </div>
                            <div className="py-2 px-4 outline outline-1 outline-[#605dec]  rounded-sm my-4">
                                <button className='bg-white w-[250px] rounded-md font-light   '><span className="flex"><img src={Facebook} /></span>Continue with Facebook</button>
                            </div>

                        </div>

                        <div className="py-4">
                            <h1 className="">Cancellation policy</h1>
                            <p className="text-md">
                                This flight has a flexible cancellation policy. If you cancel or change your flight up to 30 days before the departure date, you are eligible for a free refund. All flights booked on Tripma are backed by our satisfaction guarantee, however cancellation policies vary by airline. See the full cancellation policy for this flight.
                            </p>
                        </div>

                        <div className="flex">
                            <button className="p-4 outline outline-1 outline-[#605dec] text-lg text-[#605dec] rounded-md">Back to seat select</button>
                            <button className="ml-4 p-4 text-lg text-gray-500 bg-gray-300 outline outline-1 outline-grey-500">Confirm and pay</button>
                        </div>





                    </div>

                </div>
                <div className="w-40% m-12 p-4">
                    <div className="mt-24 right-0">
                        Flight Infomation
                        <img className='my-6 ml-12' src={flightCart} alt='' />

                    </div>

                </div>
            </div>
        </>
    )
}
export default PaymentMethodPage;