import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ContactSection =()=>{
    return(
        <div className="bg-blue-500 text-white border-5 border-green-100 rounded-lg shadow-full p-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6  text-center text-green-400">Lets Create Together</h1>
          <p className="text-xl md:text-2xl   text-center mb-8">
          Connect with us to explore how we can make your vision a reality. Join us in IT of the future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <LocalPhoneOutlinedIcon className="w-6 h-6 mr-3" />
              <div>
                <a href='/contact-us/' className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">Contact Us<ArrowRightAltIcon className="w-4 h-4 ml-2" /></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    )
};

export default ContactSection;