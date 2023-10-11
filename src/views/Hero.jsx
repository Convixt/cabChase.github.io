import heroPatternRight from "../assets/hero-pattern-right.svg";
import heroPatternLeft from "../assets/hero-pattern-left.svg";
import busIcon from "../assets/bus-icon.svg";
import locationIcon from "../assets/location-icon.svg";


import { LabelInput, PrimaryButton } from "../components";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="bg-lightest-gray relative">
        <div className="max-w-[1368px] px-8 mx-auto min-h-[444px]">
          <h1 className="head_text pt-28 text-center">
            Find your <span className="green_text">cab</span>
          </h1>
          <h4 className="text-subtitle-gray text-center font-raleway text-xl pb-14">
          Cabs at Your Fingertips.
          </h4>
        </div>
        <img 
        src={heroPatternRight}
        alt=""
        className="hidden md:block absolute right-0 bottom-0"
        />
        <img 
        src={heroPatternLeft}
        alt=""
        className="hidden md:block absolute left-0 bottom-0"
        />

      </div>

      <div className="max-w-[1368px] px-8 mx-auto">
        <div className="relative bg-white px-10 sm:px-[76px] py-9 sm:py-[70px] mt-5 sm:-mt-[166px]
        min-h-[330px] shadow=lg  rounded-xl flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5">
            <LabelInput label="Vehicle Type" placeholder="Select Car Group"  icon={busIcon}/>
            <LabelInput  label="Picking Up Location" placeholder="Airport or anywhere"  icon={locationIcon} />
            <LabelInput  label="Dropping Location" placeholder="Drop Location "  icon={locationIcon} />

            </div>
           
            <PrimaryButton classname="w-full lg:w-2/3 mx-0 lg:mx-auto" small={false}>Find Your Cab</PrimaryButton>

      
        </div>
      </div>
    </div>
  )
    
  
};

export default Hero;
