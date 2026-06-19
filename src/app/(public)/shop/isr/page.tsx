import ProductCard, { type IProduct } from "@/components/product-card/ProductCard";
import { API_URL } from "@/shared/constants/api-constants";
import st from "@/app/(public)/shop/ssg/ssg.module.css";

async function ShopISRPage() {
  const response = await fetch(API_URL, {
    next: { revalidate: 300 },
  });
  const products = (await response.json()) as IProduct[];

  return (
    <div className={st.products}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ShopISRPage;
