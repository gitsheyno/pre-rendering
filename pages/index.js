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

const getData = async () => {
  const pathFile = path.join(process.cwd(), "data", "data.json");
  const resData = await fs.readFile(pathFile);
  const data = JSON.parse(resData);

  return data;
};

export async function getStaticProps() {
  // const pathFile = path.join(process.cwd(), "data", "data.json");
  // const resData = await fs.readFile(pathFile);
  // const data = JSON.parse(resData);

  const data = await getData();

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
