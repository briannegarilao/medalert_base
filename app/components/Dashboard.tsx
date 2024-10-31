import { getUsers } from "../config/firebase";

const Dashboard = async () => {
  const name = await getUsers();

  return (
    <div
      className="
    flex
    flex-col
    gap-4
    p-8
    rounded-[15px]
    shadow-[8px_8px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.2)]"
    >
      <h1 className="text-2xl font-bold">User Information</h1>
      <div className="flex flex-col gap-1">
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Role: Patient</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Medications</h2>
        <div className="pl-4">
          <p>Name: Aspirin</p>
          <p>Dosage: 100mg</p>
          <p>Last Taken: 2024-01-01T08:00:00Z</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="pl-4">
          <p>Message: It's time to take your Aspirin (100mg)</p>
          <p>Time: 2024-01-01T08:00:00Z</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
