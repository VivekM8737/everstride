
import StrategicConsulting from "./StrategicConsulting";
import TalentManagement from "./TalentManagment";
import lineupImage1 from "../assets/servicesImages/lineupImage1.jpg"
import lineupImage2 from "../assets/servicesImages/lineupImage2.jpg";
import lineupImage3 from "../assets/servicesImages/lineupImage3.jpg";
import { useState, useEffect } from "react";

const Lineup = () => {
    const [activeSection, setActiveSection] = useState<"talent" | "strategic">("talent");
    const images = [lineupImage1, lineupImage2, lineupImage3];
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
            {/* Header Image */}
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

            {/* Navigation */}
            <section className="bg-white py-3">
                <div
                    className={`flex ${activeSection === "strategic"
                            
                            ? "flex-col md:flex-row"
                            : "flex-col-reverse md:flex-row"
                        } md:divide-x divide-gray-300`}
                >
                    {/* Talent Management Link */}
                    <button
                        onClick={() => setActiveSection("talent")}
                        className={`md:w-1/2 md:pr-8 flex justify-center items-center h-30 m-1 transition-colors duration-300 
        ${activeSection === "talent" ? "bg-gray-400" : "bg-gray-200 hover:bg-gray-400"}`}
                    >
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
                            Talent Management
                        </h2>
                    </button>

                    {/* Strategic Consulting Link */}
                    <button
                        onClick={() => setActiveSection("strategic")}
                        className={`md:w-1/2 md:pl-8 flex justify-center items-center h-30 m-1 transition-colors duration-300 
        ${activeSection === "strategic" ? "bg-gray-400" : "bg-gray-200 hover:bg-gray-400"}`}
                    >
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
                            Strategic Consulting
                        </h2>
                    </button>
                </div>
            </section>

            {/* Content Section */}
            {activeSection === "talent" ? <TalentManagement /> : <StrategicConsulting />}
        </>
    );
};

export default Lineup;
