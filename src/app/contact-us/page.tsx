import Footer from "@/components/layouts/about-us-footer/about-us-footer";

/* eslint-disable @next/next/no-img-element */
export default function ContactUs() {
    return (
        <div className="w-full h-full text-primary-2 font-[300] pt-8 tracking-wide text-lg">
            <div className="w-full h-full flex flex-col gap-20">
                <ContactUsField />
                <ContactUsServices />
                <ContactUsMidSection />
                
            </div>
            <Footer />
        </div>
    );
}

const ContactUsField = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-20">
            <h1 className="font-bold text-5xl capitalize">Contact us</h1>
            <img
                className="object-cover w-full"
                src="/assets/contact-us/1.png"
                alt=""
            />
        </div>
    );
};

const ContactUsServices = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-16">
            <div className="w-full flex flex-row justify-center items-center gap-20 max-w-[80%] overflow-hidden">
                <ContactUsServices1 />
                <ContactUsServices2 />
            </div>
        </div>
    );
};

const ContactUsServices1 = () => {
    return (
        <div className="w-full max-w-[50%] flex flex-col">
            <div className="w-full flex flex-row gap-2 justify-start items-center pb-2">
                <p>Services</p>
                <hr className="w-16 border border-primary-2" />
            </div>
            <div className="w-full flex flex-col gap-8">
                <h1 className="text-4xl font-semibold">
                    BE A <span className="font-serif font-medium text-[38px]">B</span>USINESS{" "}
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
                    <div className="w-full flex flex-row gap-4">
                        <input
                            type="text"
                            className="w-full p-3 pl-6 border border-secondary-5 bg-timeless-white placeholder:text-secondary-5 focus:outline-secondary-5"
                            placeholder="Enter your email address to get started"
                        />
                        <button className="uppercase p-3 w-44 bg-secondary-5 text-timeless-white">
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
const ContactUsServices2 = () => {
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


const ContactUsMidSection = () => {
    return (
        <div className="w-full bg-secondary-7">
            <div className="w-full  max-w-[80%] mx-auto flex flex-row pb-20 pt-28">
                <div className="w-full max-w-[80%] mx-auto flex flex-row gap-20">
                    <div className="w-full flex flex-col gap-8 justify-start items-end">
                        <h1 className="text-2xl font-semibold">MANILA FAME SECRETARIAT</h1>
                        <p className="text-right">
                            Center of International Trade Expositions and Missions (CITEM) <br />
                            Golden Shell Pavilion, Roxas Blvd. corner Sen. Gil Puyat Ave. Pasay <br />
                            City, PHILIPPINES 1300
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <div className="w-[60%] flex flex-col gap-4">
                        <div>
                            <h1 className="text-xl font-semibold">EXHIBITORS</h1>
                            <p>exhibitorservices@citem.com.ph</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">BUYERS</h1>
                            <p>manilafamebuyers@citem.com.ph</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Sponsorship & Partnership</h1>
                            <p>busdev@citem.com.ph</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">Media Relations</h1>
                            <p>ccd@citem.com.ph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}