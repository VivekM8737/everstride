export default function About() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-30 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          We work to give athletes, companies and communities the tools they need to grow through sport.
        </p>
      </div>

      {/* Core Areas */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">
          Our Core Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-900">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Talent Management</h3>
            <p className="text-gray-700 text-sm">
              We identify, nurture and represent promising athletes, giving them structured 
              roadmaps for performance, branding and sponsorships.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-900">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Strategic Consulting</h3>
            <p className="text-gray-700 text-sm">
              We help corporates, foundations and organizations design and run sports-led 
              initiatives that build culture, create impact and connect with communities.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-900">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Legal Services</h3>
            <p className="text-gray-700 text-sm">
              We bring in-depth legal expertise to sports, from contract management 
              and image rights to compliance and dispute resolution.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-blue-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          What Makes Us Different
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-center text-lg leading-relaxed">
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
        <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          Our vision is simple: to be the trusted bridge between athletes, companies and 
          communities. We want to unlock opportunities, create value and help Indian 
          sport reach its full potential, one stride at a time.
        </p>
      </div>
    </section>
  );
}
