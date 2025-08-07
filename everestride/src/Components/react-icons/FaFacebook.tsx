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
                    <img src={facebookIcon} alt="facebooke" />

                </a>

            </div>
        </>
    )
}

const FaInstagram = ()=>{
     return(
        <>
            <div className="fa w-8">
                <a href="https://www.facebook.com"> 
                    <img src={instagramIcon} alt="instagram" />

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
                    <img src={linkedinIcon} alt="linkedIn" />

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
                    <img src={twitter} alt="twitter" />

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
                    <img src={youtubeIcon} alt="youtube" />

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
                    <img src={emailIcon} alt="email" />

                </a>

            </div>
        </>
     )
}

export {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter,FaYoutube, FaEmail};