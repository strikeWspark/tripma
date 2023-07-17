import { Col, Row } from 'react-bootstrap';
import full_star from '../assets/full_star.svg';
import holo_star from '../assets/holo_star.svg';
import UserReviewCard from './UserReviewCard';
export const UsersReview = () => {

    const cards = [
        {
            imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Fionna Hake",
            place: "Seatle, United States",
            date: "May 2023",
            review: "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me"
        },
        {
            imageUrl:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Cris Johnson",
            place : "Toronto, Canada",
            date: "May 2023",
            review : "This is a review of my stay at location where I had a great time. I would definitely recommend using Tripma for your next flight booking. It was easy and seamless. When we had an issue, Tripma support was there to help"
        },
        {
            imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Snop Dogg",
            place: "London, United Kingdom",
            date: "May 2023",
            review : "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for "
        }
    ];
    return (

        <div className="w-full py-4 px-4 bg-white">
            <h2 className='text-center font-bold text-3xl py-4'>What <span className='text-[#605dec]'>Tripma</span> users are saying</h2>



            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 justify-center">
            {cards.map((card, index) => {
                    return (
                        <UserReviewCard
                            key={index}
                            {...card}
                        />
                    )
                })
                }

            </div>
        </div>
    )
}