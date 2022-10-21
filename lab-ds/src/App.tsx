import "./styles/global.css";
import reactLogo from "./react-orange.svg";

import maskPhone from "./utils/maskPhone.js"


import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import Input from "./components/Input";

import { Envelope, Lock } from "phosphor-react";
import { User } from "phosphor-react";
import { LockSimple } from "phosphor-react";
import { CheckboxComp } from "./components/Checkbox";
import { Phone } from "phosphor-react";

import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: number;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

export const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  return (
    <section className="w-screen h-screen flex-col  bg-gray-900 flex items-center justify-center">
      <header className="flex flex-col items-center  mb-3">
        <img src={reactLogo} className="w-20 animate-spin-slow" />
        <Heading asChild={false} size={"md"}>
          Ignite Lab
        </Heading>
        <Text asChild={false} size={"md"}>
          Registration form
        </Text>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 items-stretch w-full max-w-sm"
      >
        <label htmlFor="name" className="flex flex-col gap-2  ">
          <div className="flex justify-between">
            <Heading size={"xs"} asChild={false}>
              Enter your name
            </Heading>
            {errors.firstName && (
              <p  className="text-orange-500 text-xs" >
                You must enter your name
              </p>
            )}
          </div>

          <input 
            placeholder="Your name"
            type="text"
            className="h-10 flex items-center gap-3 py-4 px-9 rounded w-full outline-none bg-gray-800 focus-within:ring-1 ring-orange-500 text-gray-400 text-xs"
            {...register("firstName",  { required: true, maxLength: 25 })}
          />
          <User className="text-orange-500 absolute text-lg mt-10 ml-2" />
        </label>

        <label htmlFor="email" className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Heading size={"xs"} asChild={false}>
              Enter your e-mail address
            </Heading>
            {errors.email && (
              <p  className="text-orange-500 text-xs ml-3" >
                You must enter a valid e-mail
              </p>
            )}
          </div>

          <input 
            placeholder="Your E-mail adress"
            type="email"
            className="h-10 flex items-center gap-3 py-4 px-9 rounded w-full outline-none bg-gray-800 focus-within:ring-1 ring-orange-500 text-gray-400 text-xs"
            {...register("email", { required: true,  pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '',
            },  })}
          />
          <Envelope className="text-orange-500 absolute text-lg mt-10 ml-2" />
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Heading size={"xs"} asChild={false}>
              Enter a password
            </Heading>
            {errors.password && (
              <p  className="text-orange-500 text-xs ml-3" >
                Minimum  8 char 1 symbol and number
              </p>
            )}
          </div>

          <input 
            placeholder="Your password"
            type="password"
            className="h-10 flex items-center gap-3 py-4 px-9 rounded w-full outline-none bg-gray-800 focus-within:ring-1 ring-orange-500 text-gray-400 text-xs"
            {...register("password", { required: true,  pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: '',
            },  })}
          />
          <Lock className="text-orange-500 absolute text-lg mt-10 ml-2" />
        </label>

        <label htmlFor="phone" className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Heading size={"xs"} asChild={false}>
              Enter a phone
            </Heading>
            {errors.phone && (
              <p  className="text-orange-500 text-xs ml-3" >
                Must be a valid number
              </p>
            )}
          </div>

          <input 
            placeholder="(88) 88888-8888"
            type="phone"
            className="h-10 flex items-center gap-3 py-4 px-9 rounded w-full outline-none bg-gray-800 focus-within:ring-1 ring-orange-500 text-gray-400 text-xs"
            {...register("phone", { required: true,  pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: '',
            },  })}

            onChange={e => maskPhone(e)}

          />
          <Phone className="text-orange-500 absolute text-lg mt-10 ml-2" />
        </label>

      
      

        

        <label htmlFor="agree" className="flex items-center gap-2 mt-2">
          <CheckboxComp />
          <Text size="sm" asChild={false}>
            I agree to the terms and conditions
          </Text>
        </label>

        <Button type="submit" text="Sign in" />
      </form>

      <footer className="flex flex-col items-center gap-4 mt-5 ">
        <a href="#" className="text-gray-400 underline hover:text-ray-200">
          Forgot your password?
        </a>
      </footer>
    </section>
  );
};
