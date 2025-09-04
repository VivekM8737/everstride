import headerImage1 from "../assets/homeImages/headerImage1.jpg";
import headerImage2 from "../assets/homeImages/headerImage2.jpg";
import headerImage3 from "../assets/homeImages/headerImage3.jpg";
import { useState, useEffect } from "react";
const Home = () => {
    const images = [headerImage1, headerImage2, headerImage3];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // 4 seconds
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
            <section className="w-full h-120 overflow-hidden relative">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`w-full h-120 object-cover absolute top-0 left-0 transition-opacity duration-3000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </section>

            <section className="bg-white py-12 px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:divide-x divide-gray-300">

                    {/* Left Column */}
                    <div className="md:w-1/2 md:pr-8 flex items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center md:text-left">
                                EVERSTRIDE
                            </h2>
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
        </>
    )
}

export default Home;