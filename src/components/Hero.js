
import profile from "../assets/profile.jpg"
import {AiOutlineGithub,AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai"


export default function Hero(){
    const config={
        subtitle:`I'm a Web Developer.`,
        social:{
            github:'https://github.com/thisisvishnu',
            instagram:'https://instagram.com/thisisvishnur',
            linkedin:'https://www.linkedin.com/vishnu-ramamoorthy'
        }
    }
    return <section className="flex flex-col md:flex-row justify-center px-5 py-32 bg-secondary">
        <div className="md:w-1/2 pt-2 flex flex-col " >
        <h1 className='text-white text-4xl font-hero-font'>
            Hi,<br/>I'm <span className='text-sky-400'>Vishnu.</span>
            <p className='text-2xl'>{config.subtitle}</p>
        </h1>
            <div className="text-white flex">
                <a className=' pt-2 pr-5 hover:text-sky-400' target='_blank'href={config.social.linkedin}><AiOutlineLinkedin/></a>
                <a className='pt-2 pr-5 hover:text-sky-400'target='_blank' href={config.social.instagram}><AiOutlineInstagram/></a>
                <a className='pt-2 hover:text-sky-400'target='_blank' href={config.social.github}><AiOutlineGithub/></a>
            </div>
        </div>
        <img className=' md:w-1/4 pt-2 rounded-full ' src={profile }></img>
        
    </section>
}