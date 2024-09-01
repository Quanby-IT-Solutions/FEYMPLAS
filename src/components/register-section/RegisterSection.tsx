import SectionTop from "./SectionTop";
import CustomerReview from "../forms/login/CustomerReview";

export default function RegisterSection() {
    return (
        <section className="w-full text-primary-2 flex flex-col gap-20"><SectionTop /><CustomerReview /></section>
    );
}
