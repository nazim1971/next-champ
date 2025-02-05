import Image from "next/image";
type TProduct = {
    id: number;
    productName: string;
    category: string;
    brand: string;
    price: number;
    image: string;
  };
  

const ProductsPage =async () => {

    const res = await fetch("http://localhost:5000/products", {
        next: {
         revalidate: 30
        }
       } );
     
       const products: TProduct[] = await res.json() 

    return (
        <div>
           <h1 className="text-4xl text-center"> This is product page.</h1>

            <div className="flex flex-wrap gap-7">
                   {products.map((i) => (
                     <div key={i.id} className="bg-gray-500 p-4 rounded-xl font-medium  ">
                       <h2> {i.productName} </h2>
                       <Image width={300} height={300} src={i.image} alt='a image' />
                       <h2> {i.category} </h2>
                       <h2> {i.brand} </h2>
                       <h2> {i.price} </h2>
                       
                     </div>
                   ))}
                 </div>
        </div>
    );
};

export default ProductsPage;