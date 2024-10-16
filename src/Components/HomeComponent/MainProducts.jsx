import React from 'react';
import agri from '../../assets/agri.jpg';
import amusement from '../../assets/amusement.jpeg';
import graining from '../../assets/graining.jpeg';
import forklift from '../../assets/forklift 1.jpg';
import experts from '../../assets/experts.png';

const MainProducts = () => {
  const products = [
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative  for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen mt-5">
      {/* Major Products Header */}
      <h2 className="text-4xl font-bold mb-8 text-orange-500">Major Products</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-6" data-aos="fade-down">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl w-80 border border-orange-500"
          >
            <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2 w-full">{product.description}</p>
            </div>
            {/* Button Centered */}
            <div className="flex justify-center p-4">
              <button className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600">
                More items...
              </button>
            </div>
          </div>
        ))}
      </div>
      <div class="bg-gray-100 font-[sans-serif] relative mx-auto rounded overflow-hidden mt-4 w-full">
        <div class="grid sm:grid-cols-2 items-center max-sm:gap-10 py-10 border-y-8 border-orange-400">
          <div class="text-center px-6">
            <h3 class="font-extrabold text-5xl text-orange-500 leading-tight">
              <span class="text-gray-800">Precision</span> Machinery Manufacturing
            </h3>
            <h6 class="text-2xl text-gray-800 mt-2">Quality You Can Trust</h6>
            <p class="text-gray-800 text-base leading-relaxed mt-4">
              Delivering high-performance machinery built with precision engineering. Our manufacturing process ensures durability, efficiency, and innovative design for industrial excellence.
            </p>

            <button type="button" class="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
              Explore Our Machines
            </button>
          </div>

          <div class="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-tl-full rounded-bl-full w-full h-max" data-aos="fade-left">
            <div class="p-2">
              <img src={experts} class="h-64 w-64 rounded-full object-cover border-4 border-white" alt="machinery image" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MainProducts;
