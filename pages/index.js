import fs from "fs/promises";
import path from "path";

const HomePage = ({ products }) => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const pathFile = path.join(process.cwd(), "data", "data.json");
  const resData = await fs.readFile(pathFile);
  const data = JSON.parse(resData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
export default HomePage;
