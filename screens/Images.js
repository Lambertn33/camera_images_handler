import ImagesList from "../components/images/ImagesList";
import { useSelector } from "react-redux";

const Images = () => {
  const imagesList = useSelector((state) => state.images.images);
  console.log(imagesList);
  return <ImagesList images={[]} />;
};

export default Images;
