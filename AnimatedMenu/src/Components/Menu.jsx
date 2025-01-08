import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import spaghetti1 from '../assets/spaghetti1.png'
import chilly from '../assets/chilly.png'
import corriander from '../assets/corriander.png'
import pudina from '../assets/pudina.png'
import tomato from '../assets/tomato.png'



const Menu = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true, // whether the animation should happen only once
          easing: 'ease-out', // easing function
        });
      }, []);

    
  return (
    <div>
      <section className="relative h-full">

<h1 className='text-center text-4xl mt-10 font-serif' 
data-aos="fade-down"
  data-aos-delay="100" >Menu </h1>
{/* Decorative Circle 1 */}
<div 
  className="absolute w-12 h-12 top-4 -left-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 rounded-full border-gray-200"
  data-aos="fade-in"
>
</div>

{/* First Section */}
<div 
  className="absolute top-[50px] left-5 sm:left-10 md:left-20 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0"
  data-aos="fade-up"
  data-aos-delay="100"
>
  <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-2 rounded-full flex items-center justify-center border-gray-200">
    <img src={spaghetti1} alt="Spaghetti" className="w-3/4 h-auto" />
  </div>
  <div className="text-center md:text-left">
    <h1 className="text-black font-bold text-xl sm:text-2xl">Meat Frying</h1>
    <p className="text-sm sm:text-base w-56 sm:w-60">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <span>
        <img src={pudina} alt="spaghetti" className="mask-bg ml-40 h-10 drop-shadow-xl" />
      </span>
    </p>
  </div>
</div>

{/* Decorative Circle 2 */}
<div 
  className="absolute w-12 h-12 top-[300px] right-5 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 rounded-full border-gray-200 flex items-center justify-center"
  data-aos="zoom-in"
>
  <img src={tomato} alt="tomato" className="h-10 sm:h-12 md:h-16" />
</div>

{/* Second Section */}
<div 
  className="absolute top-[400px] right-5 sm:right-10 md:right-20 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0"
  data-aos="fade-left"
  data-aos-delay="200"
>
  <div className="text-center md:text-right">
    <h1 className="text-black font-bold text-xl sm:text-2xl">Meat Frying</h1>
    <p className="text-sm sm:text-base w-56 sm:w-60">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
  </div>
  <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-2 rounded-full flex items-center justify-center border-gray-200 ">
    <img src={spaghetti1} alt="Spaghetti" className="w-3/4 h-auto" />
  </div>
</div>

{/* Decorative Circle 3 */}
<div 
  className="absolute w-12 h-12 top-[600px] left-5 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 rounded-full border-gray-200 flex items-center justify-center"
  data-aos="flip-left"
>
  <img src={chilly} alt="chilly" className="h-8 sm:h-10 md:h-12" />
</div>

{/* Third Section */}
<div 
  className="absolute top-[700px] left-5 sm:left-10 md:left-20 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0"
  data-aos="fade-right"
  data-aos-delay="300"
>
  <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-2 rounded-full flex items-center justify-center border-gray-200">
    <img src={spaghetti1} alt="Spaghetti" className="w-3/4 h-auto" />
  </div>
  <div className="text-center md:text-left">
    <h1 className="text-black font-bold text-xl sm:text-2xl">Meat Frying</h1>
    <p className="text-sm sm:text-base w-56 sm:w-60">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
  </div>
</div>

{/* Decorative Circle 4 */}
<div 
  className="absolute w-12 h-12 top-[900px] right-5 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 rounded-full border-gray-200 flex items-center justify-center"
  data-aos="zoom-out"
>
  <img src={corriander} alt="corriander" className="h-18 sm:h-10 md:h-20" />
</div>

{/* Fourth Section */}
<div 
  className="absolute top-[1000px] right-5 sm:right-10 md:right-20 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0"
  data-aos="fade-up"
  data-aos-delay="400"
>
  <div className="text-center md:text-right">
    <h1 className="text-black font-bold text-xl sm:text-2xl">Meat Frying</h1>
    <p className="text-sm sm:text-base w-56 sm:w-60">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
  </div>
  <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-2 rounded-full flex items-center justify-center border-gray-200">
    <img src={spaghetti1} alt="Spaghetti" className="w-3/4 h-auto" />
  </div>
</div>
</section>
    </div>
  )
}

export default Menu
