import fs from "fs/promises";
import path from "path";
import Link from "next/link";
const HomePage = ({ products }) => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {" "}
          <Link href={`/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const pathFile = path.join(process.cwd(), "data", "data.json");
  const resData = await fs.readFile(pathFile);
  const data = JSON.parse(resData);

  if (!data) {
    return {
      redirect: {
        destination: "/no=data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
export default HomePage;
