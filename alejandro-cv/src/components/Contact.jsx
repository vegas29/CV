export const Contact = () => {
  return (
    <section id="contact" className="text-white md:px-[100px] lg:px-[300px] p-5 md:p-0 mt-40">
      <div className="flex items-center gap-10">
        <h2 className="text-xl md:text-2xl font-bold">Contact<span className="text-blue-500">.</span></h2>
        <hr className="flex-grow border-t-[1px] border-blue-500 opacity-50" />
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-10 p-10 my-20">
        <div>
          <p className="text-xl font-bold mb-2">
            Get in Touch
            <span className="text-blue-500">.</span>
          </p>
          <p className="text-gray-2">
            Although I am not currently looking for offers, I am not closed to new experiences. Leave me a greeting, I will get back to you as soon as possible.
          </p>
        </div>

        <form className="w-full flex flex-col items-center">
          <a className="bg-blue-500 cursor-pointer hover:bg-blue-600 p-3 font-bold rounded-md w-1/3 text-center" onClick={() => window.location = 'mailto:diegoleandro-29@hotmail.com'}>
            <i className="fa-solid fa-paper-plane text-white mr-2"></i>
            Enviar
          </a>
        </form>
      </div>
    </section>
  )
}
