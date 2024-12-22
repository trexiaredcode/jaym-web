  import pic1 from '/src/assets/pic1.jpg'


function Content() {
  return (
    <>




  
  <div className='flex flex-row items-center bg-black  w-full mx-auto '>
  
  
   <div className="pl-10">

        <img className="w-68 h-68 object-cover mb-6 " src={pic1} />
      
    </div>


    <div className=' border-2 border-blue-300 border-solid h-full py-36 m-10 p-5 space-x-2 '>
<h1 className='text-white text-center font-serif text-2xl tracking-widest uppercase font-bold space-x-4 mt-5 '>Good day sir, Interested to universe ?</h1>

      <p className='text-md text-white'>The universe is a vast, boundless expanse that encompasses everything that exists—matter, energy, time, and space. It is a tapestry woven with countless galaxies, stars, and planets, each telling its own unique story of creation and evolution. Scientists believe it began around 13.8 billion years ago with the Big Bang, an extraordinary explosion that set everything in motion, creating the fabric of space and time itself. Within its depths lie mysteries that have intrigued humanity for millennia, from the smallest subatomic particles to the largest cosmic structures. The universe is in a constant state of expansion, with galaxies drifting apart as dark energy fuels its growth. It operates under precise laws of physics, yet much of it remains a mystery, with dark matter and dark energy making up the majority of its composition. Despite its incomprehensible vastness, the universe fosters the conditions necessary for life, as seen on Earth, a tiny speck in an immense cosmic ocean. Its beauty is evident in the twinkling stars, swirling nebulae, and the ethereal glow of distant galaxies, inspiring awe and curiosity in those who gaze upon the night sky. The universe is not just a physical space but a source of endless wonder, pushing the boundaries of human understanding and reminding us of our connection to something infinitely greater. It is both a puzzle and a masterpiece, inviting exploration and reflection on our place within its grand design.
      </p>

  
    </div>
  </div>

       </>
  )
}

export default Content