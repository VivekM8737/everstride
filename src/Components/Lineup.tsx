
const Lineup = () => {
    const headerImage ="https://res.cloudinary.com/dx5zqc2fc/image/upload/v1754824937/header1_q3bnz2.jpg";
    const sports = [
        {
            title: "Badminton Rising Stars",
            desc: "Cultivating young and emerging players ready to make their mark on the court.",
            img: "https://res.cloudinary.com/dx5zqc2fc/image/upload/v1754825083/pexels-ron-lach-10669594_bpvjsg.jpg",
            alt: "Badminton Rising Stars",
        },
        {
            title: "Women’s Cricket Pathway",
            desc: "From grassroots beginnings to international representation, empowering female cricketers at every stage.",
            img: "https://res.cloudinary.com/dx5zqc2fc/image/upload/v1754825202/pexels-inderjeet-kashyap-101154808-9393464_duwnpe.jpg",
            alt: "Women’s Cricket Pathway",
        },
        {
            title: "Olympic Sport Champions",
            desc: "Supporting athletes across athletics, swimming, squash, tennis, and golf in their pursuit of global success.",
            img: "https://res.cloudinary.com/dx5zqc2fc/image/upload/v1754825358/pexels-ajaybhargavguduru-863988_zpmbvc.jpg",
            alt: "Olympic Sport Champions",
        },
        {
            title: "Kabaddi Contenders",
            desc: "Guiding dynamic players in one of India’s most exciting and fast-growing sports.",
            img: "https://res.cloudinary.com/dx5zqc2fc/image/upload/v1754825919/kabaddi_zevv3v.png",
            alt: "Kabaddi Contenders",
        },
    ];

    return (
        <>
            <section className="w-full h-170">
                <img src={headerImage} alt="headerImage" className="w-full max-w-none object-cover h-170" />
            </section>
            <section className="px-6 py-12 bg-white">
                {/* Introduction Row */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Talent Management at Everstride</h2>
                    <p className="max-w-5xl mx-auto text-gray-600 text-lg">
                        At Everstride, we are dedicated to{" "}
                        <span className="font-semibold">identifying, nurturing, and elevating</span>{" "}
                        the next generation of sporting excellence. Our athlete development program spans multiple disciplines,
                        focusing on both emerging talent and seasoned performers to help them reach their highest potential.
                    </p>
                </div>

                {/* Grid Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sports.map((sport, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={sport.img}
                                alt={sport.alt}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{sport.title}</h3>
                                <p className="text-gray-600">{sport.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
export default Lineup;