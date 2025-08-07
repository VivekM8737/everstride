import headerImage from "../assets/homeImages/headerImage.jpg"
const Home =()=>{
    return(
        <>
            <section className="w-full">
                <img src={headerImage} alt="headerImage" className="w-full max-w-none object-cover h-170" />
            </section>
        </>
    )
}

export default Home;