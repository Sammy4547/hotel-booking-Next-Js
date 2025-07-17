'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-900 min-h-screen ">
      {/* Header Section */}
      <section className="bg-blue-600 dark:bg-gray-700 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">About Travelify Hotels</h1>
       
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-4">Who We Are</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Travelify Hotels is a modern hotel booking platform designed to help you find 
            the best stays across cities effortlessly. From luxury hotels to budget-friendly options, 
            we bring curated listings tailored for both business and leisure travelers.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Our mission is to make travel planning simple, transparent, and accessible for everyone. 
            With real-time availability, detailed hotel information, and a secure booking process, 
            Travelify ensures peace of mind for your trips.
          </p>
        </div>

        <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden">
          <Image
            src="/hotel.jpg"
            alt="Hotel interior"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white dark:bg-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-white">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust & Transparency',
                desc: 'We provide clear information, honest pricing, and genuine reviews to help you make informed choices.'
              },
              {
                title: 'Customer First',
                desc: 'Our support team is here 24/7 to assist you before, during, and after your booking experience.'
              },
              {
                title: 'Continuous Improvement',
                desc: 'We regularly update our platform with new features, ensuring you always have the best tools available.'
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
