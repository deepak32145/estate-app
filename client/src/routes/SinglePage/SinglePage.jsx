import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>SinglePage</div>;
};

export default SinglePage;
