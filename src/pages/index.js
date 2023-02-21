const Homepage = () => <div>Homepage</div>;

export default Homepage;

// Page.getInitialProps = async ({ query }) => {
//   const res = await fetch(
//     `https://api.challonge.com/v1/tournaments/brooklyn-shuffleboard-singles3/participants.json?api_key=${process.env.CHALLONGE_API_KEY}`
//   );
//   const data = await res.json();
//   return { data: data };
// };
