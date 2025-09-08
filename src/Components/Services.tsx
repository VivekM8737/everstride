import backgroundImage from '../assets/servicesImages/backgoundImage.jpg';
export default function Services() {
    return (
        <>
            <section
                className="relative w-full h-120 py-20 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                ...
            </section>
            <div>
                {/* Core Areas */}
                    <h2 className="text-3xl my-4 bg-blue-100 font-semibold text-center text-blue-900 mb-12">
                        What We Do
                    </h2>
                <div className="px-6 md:px-20">

                    <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-900 mb-6  text-center">
                        <h3 className="text-2xl text-center font-bold mb-4 text-blue-800">Advisory</h3>
                        
                            <p className="text-gray-700   text-m mb-1">
                                •	Partner with companies to design sports-driven growth strategies
                            </p>
                            <p className="text-gray-700 text-m mb-1">
                                •	Focus on creating value and driving innovation through sports
                            </p>
                            <p className="text-gray-700 text-m mb-1">
                                •	Serve as a long-term growth partner, not just a short-term consultant

                            </p>
                        

                    </div>


                    <div className="bg-white text-center shadow-lg rounded-xl p-6 border-t-4 border-blue-900 mb-6">
                        <h3 className="text-2xl  font-bold mb-4 text-blue-800">Community Programs & Events
                        </h3>
                        <p className="text-gray-700 text-m mb-1">
                            •	Design and execute grassroots initiatives that connect with local communities

                        </p>
                        <p className="text-gray-700 text-m mb-1">
                            •	Run corporate sports events that build stronger teams and energize employees

                        </p>

                    </div>

                    <div className="bg-white  text-center  shadow-lg rounded-xl p-6 border-t-4 border-blue-900 mb-6">
                        <h3 className="text-2xl font-bold mb-4 text-blue-800">Legal Services</h3>
                        <p className="text-gray-700 text-m mb-1">
                            •	Draft and review contracts, sponsorships and partnerships
                        </p>
                        <p className="text-gray-700 text-m mb-1">
                            •	Safeguard IP, image rights, and commercial agreements
                        </p>
                        <p className="text-gray-700 text-m mb-1">
                            •	Support risk management and dispute resolution

                        </p>



                    </div>

                </div>
            </div>
        </>
    )
}