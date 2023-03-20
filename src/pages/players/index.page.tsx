import type { GetServerSideProps, NextPage } from "next";

type Props = {
  username: string;
  name: string;
};

const UserProfile: NextPage<Props> = (props) => {
  const { username, name } = props;
  return <div>{username}</div>;
};

export default UserProfile;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params, req, res } = context;

  return {
    props: {
      name: "Adam Fratino",
      username: "adam-fratino",
    },
  };
};
