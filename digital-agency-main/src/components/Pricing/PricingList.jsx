import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid"; // Using icons for better UI

const PricingList = () => {
  const categories = {
    Basic: ["Instagram Marketing", "Facebook Marketing"],
    Intermediate: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Google My Business (GMB)"
    ],
    Classic: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Google My Business",
      "Twitter Marketing",
      "LinkedIn Marketing",
      "YouTube Marketing",
      "Pinterest",
      "SEO (Search Engine Optimization)"
    ]
  };

  const categoryStyles = {
    button:
      "w-full flex justify-between items-center py-2 px-4 bg-blue-500 text-white rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-300",
    panel:
      "bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-2 transition-all duration-300 ease-in-out",
    listItem:
      "text-gray-700 dark:text-gray-300 text-lg py-1 hover:text-blue-600"
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Digital Marketing Pricing List
      </h1>
      <div className="w-full max-w-md space-y-4">
        {Object.keys(categories).map((category) => (
          <Disclosure key={category}>
            {({ open }) => (
              <>
                <Disclosure.Button className={categoryStyles.button}>
                  <span>{category}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={categoryStyles.panel}>
                  <ul className="space-y-2">
                    {categories[category].map((service, index) => (
                      <li key={index} className={categoryStyles.listItem}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default PricingList;