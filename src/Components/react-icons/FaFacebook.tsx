import facebookIcon from "../../assets/logo/facebook.png"
import instagramIcon from "../../assets/logo/instagram.png"
import linkedinIcon from "../../assets/logo/linkedin.png"
import twitter from "../../assets/logo/twitter.png"
import youtubeIcon from "../../assets/logo/youtube.png"
import emailIcon from "../../assets/logo/email.png"
const FaFacebookF= ()=>{
    return(
        <>
            <div className="fa w-8">
                <a href="https://www.facebook.com">
                    <img src={facebookIcon} alt="facebooke"  className=" w-8 hover:border-3 hover:border-blue-500 transition-all duration-200 rounded"/>

                </a>

            </div>
        </>
    )
}

const FaInstagram = ()=>{
     return(
        <>
            <div className="fa w-8">
                <a href="https://www.instagram.com"> 
                    <img src={instagramIcon} alt="instagram" className=" w-8 hover:border-3 hover:border-blue-500 transition-all duration-200 rounded"/>

                </a>

            </div>
        </>
     )
}
const FaLinkedinIn = ()=>{
     return(
        <>
            <div className="fa w-8">
                <a href="https://www.facebook.com"> 
                    <img src={linkedinIcon} alt="linkedIn" className=" w-8 hover:border-3 hover:border-blue-500 transition-all duration-200 rounded"/>

                </a>

            </div>
        </>
     )
}
const FaTwitter = ()=>{
     return(
        <>
            <div className="fa w-8">
                <a href="https://www.facebook.com"> 
                    <img src={twitter} alt="twitter" className=" w-8 hover:border-3 hover:border-blue-500 transition-all duration-200 rounded" />

                </a>

            </div>
        </>
     )
}
const FaYoutube = ()=>{
     return(
        <>
            <div className="fa w-8">
                <a href="https://www.facebook.com"> 
                    <img src={youtubeIcon} alt="youtube" className=" w-8 hover:border-3 hover:border-blue-500 transition-all duration-200 rounded"/>

                </a>

            </div>
        </>
     )
}
const FaEmail = ()=>{
     return(
        <>
            <div className="fa w-8">
                <a href="https://www.facebook.com"> 
                    <img src={emailIcon} alt="email" className=" w-8 hover:border-3 hover:border-blue-500 transition-all duration-200 rounded"/>

                </a>

            </div>
        </>
     )
}

export {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter,FaYoutube, FaEmail};