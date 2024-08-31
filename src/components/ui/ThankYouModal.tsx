import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ThankYouModalProps {
    accountType: string;
    onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ accountType, onClose }) => {
    const router = useRouter();
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const duration = 5000;
        const interval = 100;
        const decrement = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev - decrement <= 0) {
                    clearInterval(timer);
                    onClose();
                    router.push('/');
                    return 0;
                }
                return prev - decrement;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [router, onClose]);

    // Prevent body scroll when ThankYouModal is active
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto'; // Restore scroll when component unmounts
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white p-10 rounded-md shadow-lg text-center max-w-2xl mx-4">
                <h1 className="text-4xl font-bold mb-6 text-stone-900">THANK YOU!</h1>
                <p className="text-lg font-medium text-stone-900">
                    You have successfully applied for a <span className="font-semibold">{accountType}</span> account!
                </p>
                <p className="text-lg font-medium text-stone-900 mt-4">
                    Your submission has been received and is under review. You will be notified
                    via email once your account is approved.
                </p>

                {/* Timer Slider with Logical Properties */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-2.5 relative">
                    <div
                        className="bg-stone-900 h-2.5 rounded-full transition-all duration-100"
                        style={{ inlineSize: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouModal;
