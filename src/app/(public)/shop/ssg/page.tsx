import ProductCard, { type IProduct } from "@/components/product-card/ProductCard";
import { API_URL } from "@/shared/constants/api-constants";
import st from "./ssg.module.css";

async function ShopSSGPage() {
  const response = await fetch(API_URL);
  const products = (await response.json()) as IProduct[];

  return (
    <div className={st.products}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ShopSSGPage;
