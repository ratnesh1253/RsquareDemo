import React from "react";
import gmap from "../../assets/gmap.PNG";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Map() {
  return (
    <>
      <div className="m-10 p-10 shadow-2xl flex">
        <div>
          <h5 className="text-xl font-bold mb-6">Contact Us</h5>
          <div className="space-y-3 mb-6">
            <p className="flex items-center  ">
              <LocationOnIcon />
              <p className="ms-5 max-w-100">
                Office #, 2nd Floor, The Woods Commercial, Wakad, Pune-411057
              </p>
            </p>
            <p className="flex items-center">
              <CallIcon /> <p className="ms-5">(555) 123-4567</p>
            </p>
            <p className="flex items-center">
              <MailIcon />
              <p className="ms-5">info@rsquaresoft.com</p>
            </p>
            <div className="flex gap-10 text-black">
              <a
                href="https://facebook.com/"
                className=" hover:text-blue-400 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com"
                className="hover:text-blue-400 transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/rsquaresoft/"
                className="hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-blue-400 transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4210941100114!2d73.77660447496496!3d18.600120282508932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9116d94f3b3%3A0x4bb43bac520d9523!2sThe%20Woods!5e0!3m2!1sen!2sin!4v1738068008786!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
      </div>
    </>
  );
}
