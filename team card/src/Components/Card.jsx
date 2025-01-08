import girl from '../assets/girl.png';
import illustrat from '../assets/illustrat.png';

const Card = () => {
  return (
    <div>
      <div className="h-[300px] w-[230px] text-white flex flex-wrap items-end mx-auto mt-20 relative overflow-visible group">
        <div className="h-[250px] w-[600px] bg-blue-600 relative">
          <img 
            src={illustrat} 
            alt="Illustration" 
            className="absolute -top-6 left-0 h-[200px] w-[250px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 object-cover"
          />
          <img 
            src={girl} 
            alt="Girl" 
            className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 w-[200px] h-[349px] object-cover drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-black">Bikash Chaudhary</h1>
          <p className="text-lg text-gray-600">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
