import logo from './logo.svg';

import { NavBar } from './components/NavBar';
import { SearchFlight } from './components/SearchFlight';
import { FindAdventure } from './components/FindAdventure';
import { ExploreUnique } from './components/ExploreUnique';
import { Footer } from './components/Footer';
import { UsersReview } from './components/UsersReview';

function App() {
  return (
    <>
    <NavBar/>
    <SearchFlight/>
    
    <FindAdventure/>
    <ExploreUnique/>
    <UsersReview />
    <Footer /> 
    </>
    
  
  );
}

export default App;
