import Header from "./Components/Header"
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";

function App() {
  return (
<>
<Header></Header>


    <div className="bg-red-100 p-11 flex flex-col items-center justify-center space-y-2">
      <img className="h-[340px] mx-auto mt-5" src={torong} alt="centerd-img" />

      <p className="text-pink-300 text-[40px] text-center font-extrabold "> The Vast Universe </p>
      <p className="text-black text-[15px] text-center">"Stars whisper the secrets of the universe."</p>
      <button className="bg-red-200 border-solid border-2 border-purple-300 font-bold p-3 px-5 rounded-full text-white text-center hover:bg-violet-400 ">About Me</button>
    </div>
<Blogs></Blogs>

<Content></Content>

<Footer></Footer>


</>  )
}

export default App;