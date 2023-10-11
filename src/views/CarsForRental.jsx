import carOne from "../assets/carOne.webp";
import carTwo from "../assets/carTwo.jpg";
import carThree from "../assets/carThree.jpg";
import { CarCard } from "../components";

const CarsForRental = () => {
  return (
    <div className="pt-36">
        <div className="wrappper">
          <h1 className="head_text mb-9 text-center">
            Cabs for <span className="green_text">booking</span>
          </h1>


          <div className="flex flex-col md:flex-row gap-20 md:gap-5">
            <CarCard carName = " Swift Dzire" imageSrc= {carOne} />
            <CarCard carName = "Ford " imageSrc= {carTwo} />
            <CarCard carName = "Fortuner" imageSrc= {carThree} />
           
          </div>
        </div>
    </div>
  )
};

export default CarsForRental;
