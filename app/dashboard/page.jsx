
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Form from "../components/Form";
import { redirect } from "next/navigation";

async function Dashboard() { 
  const {isAuthenticated} = getKindeServerSession(); 
  const isLoggedIn = await isAuthenticated(); 
  if(!isAuthenticated){ 
    redirect("api/auth/login"); 
  }
  return (
    
    <main className="py-10 px-5 flex-1 items-center flex flex-col">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="text-2xl  mb-3">Type your ToDos below</p>
      <Form />
    </main> 
    
  );
}

export default Dashboard;
