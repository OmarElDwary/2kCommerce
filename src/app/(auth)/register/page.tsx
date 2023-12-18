"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCredientialsValidator, TAuthCredientialsValidator } from "@/lib/account-credentials";
import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredientialsValidator>({
    resolver: zodResolver(AuthCredientialsValidator),
  })

  const { data } = trpc.anyApiRoute.useQuery();
  console.log(data)
  // registeration form submission
  const onRegister = ({ email, password, firstName, lastName }: TAuthCredientialsValidator) => {
    console.log(data)
  }
  return (
    <div>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto f;ex w-full flex-col justify-center space-x-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Register</h1>
            <div className="grid gap-6">
              <form onSubmit={handleSubmit(onRegister)}>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="emai">Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({ "focus-visible:ring-red-700": errors.email })}
                    placeholder="email"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="first name">First Name</Label>
                  <Input
                    {...register('firstName')}
                    className={cn({ "focus-visible:ring-red-700": true })}
                    placeholder="first name"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="emai">Last Name</Label>
                  <Input
                    {...register('lastName')}
                    className={cn({ "focus-visible:ring-red-700": errors.password })}
                    placeholder="last name"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="emai">Password</Label>
                  <Input
                    {...register('password')}
                    className={cn({ "focus-visible:ring-red-700": true })}
                    placeholder="password"
                    type='password'
                  />
                </div>
                <Button>Register</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
