export default function About() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-30 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Us</h1>
        <p className="max-w-5xl mx-auto text-lg text-center">
          At Everstride, we manage and develop promising athletes and advise companies, foundations and organizations on how to grow through sport. Our work spans both sides of the sporting ecosystem helping talent build structured careers and enabling organizations to create innovative strategies that deliver real impact.
        </p>
        <p className="max-w-5xl mx-auto text-lg text-center mt-4">
          We bring together talent management, strategic advisory, community and corporate sports programs, and specialized legal support ensuring that every initiative we design is practical, professional, and future-ready.

        </p>
      </div>
      

      {/* What Makes Us Different */}
      <div className="bg-blue-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          What Makes Us Different
        </h2>
        <p className="max-w-5xl mx-auto text-gray-700 text-center text-lg leading-relaxed">
          Our ability to provide truly end-to-end solutions sets us apart.
          From scouting athletes and negotiating contracts to running corporate tournaments
          and grassroots programs, we bring together sports know-how, strong legal backing
          and a pan-India network. Every project is designed to be effective,
          transparent and future-focused.
        </p>
      </div>

      {/* Vision */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">Our Vision</h2>
        <p className="max-w-5xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          Our vision is simple: to be the trusted bridge between athletes, companies and
          communities. We want to unlock opportunities, create value and help Indian
          sport reach its full potential, one stride at a time.
        </p>
      </div>
    </section>
  );
}
