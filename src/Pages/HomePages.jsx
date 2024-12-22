import { Link } from 'react-router';
import bg from '/src/assets/bg.jpg'; // Replace with your image path

const HomePages = () => {
  return (
    <>
      <div
        className="p-11 flex flex-col items-center justify-center space-y-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <p className="text-white text-[100px] text-center font-extrabold">
          The Vast Universe
        </p>
        <p className="text-white text-[40px] text-center">
          "The universe reflects our curiosity."
        </p>
        <Link
          to="/about"
          className="transition duration-300 bg-blue-800 border-solid border-2 border-blue-900 font-bold p-3 px-5 rounded-full text-white text-center hover:bg-black"
        >
          What is the Universe?
        </Link>
        <section id="services" className="py-20 px-6">
        <h2 className="text-4xl font-semibold text-center text- mb-12 text-white">
          THE UNIVERSE PARTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Stars</h3>
            <p className="text-gray-600">Stars are massive celestial bodies composed primarily of hydrogen and helium, undergoing nuclear fusion in their cores. This process releases energy in the form of light and heat. Stars are formed from clouds of gas and dust that collapse under gravity, eventually igniting nuclear reactions. They vary in size, color, and temperature, with the most common type being yellow stars like our Sun. Over time, stars go through life cycles, eventually exhausting their fuel, and can end as white dwarfs, neutron stars, or black holes, depending on their mass.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Galaxies</h3>
            <p className="text-gray-600">Galaxies are vast collections of stars, gas, dust, and dark matter bound together by gravity. They can range in size from a few million to trillions of stars. Galaxies come in different shapes, including spiral, elliptical, and irregular. The Milky Way is the galaxy that contains our solar system. Galaxies are constantly moving and interacting with each other, often colliding and merging over time. They are fundamental building blocks of the universe, and the study of galaxies helps scientists understand the large-scale structure of the cosmos.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Planets</h3>
            <p className="text-gray-600">Galaxies are vast collections of stars, gas, dust, and dark matter bound together by gravity. They can range in size from a few million to trillions of stars. Galaxies come in different shapes, including spiral, elliptical, and irregular. The Milky Way is the galaxy that contains our solar system. Galaxies are constantly moving and interacting with each other, often colliding and merging over time. They are fundamental building blocks of the universe, and the study of galaxies helps scientists understand the large-scale structure of the cosmos.</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default HomePages;
