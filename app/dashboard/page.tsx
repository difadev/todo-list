import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");
  return (
    <main className="justify-between p-24">
      <p>Category</p>
      <p>Sub Category</p>
      <p>Description</p>
      <p>Date</p>
    </main>
  );
}
