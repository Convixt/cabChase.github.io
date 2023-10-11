import logo from "../assets/logo.png";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import youtubeIcon from "../assets/facebook-icon.svg";

const Footer = () => {
  return(
    <div className="py-36">
      <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between gap-12">
        <div>
          <img src={logo} alt="" className="mx-auto h-[444px] lg:mx-0" />
          <p className="text-light-gray my-7 text-center lg:text-start">
          POPULAR CITIES AGRA | AHMEDABAD | AHMEDNAGAR | AJMER | ALIGARH | ALLAHABAD | ALMORA | ALWAR | AMBALA | AMBERNATH | AMRAVATI | AMRITSAR | ANAND | ANANTAPUR | ANJUNA |
          </p>

          <div className="flex items-center gap-[18px] justify-center lg:justify-start">
            <img src={facebookIcon} alt="" className="cursor-pointer" />
            <img src={twitterIcon} alt="" className="cursor-pointer" />
            <img src={instagramIcon} alt="" className="cursor-pointer" />
            <img src={linkedinIcon} alt="" className="cursor-pointer" />
            <img src={youtubeIcon} alt="" className="cursor-pointer" />
          </div>

          <p className="mt-10 flex flex-col">&copy; CabChase 2023. All rights reserved.</p>

          
        </div>

      </div>
    </div>
  )
};

export default Footer;
