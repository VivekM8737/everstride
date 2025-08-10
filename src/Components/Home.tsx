const Home = () => {
    const headerImage="https://res.cloudinary.com/dx5zqc2fc/image/upload/v1754831936/headerImage_c5nuag.jpg"
    return (
        <>
            <section className="w-full h-170">
                <img src={headerImage} alt="headerImage" className="w-full max-w-none object-cover h-170" />
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
                                As one of the leading sport management agencies in athletics we aspire to push our
                                sport forward. It’s in our DNA. Whether it’s through elite athlete management,
                                event organization or sport marketing projects, we strive for innovation and
                                progression.
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