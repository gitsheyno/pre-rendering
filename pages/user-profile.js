const UseProfilePae = (props) => {
  return <h1>{props.username}</h1>;
};

export default UseProfilePae;

export const getServerSideProps = async (context) => {
  return {
    props: {
      username: "Shayan",
    },
  };
};
