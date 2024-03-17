import resumeimg from "../assets/resumefor-portfolio.png";

export default function Resume() {
  const config={
    link:'https://drive.google.com/drive/folders/1wtHVoalmUmSq-YGksaNY3eoFyI_YOqxb?usp=sharing'
  }
  return (
    <section id='resume'className="pb-5 flex flex-col md:flex-row bg-primary">
      <div className="md:w-1/3 px-5 py-5 flex justify-center md:justify-end">
        <img className="w-[300px]" src={resumeimg} alt="" />
      </div>
      <div className=" text-white md:w-1/2  flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="font-hero-font text-3xl  border-b-2 mb-2 w-[100px]">
            Resume
          </h1>

          <p className="font-hero-font pb-1 text-1xl flex flex-col">
            You can view my Resume.
            <a
              className="w-2/3 border-black hover:border-white hover:text-black btn text-1xl" download target='_blank' href={config.link}>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
