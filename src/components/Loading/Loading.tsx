import { Image } from "@chakra-ui/react";
import loader from '../../assets/loader.gif'

const Loading = () => {
  return (
    <div className="container-loading">
    <Image src={loader} alt="Loader.." />
  </div>
  );
};

export default Loading;
