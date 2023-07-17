

export const ExploreUniqueCards = ({ imageUrl,venue, country, description }) => {
    return (
        <div className="w-full shadow-xl border flex flex-col  my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-[450px] h-[390px] lg:w-[450px] lg:h[440px] rounded-lg" src={imageUrl} alt="icon" />
            <h3 className="text-md text-gray-500 font-light px-4 py-2">{venue} <span className="text-[#3dccb2]">{country}</span></h3>
            <p className="text-sm font-light text-gray-400 px-4 mb-4">{description}</p>


        </div>
    )
}