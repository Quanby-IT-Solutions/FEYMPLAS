'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '../forms/login/LoginModalTradeBuyer';

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
        <section className="flex flex-col items-center py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-urbanist">
    <h1 className="text-18xl font-bold mb-10 text-gray-900 dark:text-white">REGISTER NOW</h1>
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
        {/* For Trade Buyers */}
      
        <div className="bg-white dark:bg-gray-800  my-2 p-10 w-full drop-shadow-sm max-w-max text-center  transition-colors duration-300 border border-transparent  dark:hover:bg-darkolivegreen">
            <h2 className="text-13xl font-bold mb-4 text-gray-900 dark:text-white">FOR TRADE BUYERS</h2>

            <p className="text-gray-700 dark:text-white mb-1">
                Find and source from Manufacturers, 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Artisans, Traders, Business 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Support Organizations, Independent 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Designers and Artists, and Brands that 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                produce top-of-the-line and
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                design-driven pieces that are 100% made 
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
                in the Philippines.
            </p>
            <button
                type="button"
                className="bg-darkolivegreen text-white py-3 px-6 w-full transition-colors duration-300 hover:bg-gray-700"
                onClick={() => router.push('/trade-buyer-registration')}
            >
                <p className="font-bold text-lg ">Create Trade Buyer Account</p>
            </button>
            <p className="text-sm mt-2 text-gray-700 dark:text-white">
                Already a FAME buyer?{' '}
                <button
                    onClick={() => openModal('Trade Buyer')}
                    className="text-darkolivegreen dark:text-darkolivegreen underline hover:text-green-800 dark:hover:text-green-300"
                >
                    Login here.
                </button>
            </p>
        </div>

        {/* For Visitors */}
        <div className="bg-darkolivegreen  p-10 w-full  max-w-max text-center shadow-custom-shadow-2xl text-white  transition-colors duration-300">
            <h2 className="text-13xl font-bold mb-4">FOR VISITORS</h2>
            <p className="mb-1">
                Invited guests, government officials, 
            </p>
            <p className="mb-1">
                officers and employees, media and the
                </p>
            <p className="mb-1">
                general public may pre-register 
            </p>
            <p className="mb-1">
                ahead of the show. Discover unique 
            </p>
            <p className="mb-1">
                products, find inspiration, and connect
            </p>
            <p className="mb-12">
                with creators.
            </p>

            <button
                type="button"
                className="bg-white text-darkolivegreen mt-1 py-3 px-6 w-full transition-colors duration-300 hover:bg-gray-200"
                onClick={() => router.push('/visitor-registration')}
            >
                <p className="font-bold text-lg text-black">Register</p>
            </button>
        </div>

        {/* For Exhibitors */}
        <div className="bg-white dark:bg-gray-800  p-10 w-full my-2 max-w-max text-center drop-shadow-sm transition-colors duration-300 border border-transparent  dark:hover:bg-darkolivegreen">
            <h2 className="text-13xl font-bold mb-4 text-gray-900 dark:text-white">FOR EXHIBITORS</h2>
            <p className="text-gray-700 dark:text-white mb-1">
                Local and International Retailers,
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Wholesalers, Lifestyle and Specialty
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Stores, Multi-brand and 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Department Stores, E-commerce, Buying 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                Agents, Specifiers, and HoReCa are 
            </p>
            <p className="text-gray-700 dark:text-white mb-1">
                sourcing from the Philippines’ premier trade show.
            </p>
            <p className="text-gray-700 dark:text-white mb-4">
                premier trade show.
            </p>
            <button
                type="button"
                className="bg-darkolivegreen text-white py-3 px-6 w-full transition-colors duration-300 hover:bg-gray-700"
                onClick={() => router.push('/exhibitor-registration')}
            >
                <p className="font-bold text-lg "> Create Exhibitor Account</p>
            </button>
            <p className="text-sm mt-2 text-gray-700 dark:text-white">
                Already a FAME Exhibitor?{' '}
                <button
                    onClick={() => openModal('Exhibitor')}
                    className="text-darkolivegreen dark:text-darkolivegreen underline hover:text-green-800 dark:hover:text-green-300"
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
