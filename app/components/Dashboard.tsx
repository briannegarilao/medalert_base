import { getUsers } from "../config/firebase";

const Dashboard = async () => {
  const name = await getUsers();

  return (
    <div
      className="
    flex
    flex-col
    items-center
    justify-center
    p-6
    gap-6
    shadow-[8px_8px_20px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(230,230,230,0.2)]
    rounded-[15px]
    "
    >
      <div
        className="
      flex
      flex-col
      gap-6
      pl-16
      pr-48
      text-sm"
      >
        <h1 className="text-5xl ">User Information</h1>
        <div className="flex flex-col">
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Role: Patient</p>
        </div>
        <div className="flex flex-col">
          <h2 className="">Medications</h2>
          <div className="pl-4 ">
            <p>Name: Aspirin</p>
            <p>Dosage: 100mg</p>
            <p>Last Taken: 2024-01-01T08:00:00Z</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Notifications</h2>
          <div className="pl-4">
            <p>Message: It's time to take your Aspirin (100mg)</p>
            <p>Time: 2024-01-01T08:00:00Z</p>
          </div>
        </div>
      </div>
      <button className="btn btn-ghost">Change Values</button>
    </div>
  );
};

export default Dashboard;
