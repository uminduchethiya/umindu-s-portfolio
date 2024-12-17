import casestudy1 from "../assets/img/ss1.png";
import casestudy2 from "../assets/img/ss2.png";
import casestudy3 from "../assets/img/ss3.png";
const projects = [
  {
    title: "Aramco Travels",
    description:
      "Since its establishment in the year 2000, Aramco Travels has solidified its position as a...",
    services: "UI/UX Design, Web Development, Web Hosting",
    image: casestudy1,
  },
  {
    title: "Sunray Green Energy",
    description:
      "Our team comprises of SOLAR TECHNOLOGY PIONEERS an early 2000 when introduced to Sri Lanka...",
    services: "UI/UX Design, Web Development, Web Hosting",
    image: casestudy2,
  },
  {
    title: "Shatuktuk",
    description:
      "Sha Tuk Tuk specializes in tuk-tuk rentals and guided tours across Sri Lanka, catering to...",
    services: "UI/UX Design, Web Development, Web Hosting",
    image: casestudy3,
  },
];

const ProjectCards = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden p-6 bg-transparent"
            >
              {/* Image Section with Scroll and Overlay */}
              <div className="relative group h-64 w-full overflow-hidden rounded-lg">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full transform transition-transform duration-1000 ease-in-out group-hover:-translate-y-1/2"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.services}</p>
                </div>
              </div>
              {/* Text Section */}
              <div className="mt-4">
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
