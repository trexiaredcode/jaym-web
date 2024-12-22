
function Footer() {

    const currentYear = new Date().getFullYear();

  return (

    
    <div className="flex items-center justify-center border-solid border-2 border-blue-300 p-1 pl-60 bg-violet-900">
 
    <div className="flex items-center">
        <p className="font-[Quicksand] text-lg text-white font-bold tracking-widest pl-60">© {currentYear} Jayy Web dev. All rights reserved.</p>
    </div>

    <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col text-center">        </div>
    </div>
        </div>
  )
}

export default Footer
