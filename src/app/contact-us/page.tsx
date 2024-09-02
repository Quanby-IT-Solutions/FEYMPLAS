import Footer from "@/components/layouts/about-us-footer/about-us-footer";
import Services from "@/components/Services";

/* eslint-disable @next/next/no-img-element */
export default function ContactUs() {
    return (
        <div className="w-full h-full text-primary-2 font-[300] pt-8 tracking-wide text-lg">
            <div className="w-full h-full flex flex-col gap-20">
                <ContactUsField />
                <Services />
                <ContactUsMidSection />
            </div>
            <Footer />
        </div>
    );
}

const ContactUsField = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-20">
            <h1 className="font-bold text-13xl capitalize">Contact us</h1>
            <img
                className="object-cover w-full"
                src="/assets/contact-us/1.png"
                alt=""
            />
        </div>
    );
};




const ContactUsMidSection = () => {
    return (
        <div className="w-full bg-secondary-7">
            <div className="w-full  max-w-[80%] mx-auto flex flex-row pb-20 pt-28">
                <div className="w-full max-w-[80%] mx-auto flex flex-row gap-20">
                    <div className="w-full flex flex-col gap-8 justify-start items-end">
                        <h1 className="text-5xl font-semibold">MANILA FAME SECRETARIAT</h1>
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