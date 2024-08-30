'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '../ui/LoginModal';

export default function Section1() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginType, setLoginType] = useState<'Exhibitor' | 'Trade Buyer'>('Exhibitor');
    const router = useRouter();

    const openModal = (type: 'Exhibitor' | 'Trade Buyer') => {
        setLoginType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="flex flex-col items-center py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <h1 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">REGISTER NOW</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {/* For Trade Buyers */}
                <div className="bg-white dark:bg-gray-800 shadow-lg p-8 w-full max-w-sm text-center rounded-lg transition-colors duration-300">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">FOR TRADE BUYERS</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        The platform is reserved exclusively for decor, design, and lifestyle professionals.
                        <br />
                        Get in touch with suppliers and brands. Access to product specifications. Access to exclusive content.
                    </p>
                    <button
                        type="button"
                        className="bg-white dark:bg-gray-700 text-green-700 dark:text-green-400 py-3 px-6 rounded transition-colors duration-300"
                        onClick={() => router.push('/trade-buyer-registration')}
                    >
                        Create Trade Buyer Account
                    </button>
                    <p className="text-sm mt-4 text-gray-700 dark:text-gray-300">
                        Already a FAME buyer?{' '}
                        <button
                            onClick={() => openModal('Trade Buyer')}
                            className="text-green-700 dark:text-green-400 underline"
                        >
                            Login here.
                        </button>
                    </p>
                </div>

                {/* For Visitors */}
                <div className="bg-green-700 dark:bg-green-900 shadow-lg p-8 w-full max-w-sm text-center text-white rounded-lg transition-colors duration-300">
                    <h2 className="text-xl font-bold mb-4">FOR VISITORS</h2>
                    <p className="mb-6">
                        Non-trade buyers are welcome to visit Manila FAME. Pre-register here for the October 2024 show.
                        <br />
                        Do not miss out on the most awaited Philippine fair for home, fashion, and lifestyle. Indulge your senses, be inspired, and network.
                    </p>
                    <button
                        type="button"
                        className="bg-white text-green-700 dark:text-green-400 py-3 px-6 rounded transition-colors duration-300"
                        onClick={() => router.push('/visitor-registration')}
                    >
                        Register
                    </button>
                </div>

                {/* For Exhibitors */}
                <div className="bg-white dark:bg-gray-800 shadow-lg p-8 w-full max-w-sm text-center rounded-lg transition-colors duration-300">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">FOR EXHIBITORS</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Continuous online visibility to your brands with a network of professionals worldwide.
                        <br />
                        Exclusive to Philippine manufacturers, traders, designers, and artisans who are currently exporting or looking to expand to the global market.
                    </p>
                    <button
                        type="button"
                        className="bg-white dark:bg-gray-700 text-green-700 dark:text-green-400 py-3 px-6 rounded transition-colors duration-300"
                        onClick={() => router.push('/exhibitor-registration')}
                    >
                        Create Exhibitor Account
                    </button>
                    <p className="text-sm mt-4 text-gray-700 dark:text-gray-300">
                        Already a FAME Exhibitor?{' '}
                        <button
                            onClick={() => openModal('Exhibitor')}
                            className="text-green-700 dark:text-green-400 underline"
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
                    loginType={loginType}
                />
            )}
        </section>
    );
}
