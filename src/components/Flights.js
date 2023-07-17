import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { FlightsCard } from "./FlightsCard"


export const Flights = () => {

    const cards = [
        {
            flightNo: 1,
            timeDeparture: "18:10:00",
            timeArrival: "20:00:00",
            flightFrom: "Delhi",
            flightTo: "Hyderabad",
            flightFare: 743
        },
        {
            flightNo: 2,
            timeDeparture: "13:10:00",
            timeArrival: "14:50:00",
            flightFrom: "Pune",
            flightTo: "Chennai",
            flightFare: 6435
        },
        {
            flightNo: 3,
            timeDeparture: "09:30:00",
            timeArrival: "11:30:00",
            flightFrom: "Varanasi",
            flightTo: "Mumbai",
            flightFare: 7865
        },
        {
            flightNo: 4,
            timeDeparture: "12:12:10",
            timeArrival: "22:22:22",
            flightFrom: "DEL",
            flightTo: "HYD",
            flightFare: 123
        },
        {
            flightNo: 1,
            timeDeparture: "18:10:00",
            timeArrival: "20:00:00",
            flightFrom: "Delhi",
            flightTo: "Hyderabad",
            flightFare: 743
        },
        {
            flightNo: 2,
            timeDeparture: "13:10:00",
            timeArrival: "14:50:00",
            flightFrom: "Pune",
            flightTo: "Chennai",
            flightFare: 6435
        },
        {
            flightNo: 3,
            timeDeparture: "09:30:00",
            timeArrival: "11:30:00",
            flightFrom: "Varanasi",
            flightTo: "Mumbai",
            flightFare: 7865
        },
        {
            flightNo: 4,
            timeDeparture: "12:12:10",
            timeArrival: "22:22:22",
            flightFrom: "DEL",
            flightTo: "HYD",
            flightFare: 123
        },
        {
            flightNo: 1,
            timeDeparture: "18:10:00",
            timeArrival: "20:00:00",
            flightFrom: "Delhi",
            flightTo: "Hyderabad",
            flightFare: 743
        },
        {
            flightNo: 2,
            timeDeparture: "13:10:00",
            timeArrival: "14:50:00",
            flightFrom: "Pune",
            flightTo: "Chennai",
            flightFare: 6435
        },
        {
            flightNo: 3,
            timeDeparture: "09:30:00",
            timeArrival: "11:30:00",
            flightFrom: "Varanasi",
            flightTo: "Mumbai",
            flightFare: 7865
        },
        {
            flightNo: 4,
            timeDeparture: "12:12:10",
            timeArrival: "22:22:22",
            flightFrom: "DEL",
            flightTo: "HYD",
            flightFare: 123
        }
    ]




    const [list, setList] = useState([]);

    /*  useEffect(() => {
          fetch('http://localhost:8082/all')
          .then(res => res.json())
          .then((result) => {
              setList(result);
              console.log(result);
          })
      })*/

    return (
        <div className="m-2 px-4">
            <li>{
                cards.map((flight, index) => {
                    return (
                        <FlightsCard
                            key={index}
                            {...flight}
                        />
                    )
                })
            }
            </li>
        </div>


    )
}