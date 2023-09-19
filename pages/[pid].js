import fs from "fs/promises";
import path from "path";

const ProductDetailPage = ({ loadedProduct }) => {
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const pathFile = path.join(process.cwd(), "data", "data.json");
  const resData = await fs.readFile(pathFile);
  const data = JSON.parse(resData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}
export default ProductDetailPage;
