export const Footer = () => {

    const date = new Date().getFullYear();

  return (
    <footer className="p-10">
        <p className="text-blue-500 font-bold text-xl hover:cursor-pointer text-center">{date} <span className="text-white">Alejo</span><span className="text-blue-500">.</span><span className="font-normal text-white"> | All rights reserved.</span></p>
    </footer>
  )
}
