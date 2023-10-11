import { Navigation } from "./components";
import {  Routes , Route , useLocation} from "react-router-dom";

import {
  CarsForRental,
  Contact,
  FAQ,
  Hero,
  Posts,
  Pricing,
  RentingProcess,
  Services,
  Testimonials,
  Footer,
} from "./views";

function App() {
  return (
    <>
    
      { <Navigation /> }
      {<Hero /> }
      { <RentingProcess /> }
      { <CarsForRental /> }
      {/* <Testimonials /> */}
      {/* <Pricing /> */ }
      { <Services /> }
      { <FAQ /> }
      {/* <Posts /> */}
      { <Contact /> }
      {<Footer /> }
    </>
  );
}

export default App;
