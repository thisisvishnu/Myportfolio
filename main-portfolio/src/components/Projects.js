import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png"

export default function Projects() {
  const config = [
    {
      img: project1,
      description: "Google Search Engine Clone using React and Tailwind.css",
      link: "https://github.com/thisisvishnu/Google-Search-2.0-with-React-Tailwind-CSS",
    },
    {
      img: project3,
      description: "Intellingent Garbage Classification using Deep Learning",
      link: "https://github.com/thisisvishnu/Intelligent-garbage-classification-using-deep-learning",
    },
    {
      img: project2,
      description: "Realtime Bus Tracking System",
      link: "https://github.com/thisisvishnu/Bus-tracking-system",
    },
  ];
  return (
    <section
      id="projects"
      className="text-white bg-secondary flex flex-col py-5 px-5 justify-center"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="font-hero-font text-3xl  border-b-2 mb-2 w-[100px]">
            Projects
          </h1>
          <p>
            These are some of my projects I built using my knowledge in
            React,Python and Java.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.map((projects) => (
            <div className="relative">
              <img className="h-[250px] w-[400px] " src={projects.img} />
              <div className="project-desc">
                <p className="font-hero-font px-5 text-center py-5">
                  {projects.description}
                </p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={projects.link}>
                    View project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
