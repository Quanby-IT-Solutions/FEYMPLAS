'use client';

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Section2() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h4 className="text-sm font-light uppercase tracking-widest mb-2 text-gray-600">Reviews</h4>
                    <h2 className="text-5xl font-extrabold mb-4 text-gray-800">What our customers are saying</h2>
                    <div className="w-16 h-1 mx-auto bg-gray-800"></div>
                </div>

                {/* Swiper Container */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {/* Review Card 1 */}
                    <SwiperSlide>
                        <div className="bg-gray-900 text-white p-10 rounded-lg shadow-xl w-full max-w-sm mx-auto">
                            <p className="mb-8 text-lg leading-relaxed">
                                Our team has been working at frispees for almost 2 months because our office still closed. During working at frispees, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet in there. Thank you for frispees and team.
                            </p>
                            <div className="flex items-center mt-6">
                                <Image
                                    src="/assets/stories-touchpoint/Industry.png"
                                    className="rounded-full w-14 h-14 mr-4"
                                    width={56}
                                    height={56}
                                    alt="Pedro Ibanez"
                                />
                                <div>
                                    <h5 className="font-bold text-lg">Pedro Ibanez</h5>
                                    <p className="text-sm text-gray-300">UI Designer at Google</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Review Card 2 */}
                    <SwiperSlide>
                        <div className="bg-gray-900 text-white p-10 rounded-lg shadow-xl w-full max-w-sm mx-auto">
                            <p className="mb-8 text-lg leading-relaxed">
                                The high-speed internet at Frispees was so amazing. I can get the best experience when running video calls with my clients. Frispees has a spacious and safe parking area, that&apos;s what I needed because I used to work as a freelancer for a long time.
                            </p>
                            <div className="flex items-center mt-6">
                                <Image
                                    src="/assets/stories-touchpoint/Industry.png"
                                    className="rounded-full w-14 h-14 mr-4"
                                    width={56}
                                    height={56}
                                    alt="Raymond Thual"
                                />
                                <div>
                                    <h5 className="font-bold text-lg">Raymond Thual</h5>
                                    <p className="text-sm text-gray-300">Professional Freelancer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Review Card 3 */}
                    <SwiperSlide>
                        <div className="bg-gray-900 text-white p-10 rounded-lg shadow-xl w-full max-w-sm mx-auto">
                            <p className="mb-8 text-lg leading-relaxed">
                                Just three words: Frispees is Awesome!
                            </p>
                            <div className="flex items-center mt-6">
                                <Image
                                    src="/assets/stories-touchpoint/Industry.png"
                                    className="rounded-full w-14 h-14 mr-4"
                                    width={56}
                                    height={56}
                                    alt="Yuli Berlian"
                                />
                                <div>
                                    <h5 className="font-bold text-lg">Yuli Berlian</h5>
                                    <p className="text-sm text-gray-300">iOS Dev at Tokopedia</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
