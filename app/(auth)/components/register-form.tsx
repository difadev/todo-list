"use client"

import * as z from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { useState, useTransition } from "react"
import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "./form-error";
import { doRegister } from "@/@core/actions/register/register";
import { FormSuccess } from "./form-success";


export const RegisterForm = () => {
  // const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();


  const form = useForm<z.infer<typeof RegisterSchema>>( // Update this line
    {
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
        fullName: '',
        email: "",
        password: ""
      }
    }
  );

  const onSubmit = (values:z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      doRegister(values)
        .then((data:any) => {
          if(data?.error) {
            setError(data?.error)
            setTimeout(() => {
              setError('')
            }, 500)
          } else {
            setMessage("Success Insert Data")
            setTimeout(() => {
              setMessage('')
            }, 500)
          }
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account"
      backButtonHref="/sign-in"
      headerTitle="Register"
      >
      <FormSuccess message={message} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}  
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      disabled={isPending}
                      placeholder="John Doe"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage/>  
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage/>  
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage/>  
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full">
              Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}