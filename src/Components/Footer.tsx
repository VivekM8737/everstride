import ContactUsForm from "./ContactUsForm";
import SocialIcons from "./Socialicons";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-blue-300 py-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:divide-x divide-gray-300">

                    {/* Left Column */}
                    <div className="md:w-1/2 md:pr-8 flex justify-center items-center">
                        <div>
                            {/* Brand Info */}
                            <h2 className="text-2xl font-bold mb-4"> Everstride Sports & Talent Management Pvt Ltd</h2>
                        

                            {/* Contact Info */}
                            <div className="mt-6">
                                <p className="text-sm">✉️ admin@everstride.in</p>
                                <p className="text-sm">📍 503, MVL iPark, Chander Nagar, Sector 15, Gurugram, Haryana 122001</p>
                                <div className="flex space-x-4 mt-4">
                                    <SocialIcons />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/2  md:ml-5 md:pl-8 mt-8 md:mt-0 flex justify-center items-center">
                        <ContactUsForm />
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer;