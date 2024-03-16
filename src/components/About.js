
import aboutimg from '../assets/profile.jpg'

export default function About(){
    return <section className=' flex flex-col md:flex-row bg-primary'id='about'>
        <div className='md:w-1/3 px-5 py-5'>
            <img src={aboutimg} alt=''/>
        </div>
        <div className=' text-white md:w-1/2  flex justify-center'>
            <div className='flex flex-col justify-center'>
            <div className='px-5'>
            <h1 className='font-hero-font text-3xl  border-b-2 mb-2 w-[120px]'>About Me</h1>
           
            <p className='font-hero-font pb-1 text-1xl'>Hi,I'm Vishnu Ramamoorthy.I'm a Web developer.I'm building stunning websites using HTML,CSS,Javascript.</p>
            <p className='font-hero-font pb-1 text-1xl'>I am proficient in Frontend skills like React.js,Tailwind CSS,SaSS,CSS3,HTML5,Javascript and many more...  </p>
            <p className='font-hero-font pb-1 text-1xl'>Add also I know Python and Java(Intermediate level).</p>
            </div>
            </div>
        </div>
        </section>
}