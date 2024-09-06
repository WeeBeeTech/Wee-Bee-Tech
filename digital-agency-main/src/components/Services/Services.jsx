import React from "react";
import { FaCameraRetro } from "react-icons/fa";
<<<<<<< HEAD
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
=======
import { Link } from "react-router-dom"; 
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";


const skillsData = [
  {
    name: "Media Support",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "/media-support",  // Link to the media support page
    description: "Bringing your vision to life with professional photography...",
>>>>>>> f878432 (updates)
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
<<<<<<< HEAD
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
=======
    link: "/web-designing",  // You can update this later to a valid page
    description: "Crafting modern, responsive websites...",
>>>>>>> f878432 (updates)
    aosDelay: "300",
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
<<<<<<< HEAD
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
=======
    link: "#",  // You can update this later to a valid page
    description: "Transforming ideas into striking visuals...",
>>>>>>> f878432 (updates)
    aosDelay: "500",
  },
  {
    name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
<<<<<<< HEAD
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "700",
  },
];
=======
    link: "digital-marketting",  // You can update this later to a valid page
    description: "Boost your online presence with targeted digital marketing...",
    aosDelay: "700",
  },
];

>>>>>>> f878432 (updates)
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
<<<<<<< HEAD
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
=======
              <Link key={skill.name} to={skill.link}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  className="card space-y-3 sm:space-y-4 p-4 cursor-pointer"
                >
                  <div>{skill.icon}</div>
                  <h1 className="text-lg font-semibold">{skill.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </Link>
>>>>>>> f878432 (updates)
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
<<<<<<< HEAD
=======

>>>>>>> f878432 (updates)
