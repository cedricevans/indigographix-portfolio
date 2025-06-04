import React from "react";
import Slider from "react-slick";


const projects = [
  { title: "The Open Road Awaits", img: "/assets/projects/project1.jpg" },
  { title: "Admin Dashboard", img: "/assets/projects/project2.jpg" },
  { title: "Workplace Setup", img: "/assets/projects/project3.jpg" },
  { title: "Creative Portfolio", img: "/assets/projects/project4.jpg" },
  { title: "E-commerce UI", img: "/assets/projects/project5.jpg" },
  { title: "Analytics Suite", img: "/assets/projects/project6.jpg" }
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section className="bg-military-blue text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div key={idx} className="px-3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4 text-black font-semibold">{project.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}