import { bids as bidsSchema } from "@/db/schema";
import {database} from '@/db/database'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import Logout from "@/components/logout/logout";

export default async function Home() {
  const bids = await database.query.bids.findMany();
  const session = await auth();
  if (!session?.user) redirect("/sign-in");
  return (
    <main className="justify-between p-24">
      {session?.user?.name && session?.user?.image ? (
        <>
            <h1 className="text-3xl my-2">
                Welcome, {session?.user?.name}
            </h1>
            <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={72}
                height={72}
                className="rounded-full"
            />
        </>
        ) : (
            <h1 className="text-3xl my-2">
                Welcome, {session?.user?.email}
            </h1>
        )}
        <Logout />
      <form
        action={async(formData: FormData) => {
          "use server"
          const bid = formData.get('bid') as string;
          await database.insert(bidsSchema).values({ })
          revalidatePath('/')
        }}
      >
        <Input name="bid" placeholder="Bid"/>
        <Button type="submit">Place Bid</Button>
      </form>
      {
        bids.map((item) => (
          <p key={item.id}>{item.id}</p>
        ))
      }
    </main>
  );
}
