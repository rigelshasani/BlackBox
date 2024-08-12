'use client';

import clsx from 'clsx';
import { BlockList } from 'net';
import { flushAllTraces } from 'next/dist/trace';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';
import { BiSolidMessageRoundedCheck } from 'react-icons/bi';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
    
}


const Input2: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled



}) => {
    return (
        <div>
            <label
               className="
                  block
                  text-sm
                  font-medium
                  leading-6
                  text-black
                  "
                  htmlFor={id}
                  > 
                  {label}
                    </label>
                    <div className="mt-2">
                        <input 
                            id={id}
                            type={type}
                            autoComplete={id}
                            disabled= {disabled}
                            {...register(id, { required})}
                            className={clsx(`
                            form-input
                            block
                            w-full
                            rounded-md
                            border-0
                            py-1.5
                            bg-white 
                            text-black
                            shadow-sm
                            ring-1 
                            ring-insert
                            ring-gray-300
                            placeholder:text-gray-400 
                            foucus:ring-2
                            focus:ring-sky-600
                            sm:text-sm
                            sm:leading-6`,
                            errors[id] && "focus: ring-rose-500",
                            disabled &&"opacity-50 cursor-default"
                            )}
                            />
                    </div>
                   
        </div>
    );
}

export default Input2;