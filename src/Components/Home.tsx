// import headerImage1 from "../assets/homeImages/headerImage1.jpg";
// import headerImage2 from "../assets/homeImages/headerImage2.jpg";
// import headerImage3 from "../assets/homeImages/headerImage3.jpg";
// import { useState, useEffect } from "react";
const Home = () => {
    // const images = [headerImage1, headerImage2, headerImage3];


    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 4000); // 4 seconds
    //     return () => clearInterval(interval);
    // }, [images.length]);
    return (
        <>
            {/* <section className="w-full h-120 overflow-hidden relative">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`w-full h-120 object-cover absolute top-0 left-0 transition-opacity duration-3000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </section> */}

            <section className="bg-white py-30 px-6 md:px-16">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
                    EVERSTRIDE
                </h2>
                <div className=" mx-auto flex flex-col md:flex-row md:divide-x divide-gray-300">

                    {/* Left Column */}
                    <div className="md:w-1/2 md:pr-8 flex items-center">
                        <div>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                Everstride is an innovative sports consultancy helping athletes grow, companies build impact, and organizations bring professionalism into sport.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-justify mt-4">
                                Through athlete management, corporate sports events, and legal advisory, we deliver end-to-end solutions that make Indian sport more structured, transparent and future-ready.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex items-center">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            To achieve this, we work together with the best athletes and world-class partners.{" "}
                            <span className="font-semibold text-blue-900">
                                Together we are #TeamEverstride.
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-blue-100  py-1 px-6 md:px-16">
                <div className="py-8 px-6 md:px-20">
                    <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">
                        Areas of Expertise
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-900">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Strategic Consulting</h3>
                            <p className="text-gray-700 text-m mb-1">
                                We help corporates, foundations and organizations design and run sports-led
                                initiatives that build culture, create impact and connect with communities.
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Growth Advisory
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Global Partnerships
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Legal & Compliance Advisory
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	CSR Strategy & Impact
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Corporate Sports Events
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                • Community Programs
                            </p>

                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-900">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Talent Management</h3>
                            <p className="text-gray-700 text-m mb-1">
                                We identify, nurture and represent promising athletes, giving them structured
                                roadmaps for performance, branding and sponsorships.
                            </p>

                            <p className="text-gray-700 text-sm mb-1">
                                •	Carrier Roadmap
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Sponsorships & Endorsements
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Legal Protection (contracts, rights)
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Training & Wellness Support
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Brand Development
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                                •	Scouting & Identification
                            </p>
                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}

export default Home;