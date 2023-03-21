import ProductBlogList from "../../Components/ProductBlogList/ProductBlogList";
import ProductList from "../../Components/ProductList/ProductList";
import Baner from "../Menu/Baner";

export default function Home() {
  return (
    <>
      <Baner></Baner>
      <ProductList></ProductList>
      <ProductBlogList></ProductBlogList>
    </>
  );
}
