export const SocialMenu = () => {
  return (
    <div className="fixed left-10 bottom-1 transform -translate-y-1/2 w-12 text-white p-2 z-50">
        <div className="mb-4">
            <a href="https://github.com/vegas29" target="_blank" rel="noopener noreferrer" className="block mb-2">
                <i className="fa-brands fa-github text-2xl text-white hover:text-gray-200 hover:cursor-pointer"></i>
            </a>
            <a href="https://www.linkedin.com/in/diego-alejandro-perdomo/" target="_blank" rel="noopener noreferrer" className="block mb-2">
                <i className="fa-brands fa-linkedin text-2xl text-white hover:text-gray-200 hover:cursor-pointer"></i>
            </a>
            <a href="https://www.instagram.com/alejopm29/" target="_blank" rel="noopener noreferrer" className="block mb-2">
                <i className="fa-brands fa-instagram text-2xl text-white hover:text-gray-200 hover:cursor-pointer"></i>
            </a>
            <a href="https://twitter.com/AlejoNeon99" target="_blank" rel="noopener noreferrer" className="block">
                <i className="fa-brands fa-twitter text-2xl text-white hover:text-gray-200 hover:cursor-pointer"></i>
            </a>
        </div>
    </div>
  )
}
