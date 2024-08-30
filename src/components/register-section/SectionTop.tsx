'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '../ui/LoginModal';

export default function SectionTop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginType, setLoginType] = useState<'Exhibitor' | 'Trade Buyer'>('Exhibitor'); // State to determine login type
    const router = useRouter();

    const openModal = (type: 'Exhibitor' | 'Trade Buyer') => {
        setLoginType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="flex flex-col items-center py-16 bg-gray-50">
            <h1 className="text-4xl font-bold mb-10 text-gray-900">REGISTER NOW</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {/* For Trade Buyers */}
                <div className="bg-white shadow-lg p-8 w-full max-w-sm text-center">
                    <h2 className="text-xl font-bold mb-4">FOR TRADE BUYERS</h2>
                    <p className="text-gray-700 mb-6">
                        The platform is reserved exclusively for decor, design, and lifestyle professionals.
                        <br />
                        Get in touch with suppliers and brands. Access to product specifications. Access to exclusive content.
                    </p>
                    <button type="button" className="bg-white text-green-700 py-3 px-6 rounded" onClick={() => router.push('/trade-buyer-registration')}>
                        Create Trade Buyer Account
                    </button>
                    <p className="text-sm">
                        Already a FAME buyer?{' '}
                        <button
                            onClick={() => openModal('Trade Buyer')} // Open Trade Buyer login modal
                            className="text-green-700 underline"
                        >
                            Login here.
                        </button>
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
                    <button type="button" className="bg-white text-green-700 py-3 px-6 rounded" onClick={() => router.push('/visitor-registration')}>
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
                    <button type="button" className="bg-white text-green-700 py-3 px-6 rounded" onClick={() => router.push('/exhibitor-registration')}>
                        Create Exhibitor Account
                    </button>
                    <p className="text-sm">
                        Already a FAME Exhibitor?{' '}
                        <button
                            onClick={() => openModal('Exhibitor')} // Open Exhibitor login modal
                            className="text-green-700 underline"
                        >
                            Login here.
                        </button>
                    </p>
                </div>
            </div>

            {/* Unified Login Modal for Both Exhibitor and Trade Buyer */}
            {isModalOpen && (
                <LoginModal
                    title={`Login To Your ${loginType} Account`}
                    logoText="FAME+"
                    onClose={closeModal}
                    loginType={loginType} // Pass loginType to determine logic inside the modal
                />
            )}
        </section>
    );
}
