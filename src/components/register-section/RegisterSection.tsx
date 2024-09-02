import SectionTop from "../ui/SectionTop";
import SectionTopTitle from "../ui/SectionTopTitle";
import CustomerReview from "../forms/login/CustomerReview";

export default function RegisterSection() {
    return (
        <div className="w-full flex flex-col items-center justify-start tracking-wide">
            <div className="w-full flex flex-col gap-16 items-center justify-center">

                <SectionTopTitle
                    titleSegments={[
                        { content: 'R' },
                        { content: 'E', italic: true, serif: true },
                        { content: 'GISTER ' },
                        { content: 'N', serif: true },
                        { content: 'OW' },
                    ]}
                />

                <SectionTop />
                <CustomerReview />
            </div>
        </div>
    );
}
