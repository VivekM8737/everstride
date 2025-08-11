import { useState } from "react";
import StrategicConsulting from "./StrategicConsulting";
import TalentManagement from "./TalentManagment";

import headerImage from "../assets/servicesImages/lineupImage.jpg"

const Lineup = () => {
  const [activeSection, setActiveSection] = useState<"talent" | "strategic">("talent");

  return (
    <>
      {/* Header Image */}
      <section className="w-full h-110">
        <img
          src={headerImage}
          alt="headerImage"
          className="w-full max-w-none object-cover h-110"
        />
      </section>

      {/* Navigation */}
      <section className="bg-white py-12">
        <div className="flex flex-col md:flex-row md:divide-x divide-gray-300">
          {/* Talent Management Link */}
          <button
            onClick={() => setActiveSection("talent")}
            className={`md:w-1/2 md:pr-8 flex justify-center items-center h-30 m-1 transition-colors duration-300 
              ${activeSection === "talent" ? "bg-gray-200" : "bg-gray-400 hover:bg-gray-400"}`}
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
              Talent Management
            </h2>
          </button>

          {/* Strategic Consulting Link */}
          <button
            onClick={() => setActiveSection("strategic")}
            className={`md:w-1/2 md:pl-8 flex justify-center items-center h-30 m-1 transition-colors duration-300 
              ${activeSection === "strategic" ? "bg-gray-200" : "bg-gray-400 hover:bg-gray-400"}`}
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
