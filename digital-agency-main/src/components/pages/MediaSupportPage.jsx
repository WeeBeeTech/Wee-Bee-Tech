import React from "react";

const MediaSupportPage = () => {
  return (
    <div className="container mx-auto py-12 px-6 sm:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-violet-950 dark:text-primary mb-8">
        Media Support
      </h1>

      {/* Banner Section */}
      <div className="relative h-64 w-full mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Media Support"
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-xl sm:text-3xl font-semibold">
            Bringing Your Vision to Life
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Text Content */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-950 dark:text-primary">
            Professional Photography & Videography
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            At the heart of media support lies our passion for capturing
            powerful moments. Whether it's a corporate event, personal
            milestone, or creative photoshoot, we ensure that every shot tells a
            compelling story. Our advanced equipment and experienced team
            deliver nothing less than perfection.
          </p>
        </div>

        {/* Right Image Content */}
        <div data-aos="fade-left" className="relative">
          <img
            src="https://images.pexels.com/photos/5594185/pexels-photo-5594185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photography"
            className="rounded-xl shadow-lg transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Services Overview Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-violet-950 dark:text-primary mb-12">
          Our Key Media Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Service Card */}
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/5729029/pexels-photo-5729029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Event Photography"
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-violet-950 dark:text-primary">
                Event Photography
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Capture the magic of every event with stunning shots that convey
                emotion and energy.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Corporate Videography"
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-violet-950 dark:text-primary">
                Corporate Videography
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Tell your brand’s story with high-quality videos designed to
                engage and inform your audience.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/6224531/pexels-photo-6224531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Social Media Visuals"
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-violet-950 dark:text-primary">
                Social Media Visuals
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Stand out with visually stunning content, optimized for social
                media platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSupportPage;
