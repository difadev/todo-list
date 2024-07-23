"use client"
import * as z from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { doCredentialLogin } from "@/@core/actions/login/login"
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
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "./form-error";
import { useRouter } from "next/navigation";


export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();


  const form = useForm<z.infer<typeof LoginSchema>>( // Update this line
    {
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    }
  );

  const onSubmit = (values:z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      doCredentialLogin(values)
        .then((data:any) => {
          if(data?.error) {
            setError(data?.error)
            setTimeout(() => {
              setError('')
            }, 1000)
          } else {
            router.push('/dashboard');
          }
        }).catch((error) => {
          setError(error)
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/register"
      showSocial
      headerTitle="Sign in"
      >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}  
          className="space-y-6"
        >
          <div className="space-y-4">
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
              Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}