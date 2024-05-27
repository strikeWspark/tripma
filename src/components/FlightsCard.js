import airline from '../assets/airline.png'

export const FlightsCard = ({flightNo,timeDeparture,timeArrival,flightFrom,flightTo,flightFare}) => {
    return (
        <div className="grid grid-cols-5 m-4  px-4 border-b border-[#d2d2e9]">
            <img src={airline} alt='icon'/>
            <div className="font-medium md:pl-4 pl-2 px-4 mx-auto">
                <h1 className="">{flightNo}</h1>
                <h4 className="font-light text-gray-500">{timeDeparture}</h4>
            </div>
            <h1 className=" font-bold md:pl-4 pl-2 px-4 mx-auto">{timeArrival}</h1>
            <div className="font-medium md:pl-4 pl-2 px-4 mx-auto">
                <h1>{flightFrom}</h1>
                <h4 className="font-light text-gray-500">{flightTo}</h4>
            </div>
            <div className="font-bold  md:pl-4 pl-2 px-4 mx-auto">
                <h1>{flightFare}</h1>
                <h4 className="font-light text-gray-500">Airline</h4>
            </div>
        </div>
    )
}