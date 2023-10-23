export const Hero = () => {
  return (
    <section>
        <p className="text-white p-5 md:px-[100px] lg:px-[300px] md:py-[100px] md:my-20">
          <span className="text-blue-500 md:text-xl block mb-5">Welcome, I&apos;m</span>
          <span className="text-5xl md:text-7xl block font-bold mb-3 md:mb-5">Alejandro Perdomo<span className="text-blue-500">.</span></span>
          <span className="text-blue-500 text-2xl md:text-5xl block mb-2">I develop web, desktop and mobile apps.</span>
          <span className="text-gray-300 block md:w-[600px] mt-5">I&apos;m a software engineer based from Neiva - Colombia, specializing in building exceptional experiences for the users on Mobile, Desktop, Web apps. I am always surpassing myself.</span>
          <a className="w-full text-center md:w-auto border-2 border-blue-500 hover:bg-blue-500/50 text-blue-300 rounded-xl mt-10 p-3 inline-block" href="#contact">Get In Touch</a>
        </p>
    </section>
  )
}
