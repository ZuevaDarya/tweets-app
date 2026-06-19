import Image from "next/image";
import st from "./product-card.module.css";

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

function ProductCard({ title, image, price }: IProduct) {
  return (
    <div className={st.product}>
      <Image width={100} height={40} src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;
