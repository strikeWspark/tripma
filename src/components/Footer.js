import logo from '../assets/tripma_logo.svg'
import appStore from '../assets/app_store.svg'
import playStore from '../assets/google_play.svg'
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';

import {AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter} from 'react-icons/ai';


export const Footer = () => {
    return (
        <>



            <div className=" w-[100%] py-16 px-28 grid lg:grid-cols-3 gap-8 text-gray-500">
                <div>
                    <img src={logo} />
                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>

                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className="font-medium text-gray-600" >About</h6>
                        <ul>
                            <li className='py-2 text-sm'>About Tripma</li>
                            <li className='py-2 text-sm'>How it works</li>
                            <li className='py-2 text-sm'>Careers</li>
                            <li className='py-2 text-sm'>Press</li>
                            <li className='py-2 text-sm'>Blog</li>
                            <li className='py-2 text-sm'>Forum</li>
                        </ul>


                    </div>
                    <div className="footer-card">
                        <h6 className="font-medium text-gray-600" >Partner with us</h6>
                        <ul>
                            <li className='py-2 text-sm'>Partnership programs</li>
                            <li className='py-2 text-sm'>Affiliate Program</li>
                            <li className='py-2 text-sm'>Connectivity partners</li>
                            <li className='py-2 text-sm'>Promotions and events</li>
                            <li className='py-2 text-sm'>Integerations</li>
                            <li className='py-2 text-sm'>Community</li>
                            <li className='py-2 text-sm'>Loyalty program</li>


                        </ul>


                    </div>
                    <div className="footer-card">
                        <h6 className="font-medium text-gray-600" >Support</h6>
                        <ul>
                            <li className='py-2 text-sm'>Help Center</li>
                            <li className='py-2 text-sm'>Contact us</li>
                            <li className='py-2 text-sm'>Privacy policy</li>
                            <li className='py-2 text-sm'>Terms of service</li>
                            <li className='py-2 text-sm'>Trust and safety</li>
                            <li className='py-2 text-sm'>Accessibility</li>
                        </ul>


                    </div>
                    <div className="footer-card">
                        <h6 className="font-medium text-gray-600">Get the app</h6>
                        <ul>
                            <li className="py-2 text-sm">Tripma for Android</li>
                            <li className="py-2 text-sm">Tripma for iOS</li>
                            <li className="py-2 text-sm">Mobile Site</li>
                            <li className="py-2 sm:w-auto"><img src={appStore}/></li>
                            <li className="py-2 sm:w-auto"><img src={playStore}/></li>
                            
                        </ul>

                    </div>

                </div>
                

            </div>

            <div className='flex justify-between border-t my-4 py-4'>
                <div className='flex px-4 mx-2'>
                    <img className="px-2"src={twitter}/>
                    <img className="px-2"src={instagram}/>
                    <img className="px-2"src={facebook}/>

                
                </div>
                <h2 className='text-end text-gray-500 px-8'>2023 Tripma Incorporated</h2>
                    
                </div>
        </>
    )
}