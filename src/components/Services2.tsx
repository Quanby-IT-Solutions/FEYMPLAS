export default function Services2() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-16  py-16 bg-secondary-1">
            <div className="w-full flex flex-row justify-center items-center gap-20 max-w-[80%]  overflow-hidden">
                <ServicesDiv1 />
                <ServicesDiv2 />
            </div>
        </div>
    );
};

const ServicesDiv1 = () => {
    return (
        <div className="w-full max-w-[50%] flex flex-col">
            <div className="w-full flex flex-row gap-2 justify-start items-center pb-2">
                <p>Services</p>
                <hr className="w-16 border border-timeless-white" />
            </div>
            <div className="w-full flex flex-col gap-8">
                <h1 className="text-17xl font-semibold">
                    BE A <span className="font-serif font-medium text-17xl">B</span>USINESS{" "}
                    <br /> S<span className="italic font-serif font-medium">O</span>
                    LUTIONS PARTNER
                </h1>
                <p className="">
                    Business Solutions Services is a program featuring private
                    companies, government institutions, organizations, and individuals
                    that offer services, solutions or products that help exporters meet
                    their goals in all aspects of the business, from inception to
                    operations.
                </p>
                <div className="w-full flex flex-col gap-2.5">
                    <div className="w-full flex flex-row gap-4 pl-1">
                        <input
                            type="text"
                            className="w-full p-3 pl-6 text-timeless-black border border-secondary-5 bg-timeless-white placeholder:text-secondary-1 focus:outline-secondary-1"
                            placeholder="Enter your email address to get started"
                        />
                        <button className="uppercase p-3 w-44 bg-timeless-white text-secondary-1">
                            Submit
                        </button>
                    </div>
                    <p className="text-xs font-[300] max-w-md">
                        or email us at busdev@citem.com.ph
                    </p>
                </div>
            </div>
        </div>
    )
}

const ServicesDiv2 = () => {
    const getToKnow = [
        '✓ Get to know more exporters or MSMEs through our platform',
        '✓ Get the opportunity to support MSMEs to become full-fledged exporters',
        '✓ Explore other opportunities offered to partners'
    ]
    return (
        <div className="w-full flex justify-end items-end">
            <div className="w-full max-w-[80%] flex flex-col gap-4  bg-primary-2 text-timeless-white h-full p-12 pt-16  border">
                {getToKnow.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <div className="w-full pt-8">
                    <button className="capitalize p-4 w-full bg-secondary-5">Learn More +</button>
                </div>
            </div>
        </div>
    )
}


