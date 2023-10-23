import Tifi from '../assets/tifi.jpg';
import Bugitech from '../assets/bugitech.png';
import Nasa from '../assets/nasa.png';
import Skyline from '../assets/skyline.png';

export const Works = () => {
  return (
    <section id="works" className="text-white md:px-[100px] lg:px-[300px] md:mt-32 p-5 md:p-0">
        <div className="flex items-center gap-10 mb-10">
            <h2 className="text-xl md:text-2xl font-bold">Works<span className="text-blue-500">.</span></h2>
            <hr className="flex-grow border-t-[1px] border-blue-500 opacity-50" />
        </div>
        
        <div className="flex flex-col xl:grid xl:grid-cols-12 grid-rows-2 gap-10">
            <div className="relative overflow-hidden group md:col-start-1 md:col-end-5 md:row-span-2 hover:cursor-pointer">
                <a href='https://tifientregas.com/login' target='_blank' rel='noreferrer'>
                    <img
                        src={Tifi}
                        alt="Tifi Entregas"
                        className="w-full object-cover h-full rounded-md transition-transform transform scale-100 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h1 className="text-2xl font-semibold">Tifi Entregas</h1>
                        <p className="text-lg">React - React Native</p>
                    </div>
                </a>
            </div>
            <div className="relative overflow-hidden group md:col-start-5 md:col-end-9 hover:cursor-pointer">
                <img
                    src={Nasa}
                    alt="Nasa Paez Huila"
                    className="w-full object-cover h-full rounded-md transition-transform transform scale-100 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h1 className="text-2xl font-semibold">Nasa Páez Huila</h1>
                    <p className="text-lg">PHP - Wordpress</p>
                </div>
            </div>
            <div className="relative overflow-hidden group md:col-start-9 md:col-end-13 hover:cursor-pointer">
                <img
                    src={Skyline}
                    alt="Skyline Software"
                    className="w-full object-cover h-full rounded-md transition-transform transform scale-100 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h1 className="text-2xl font-semibold">Skyline Software</h1>
                    <p className="text-lg">Next.js</p>
                </div>
            </div>
            <div className="relative overflow-hidden group md:col-start-5 md:col-end-13 hover:cursor-pointer">
                <img
                    src={Bugitech}
                    alt="Bugitech"
                    className="w-full object-cover h-full rounded-md transition-transform transform scale-100 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h1 className="text-2xl font-semibold">Bugitech</h1>
                    <p className="text-lg">React</p>
                </div>
            </div>
        </div>
    </section>
  )
}
