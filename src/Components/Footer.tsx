import ContactUsForm from "./ContactUsForm";

const Footer =()=>{
    return(
        <>
        <footer className="w-full h-170 bg-blue-300 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:divide-x divide-gray-300">

                {/* Left Column */}
                <div className="md:w-1/2 md:pr-8 flex items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center md:text-left">
                            EVERSTRIDE
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Here I need some inforamation from customer so that I can add.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2  md:ml-5 md:pl-8 mt-8 md:mt-0 flex justify-center items-center">
                    <ContactUsForm/>
                </div>
            </div>

        </footer>
        
        </>
    )
}

export default Footer;