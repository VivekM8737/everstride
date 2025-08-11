
const TalentManagement = () => {
    const descriptions = [
        {
            title:
                "Systematic scouting & onboarding of youth prospects in badminton, women’s cricket, and Olympic disciplines.",
            explanation:
                "Identifying and recruiting talented young athletes in key sports, ensuring they are guided into professional development programs from the start."
        },
        {
            title:
                "Personalized career & performance planning, mentorship, and holistic athlete development.",
            explanation:
                "Offering tailored training schedules, career advice, and mentorship to help athletes achieve peak performance and long-term success."
        },
        {
            title:
                "Family & community support for well-being and long-term growth.",
            explanation:
                "Providing guidance and resources for families to support athletes emotionally, mentally, and socially throughout their careers."
        },
        {
            title:
                "Legal Advisory: Contract, compliance, and image rights.",
            explanation:
                "Ensuring athletes have proper legal protection, fair contracts, and control over how their image and brand are used."
        }
    ];
    return (
        <>
            <section className=" ">
                <section className="px-6 py-12 bg-white">


                    <div className="text-center mb-12">
                        <h2 className="text-6xl font-bold mb-4">Talent Management at Everstride</h2>
                        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                            At Everstride, we are dedicated to{" "}
                            <span className="font-semibold">identifying, nurturing, and elevating</span>{" "}
                            the next generation of sporting excellence. Our athlete development program spans multiple disciplines,
                            focusing on both emerging talent and seasoned performers to help them reach their highest potential.
                        </p>
                    </div>
                </section>
                <section className="bg-white py-12 px-6 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {descriptions.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-teal-300 rounded-lg shadow-md overflow-hidden"
                            >
                                {/* Background Box */}
                                <div className="bg-teal-500 h-10"></div>

                                {/* Foreground Card */}
                                <div className="p-6">
                                    <p className="font-semibold text-lg">{item.title}</p>
                                    <p className="text-gray-600 mt-2 text-sm">{item.explanation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )

}
export default TalentManagement;