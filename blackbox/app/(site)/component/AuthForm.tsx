'use client';

import Input from "@/app/components/inputs/input";
import AuthSocialButton from "./AuthSocialButton";
import Button from "@/app/components/Button";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant == 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);


    if (variant == 'REGISTER') {
      axios.post('/api/register', data)
        .then((response) => {
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            toast.error(error.response.data);
          } else {
            toast.error('Registration Failed. Please Enter Correct Values');
          }
        })
        .finally(() => setIsLoading(false));
    }


    if (variant == 'LOGIN') {

      signIn('credentials', {
        ...data,
        redirect: false
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials');
          }

          if (callback?.ok && !callback?.error) {
            toast.success('Logged in!')
          }
        })
        .finally(() => setIsLoading(false));
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid Credentials');
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Logged in!')
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div
      className="
           mt-8
           sm:mx-auto
           sm:w-full
           sm:max-w-md
           rounded-lg
           bg-neutral-950 
           "

    >
      <div
        className="
               px-4
               py-8
               shadow
               sm:rounded-lg
               sm:px-10
               "
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}>
          {variant == 'REGISTER' && (
            <Input
              label="Name or Username"
              id="name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            label="Email Address"
            id="email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant == 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
                          absolute
                          insert-0
                          flex
                          items-center
                          "
            >
              <div
                className="
                            w-full 
                            border-t
                            border-gray-300"
              />

            </div>
            <div className="relative 
                          flex
                           justify-center
                            text-sm
                            "
            >
              <span className="
                            bg-neutral-
                            px-2
                            text-white">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />

          </div>
        </div>

        <div className="
                  flex
                  gap-2
                  justify-center
                  text-sm
                  mt-6
                  px-2
                  text-white
                  ">
          <div>
            {variant == 'LOGIN' ? 'New to Blackbox?' : 'Already have an account?'}
          </div>
          <div
            onClick={toggleVariant}
            className="underline cursor-pointer"
          >
            {variant == 'LOGIN' ? 'Create an account' : 'Login'}

          </div>

        </div>
      </div>

    </div>
  );
}

export default AuthForm;