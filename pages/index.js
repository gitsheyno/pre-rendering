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
  return {
    props: {
      products: [{ id: "p1", title: "product 1" }],
    },
  };
}
export default HomePage;
