import logo from './logo.svg';

import { NavBar } from './components/NavBar';
import { SearchFlight } from './components/SearchFlight';
import { FindAdventure } from './components/FindAdventure';
import { ExploreUnique } from './components/ExploreUnique';
import { Footer } from './components/Footer';
import { UsersReview } from './components/UsersReview';
import { SignIn } from './components/SignIn';
import { PassengerInformation } from './components/PassengerInformation';
import { SelectSeat } from './components/SelectSeat';
import { PaymentMethodPage } from './components/PaymentMethodPage';
import FlightBookingComformation from './components/FlightBookingConformation';
import SearchResult from './components/SearchResult';
import { DialogDefault } from './components/DialogDefault';

function App() {
  return (
    <>
    <NavBar/>
    
    {/*<DialogDefault/>*/}
  
    <SearchFlight/>
    <FindAdventure/>
    <ExploreUnique/>
    <UsersReview />
    <SearchResult/>
    <PassengerInformation/>
    <SelectSeat/>
    <PaymentMethodPage/>
    <FlightBookingComformation/>
    <SignIn/>
    <Footer />
    {/* 
    
    <PassengerInformation/>
    
    <SignIn/>
    <FindAdventure/>
    <ExploreUnique/>
    <UsersReview />
    <Footer /> */}
    
    </>
    
  
  );
}

export default App;
