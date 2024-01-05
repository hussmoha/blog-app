import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";




function Home() { 
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Welcome to <br/> <span className="text-6xl">DoAnything</span>
      </h1>
      <p className="text-xl mb-5">
        Log in and list your todos for free!
      </p> 
      <div className="flex flex-row space-x-3 " >
      
      <LoginLink className="bg-zinc-900 text-white py-2 px-5 rounded-md mt-10">Sign in</LoginLink> 
      <RegisterLink className="bg-zinc-500 text-white py-2 px-5 rounded-md mt-10">Sign up</RegisterLink>
      
    </div> 
    </div>
  );
}

export default Home;
