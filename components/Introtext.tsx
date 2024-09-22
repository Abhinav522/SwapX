
const Introtext = () => {
    return (
        <div className="flex flex-col items-start gap-[27px] w-[500px] px-8 z-30 my-4">
            <h1 className="lg:text-[40px] text-[30px] text-[#B0BEC5] font-bold">Simple, Secure Swaps</h1>
            <div className="w-full">
                <p className="lg:text-[30px] text-[20px] text-[#90A4AE]">
                    Lorem ipsum dolor sit amet consectetur. Sit blandit gravida diam non velit
                    lacinia nibh. Euismod scelerisque non imperdiet augue.
                </p>
            </div>
            <button className="lg:text-[20px] text-[18px] text-[#00B8D9] hover:underline">Learn More</button> {/* Change to link not button*/}
        </div>
    )
}

export default Introtext
