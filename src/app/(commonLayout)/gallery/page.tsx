import Image from "next/image";


const GalleryPage = () => {
    return (
        <div className="text-center mx-auto">
           <h1>Regular image</h1> 
           <div>
           <img src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738576601/man-choosed-motorcycles-moto-shop-guy-black-jacket-manager-with-client_1157-43592_tcjzsm.avif" alt="" />
           </div>

           <h1>Next js image </h1>
           <Image
           width={500}
           height={500}
           src={'https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738576601/man-choosed-motorcycles-moto-shop-guy-black-jacket-manager-with-client_1157-43592_tcjzsm.avif'} alt="A guy buy motor cycle" />
        </div>
    );
};

export default GalleryPage;