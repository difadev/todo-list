"use client"
import { doCredentialLogin } from "@/@core/actions/login/login";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
 
export function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleFormSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget)
      const response = await doCredentialLogin(formData);
      if(!!response.error) setError(response.error.message);
      else router.push('/');
    } catch(error:any) {
      setError('Check your credentials');
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        {error && (
          <Alert className="mb-2">
            <Terminal className="h-4 w-4" />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <div className="m-auto text-center border border-red-900 rounded p-5 bg-red-300">
          <span className="text-2xl block">Welcome back!</span>
          <form onSubmit={handleFormSubmit}>
            <label className="block text-lg">Email</label>
            <input type="email" className="block bg-red-400 border border-red-800 rounded p-0.5" name="email" id="emailaddress"/>
            <label className="block text-lg">Password</label>
            <input type="password" className="block bg-red-400 border border-red-800 rounded p-0.5" name="password" id="password"/>
            <Button type="submit" className="w-full mt-2">Login</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;