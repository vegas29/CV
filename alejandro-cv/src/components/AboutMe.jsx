import Photo from '../assets/photo.jpg';
export const AboutMe = () => {
  return (
    <section id="aboutme" className="text-white md:px-[100px] lg:px-[300px] p-5 md:p-0">
        <div className="flex items-center gap-10">
            <h2 className="text-xl md:text-2xl font-bold">About Me<span className="text-blue-500">.</span></h2>
            <hr className="flex-grow border-t-[1px] border-blue-500 opacity-50" />
        </div>
        
        <div className="py-10 flex flex-col md:flex-row md:justify-between items-center">
            <div className="md:w-1/2">
                <p className="text-gray-300">
                    Hi! I&apos;m Alejandro Perdomo, a Engineer Software and Developer.
                    I like to create professional experiences for users. I am very detailed with my work. I love everything related to UI and UX.
                    <span className="block mt-3">Technologies I work with every day.</span>
                </p>

                <ul className="text-gray-300 flex flex-wrap gap-5 mt-5">
                    <li className="li-arrow">Next.js</li>
                    <li className="li-arrow">React.js</li>
                    <li className="li-arrow">JavaScript</li>
                    <li className="li-arrow">TypeScript</li>
                    <li className="li-arrow">Astro</li>
                    <li className="li-arrow">Firebase</li>
                    <li className="li-arrow">MongoDB</li>
                    <li className="li-arrow">SQL Lite</li>
                    <li className="li-arrow">React Native</li>
                    <li className="li-arrow">Flutter</li>
                </ul>
            </div>
            <div className="w-64 h-64 relative mt-10 md:mt-0">
                <div className="w-64 h-64 rounded-lg absolute z-10">
                    <img
                        src={Photo}
                        alt="Profile Photo"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-64 h-64 rounded-lg absolute top-5 left-7 z-0 border-2 border-blue-500 shadow-lg" />
            </div>
        </div>
    </section>
  )
}
