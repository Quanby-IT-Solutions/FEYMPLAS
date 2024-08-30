'use client'

import { useRouter } from 'next/navigation'

export default function RegisterSection1() {
    
    const router = useRouter()

    return (
        <section className="flex flex-col items-center py-16 bg-gray-50">
            <h1 className="text-4xl font-bold mb-10">REGISTER NOW</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {/* For Trade Buyers */}
                <div className="bg-white shadow-lg p-8 w-full max-w-sm text-center">
                    <h2 className="text-xl font-bold mb-4">FOR TRADE BUYERS</h2>
                    <p className="text-gray-700 mb-6">
                        The platform is reserved exclusively for decor, design, and lifestyle professionals.
                        <br />
                        Get in touch with suppliers and brands. Access to product specifications. Access to exclusive content.
                    </p>
                    <button className="bg-green-700 text-white py-3 px-6 rounded mb-4">
                        Create Trade Buyer Account
                    </button>
                    <p className="text-sm">
                        Already a FAME buyer? <a href="#" className="text-green-700 underline">Login here.</a>
                    </p>
                </div>

                {/* For Visitors */}
                <div className="bg-green-700 shadow-lg p-8 w-full max-w-sm text-center text-white">
                    <h2 className="text-xl font-bold mb-4">FOR VISITORS</h2>
                    <p className="mb-6">
                        Non-trade buyers are welcome to visit Manila FAME. Pre-register here for the October 2024 show.
                        <br />
                        Do not miss out on the most awaited Philippine fair for home, fashion, and lifestyle. Indulge your senses, be inspired, and network.
                    </p>
                    <button type="button" className="bg-white text-green-700 py-3 px-6 rounded" onClick={() => router.push('/auth/register')}>
                        Register
                    </button>
                </div>

                {/* For Exhibitors */}
                <div className="bg-white shadow-lg p-8 w-full max-w-sm text-center">
                    <h2 className="text-xl font-bold mb-4">FOR EXHIBITORS</h2>
                    <p className="text-gray-700 mb-6">
                        Continuous online visibility to your brands with a network of professionals worldwide.
                        <br />
                        Exclusive to Philippine manufacturers, traders, designers, and artisans who are currently exporting or looking to expand to the global market.
                    </p>
                    <button className="bg-green-700 text-white py-3 px-6 rounded mb-4">
                        Create Exhibitor Account
                    </button>
                    <p className="text-sm">
                        Already a FAME Exhibitor? <a href="#" className="text-green-700 underline">Login here.</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
