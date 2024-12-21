import { RiReactjsLine } from "react-icons/ri";
import { FaNextJs, FaVuejs, FaNodeJs, FaLaravel, FaDatabase } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <FaNextJs className="text-7xl text-black" />
        </div>
        <div className="p-4">
          <FaVuejs className="text-7xl text-green-400" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="p-4">
          <FaLaravel className="text-7xl text-red-400" />
        </div>
        <div className="p-4">
          <FaDatabase className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;