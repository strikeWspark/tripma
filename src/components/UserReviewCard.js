import full_star from '../assets/full_star.svg';
import holo_star from '../assets/holo_star.svg';


const UserReviewCard = ({imageUrl, name, place, date, review}) => {
    return (
        <div className="w-full   flex flex-col  my-4">
            <div className='flex'>
            <img className="w-[75px] h-[75px] rounded-[50px]" src={imageUrl} alt="icon" />
            <div className="block">

            <h4 className='text-md text-gray-700 font-light px-4 py-2'>{name}</h4>
                            <h5 className='text-md text-gray-700 font-light px-4'>{place}| {date}</h5>
                            <div className='flex py-2 px-4 h-8'>
                            <img src={full_star}/><img src={full_star}/><img src={full_star}/><img src={holo_star}/><img src={holo_star}/>
                            
                            </div>
                             <p className='ext-sm font-light text-gray-700 px-4 mb-4'>{review} <span className='text-[#605dec]'>read more..</span></p>
                       
            
            </div>
            </div>
         
            


        </div>
    )
}
export default UserReviewCard;