import Image from "next/image";
import localImg from '../../../assets/localImg.avif'

const GalleryPage = () => {
    return (
        <div className="text-center mx-auto">

           <h1>Next js image </h1>
           <Image
           width={500}
           height={500}
           src={localImg} alt="A guy buy motor cycle" />
        </div>
    );
};

export default GalleryPage;