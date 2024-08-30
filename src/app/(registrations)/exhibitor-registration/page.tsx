'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Register() {
  const [step, setStep] = useState(1); // Current step of the form

  // Handler to go to the next step
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));

  // Handler to go to the previous step
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  // Animation variants for Framer Motion
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">CREATE YOUR TRADE BUYER ACCOUNT</h1>
        <p className="text-sm text-center mb-6 font-semibold">Account Registration - Page: {step} / 5</p>

        <motion.div
          key={step}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Manila Fame 2024</h2>
              <p className="mb-4">Are you attending Manila FAME on October 17-19, 2024 in Manila?</p>
              <div className="flex items-center mb-4">
                <input type="radio" name="attending" value="Yes" className="mr-2" required />
                <label>Yes</label>
              </div>
              <div className="flex items-center mb-6">
                <input type="radio" name="attending" value="No" className="mr-2" required />
                <label>No</label>
              </div>

              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Buyer Information</h2>
              <form className="space-y-4">
                {/* Buyer Information Fields */}
                <select className="w-full p-2 border border-gray-300 rounded" required>
                  <option value="">-- Salutation --</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                </select>
                <input type="text" placeholder="First Name*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="text" placeholder="Last Name*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="text" placeholder="Country" className="w-full p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Email Address*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="email" placeholder="Confirm Email Address*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="password" placeholder="Password*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="password" placeholder="Confirm Password*" className="w-full p-2 border border-gray-300 rounded" required />
                {/* Additional Information */}
                <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Additional Information</h2>
                <input type="text" placeholder="Company Name*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="text" placeholder="Designation*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="text" placeholder="Website" className="w-full p-2 border border-gray-300 rounded" />
                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 mb-2">
                  <input type="checkbox" className="mt-1" required />
                  <label>I agree to the Terms and Conditions.</label>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <input type="checkbox" className="mt-1" />
                  <label>I agree to receive newsletters and other promotional materials.</label>
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <label>I allow my data to be shared with Event Partners and Sponsors.</label>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Business Information</h2>
              <form className="space-y-4">
                {/* Business Information Fields */}
                <input type="text" placeholder="Office Address*" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="text" placeholder="Contact Number" className="w-full p-2 border border-gray-300 rounded" />
                {/* Role in Purchasing Activity */}
                <h3 className="text-sm font-medium mb-2">Role in the Company’s Purchasing Activity*</h3>
                <div className="flex items-center">
                  <input type="radio" name="role" value="Decision Maker" className="mr-2" required />
                  <label>Decision Maker</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="role" value="Recommendatory" className="mr-2" required />
                  <label>Recommendatory</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="role" value="Others" className="mr-2" required />
                  <label>Others</label>
                </div>
                {/* Nature of Business */}
                <h3 className="text-sm font-medium mb-2">Nature of Business*</h3>
                <select className="w-full p-2 border border-gray-300 rounded" required>
                  <option value="">-- Select --</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Buying Agent">Buying Agent</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Specifier">Specifier</option>
                  <option value="HoReCa">HoReCa</option>
                  <option value="Others">Others, specify</option>
                </select>
                <input type="text" placeholder="Others" className="w-full p-2 border border-gray-300 rounded" />
                {/* Market Segment */}
                <h3 className="text-sm font-medium mb-2">Market Segment*</h3>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" value="Exclusively high-end market" className="mr-2" />
                  <label>Exclusively high-end market</label>
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" value="Middle to high-end market" className="mr-2" />
                  <label>Middle to high-end market</label>
                </div>
                {/* Add more options as needed */}
                {/* Annual Sales Volume */}
                <h3 className="text-sm font-medium mb-2">Annual Sales Volume*</h3>
                <select className="w-full p-2 border border-gray-300 rounded" required>
                  <option value="">-- Select --</option>
                  <option value="More than USD 10 million">More than USD 10 million</option>
                  <option value="USD 5,000,001 - USD 10 million">USD 5,000,001 - USD 10 million</option>
                  {/* More options here */}
                </select>
                {/* Supplier Information */}
                <input type="text" placeholder="Existing Philippine supplier (if applicable)" className="w-full p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Supplier Name" className="w-full p-2 border border-gray-300 rounded" />
              </form>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Preferences</h2>
              <p className="text-sm font-medium mb-6">Please choose at least one.</p>
              <form className="space-y-4">
                {/* Fashion */}
                <div className="mb-6">
                  <h3 className="text-md font-semibold mb-2">Fashion</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="ladiesWear" className="mr-2" />
                      <label htmlFor="ladiesWear">Ladies&apos; Wear</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="childrensWear" className="mr-2" />
                      <label htmlFor="childrensWear">Children&apos;s Wear</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="mensWear" className="mr-2" />
                      <label htmlFor="mensWear">Men&apos;s Wear</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="costumeJewelry" className="mr-2" />
                      <label htmlFor="costumeJewelry">Costume Jewelry</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="fineJewelry" className="mr-2" />
                      <label htmlFor="fineJewelry">Fine Jewelry</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="footwear" className="mr-2" />
                      <label htmlFor="footwear">Footwear</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="bagClutch" className="mr-2" />
                      <label htmlFor="bagClutch">Bag / Clutch</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="fashionTextiles" className="mr-2" />
                      <label htmlFor="fashionTextiles">Fashion Textiles</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="othersFashion" className="mr-2" />
                      <label htmlFor="othersFashion">Others Fashion</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="fashionComplements" className="mr-2" />
                      <label htmlFor="fashionComplements">Fashion Complements (Belt, Hat, Headband, Scarf, Gloves)</label>
                    </div>
                  </div>
                </div>

                {/* Beauty and Wellness */}
                <div className="mb-6">
                  <h3 className="text-md font-semibold mb-2">Beauty and Wellness</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="bathProducts" className="mr-2" />
                      <label htmlFor="bathProducts">Bath Products</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="cosmetics" className="mr-2" />
                      <label htmlFor="cosmetics">Cosmetics</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="handAndBodyLotion" className="mr-2" />
                      <label htmlFor="handAndBodyLotion">Hand And Body Lotion</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="fragrances" className="mr-2" />
                      <label htmlFor="fragrances">Fragrances</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="otherBeautyWellness" className="mr-2" />
                      <label htmlFor="otherBeautyWellness">Other Beauty and Wellness</label>
                    </div>
                  </div>
                </div>

                {/* Home Decor & Houseware */}
                <div className="mb-6">
                  <h3 className="text-md font-semibold mb-2">Home Decor & Houseware</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="artInstallation" className="mr-2" />
                      <label htmlFor="artInstallation">Art Installation</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="sculptures" className="mr-2" />
                      <label htmlFor="sculptures">Sculptures</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="painting" className="mr-2" />
                      <label htmlFor="painting">Painting</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="wallArt" className="mr-2" />
                      <label htmlFor="wallArt">Wall Art</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="architecturalFittings" className="mr-2" />
                      <label htmlFor="architecturalFittings">Architectural Fittings</label>
                    </div>
                    {/* Continue for the remaining items like Baskets & Storage, Candleholders, etc. */}
                  </div>
                </div>

                {/* Festive and Seasonal Decor */}
                <div className="mb-6">
                  <h3 className="text-md font-semibold mb-2">Festive and Seasonal Decor</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="holidayTabletops" className="mr-2" />
                      <label htmlFor="holidayTabletops">Holiday-themed Tabletops</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="ornamentsHangings" className="mr-2" />
                      <label htmlFor="ornamentsHangings">Ornaments & Hangings</label>
                    </div>
                    {/* Continue for Seasonal Candles, Candleholders, etc. */}
                  </div>
                </div>

                {/* Repeat similar structure for "Lamps and Lighting," "Gifts," "Furniture," etc. */}
              </form>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Participation Details</h2>
              <form className="space-y-4">
                {/* Participation Details Fields */}
                <h3 className="text-sm font-medium mb-2">Reasons for Registering</h3>
                <div className="flex items-center">
                  <input type="checkbox" value="Meet Existing suppliers" className="mr-2" />
                  <label>Meet Existing suppliers</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" value="Make a purchase / place orders" className="mr-2" />
                  <label>Make a purchase / place orders</label>
                </div>
                {/* Add more options as needed */}
                {/* How Did You Learn About Fame+ */}
                <h3 className="text-sm font-medium mb-2">How Did You Learn About Fame+</h3>
                <div className="flex items-center">
                  <input type="radio" name="learnAbout" value="Internet search" className="mr-2" />
                  <label>Internet search</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="learnAbout" value="Government websites" className="mr-2" />
                  <label>Government websites</label>
                </div>
                {/* Add more options as needed */}
                {/* Have You Attended Any Manila Fame Editions? */}
                <h3 className="text-sm font-medium mb-2">Have You Attended Any Manila Fame Editions?</h3>
                <div className="flex items-center">
                  <input type="radio" name="attended" value="Yes" className="mr-2" required />
                  <label>Yes</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="attended" value="No" className="mr-2" required />
                  <label>No</label>
                </div>
              </form>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Summary</h2>
              {/* Summary details */}
              <div className="text-sm mb-4">
                {/* Render input values for review before submission */}
                <p><strong>Buyer Information</strong></p>
                <p>First Name: [Placeholder]</p>
                <p>Last Name: [Placeholder]</p>
                <p>Country: [Placeholder]</p>
                {/* Add other fields similarly */}
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded">SUBMIT</button>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={handlePrev}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
            >
              Previous
            </button>
          )}
          {step < 5 && (
            <button
              onClick={handleNext}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
