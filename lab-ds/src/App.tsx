import "./styles/global.css";
import reactLogo from "./react-orange.svg";

/* import maskPhone from "./utils/maskPhone.js"
 */

import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import Input from "./components/Input";

import { Envelope } from "phosphor-react";
import { User } from "phosphor-react";
import { LockSimple } from "phosphor-react";
import { CheckboxComp } from "./components/Checkbox";
import { Phone } from "phosphor-react";


import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export const App = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
  return (
    <section className="w-screen h-screen flex-col  bg-gray-400 flex items-center justify-center">
      <header className="flex flex-col items-center  mb-3">
        <img src={reactLogo} className="w-20 animate-spin-slow" />
        <Heading asChild={false} size={"md"}>
          Ignite Lab
        </Heading>
        <Text asChild={false} size={"md"}>
          Registration form
        </Text>
      </header>

      <form  onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 items-stretch w-full max-w-sm"
      >
        <label htmlFor="name" className="flex flex-col gap-2">
          <Heading size={"xs"} asChild={false}>
            Enter your name
          </Heading>

          <Input type={""} placeholder={""} {...register("exampleRequired", { required: true })} />
       
        
           


        </label>

        <label htmlFor="agree" className="flex items-center gap-2 mt-2">
          <CheckboxComp />
          <Text size="sm" className="text-gray-200" asChild={false}>
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
