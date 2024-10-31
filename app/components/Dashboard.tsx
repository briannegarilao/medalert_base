import { getUsers } from "../config/firebase";

const Dashboard = async () => {
  const name = await getUsers();

  return <div className="">{name[0].name}</div>;
};

export default Dashboard;
