


export const FindAdventureCard = ({imageUrl,city,place,description,price}) => {
        return (

                <div className="w-full shadow-xl border flex flex-col  my-4 rounded-lg hover:scale-105 duration-300">
                        <img className="w-[450px] h-[440px] rounded-lg"src={imageUrl} alt="icon" />
                        <div className="flex justify-between">
                        <h3 className="text-lg text-gray-500 font-light px-4 py-2">{place}, <span className="text-[#605dec]">{city}</span></h3>
                        <h3 className="text-lg text-gray-500 font-light px-4 py-2">{price}</h3>
                        </div>
                        
                        <p className="text-sm font-light text-gray-400 px-4 mb-4">{description}</p>
                        
                        
                         </div>

        )
}