import { useEffect } from "react";

const Page = ({ data }) => {
  useEffect(() => console.log(data), [data]);
  return <div>hi</div>;
};

export default Page;

Page.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://api.challonge.com/v1/tournaments/brooklyn-shuffleboard-singles3/participants.json?api_key=${process.env.CHALLONGE_API_KEY}`
  );
  const json = await res.json();
  return { data: json };
};
