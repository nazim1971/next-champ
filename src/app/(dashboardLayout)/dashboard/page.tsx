"use client"
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  }
  return (
    <div className="text-center ">
      <h1 className="text-3xl mb-4">This is Dashboard page </h1>

      <div>
        <button onClick={handleNavigate} className="bg-blue-500 p-3 rounded-lg">
          Home
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
