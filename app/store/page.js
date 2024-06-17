import { getProducts } from "@/_lib/data-service";
import Image from "next/image";

export default async function Store() {
  const products = await getProducts();
  return (
    <div>
      <h1>Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            {/* <Image
              width={50}
              height={50}
              alt={product.name}
              src={product.picture}
            /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
