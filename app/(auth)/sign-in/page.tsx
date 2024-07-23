
import { db } from "@/lib/db";
import { LoginForm } from "../components/login-form";
 
export async  function SignIn() {

  const user = await db.user.findFirst();
  console.log(user)
  return (
    <LoginForm/>
  )
}

export default SignIn;