import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-full bg-gray-900 bg-opacity-70 absolute flex justify-center items-center">
      <InfinitySpin width="200" color="#FF6B09" />
    </div>
  );
};

export default Loader;
