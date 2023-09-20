import fs from "fs/promises";
import path from "path";

const ProductDetailPage = ({ loadedProduct }) => {
  // if (!loadedProduct) {
  //   return <p>...loading</p>;
  // }
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }],
    fallback: "blocking",
  };
}
export default ProductDetailPage;
