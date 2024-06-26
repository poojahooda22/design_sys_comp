'use client'

import { VariantProps, cva } from "class-variance-authority"
import clsx from "clsx"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"


const variants = cva(
    [   
        'rounded-md', 
        'tracking-wide',
        'cursor-pointer', 
        'inline-flex',
        'items-center', 
        'justify-center',
        'relative',
        'transition',
        'outline-none',
        'focus:scale-[0.98]',
        'disabled:cursor-not-allowed',
    ], {
    variants: {
        intent: {
            primary: [
                'bg-indigo-500',
                'text-white',
                'font-semibold',
                'shadow',
                'ring-offset-2',
                'focus-visible:ring-2',
                'hover:bg-indigo-600',
                'disabled:bg-indigo-300',
            ],
            secondary: [
                'font-semibold',
                'bg-gray-50',
                'hover:bg-gray-400',
                'disabled:bg-gray-50',
                'text-gray-950',
                'shadow',
                'border',
                'border-neutral-200/50',
                'ring-offset-2',
                'focus-visible:ring-2',
                'ring-gray-200',
            ],
            destructive: [
                'font-semibold',
                'bg-red-500',
                'hover:bg-red-600',
                'text-white',
                'shadow',
                'hover:shadow-md',
                'disabled:bg-red-500/50',
                'disabled:shadow',
                'ring-offset-2',
                'focus-visible:ring-2',
                'ring-red-500',
            ],
            link:[
                'font-light',
                'text-indigo-500',
                'hover:text-indigo-600',
                'disabled:text-indigo-500/50',
                'disabled:no-underline',
                'hover:underline',
                'ring-indigo-300',
                'focus-visible:ring-1',
            ],
        },
        size: {
            small: [
                'w-[103px]', 'h-[36px]', 'text-sm', 'leading-4'
            ],
            medium: [
                'w-[107px]', 'h-[40px]', 'text-sm', 'leading-4'
            ],
            large: [
                'w-[125px]', 'h-[48px]', 'text-base', 'leading-5'
            ],
            xl: [
                'w-[146px]', 'h-[60px]', 'text-lg', 'leading-6'
            ],
        },
        icon: {
            false: [],
            left: [],
            right: [],
            only: [],
        },
        state: {
            active: [],
            disabled: [],
            focus: [],
            hover: ['bg-indigo-700', 'shadow-md'],
        }
    },
    defaultVariants: {
        intent: 'primary',
        size: 'xl',
    },
})

const Loading = () => (
    <div className="absolute inline-flex items-center">
        <div 
            className="w-4 h-4 rounded-full border-2 
            border-b-transparent animate-spin 
            border-[inherit]"
        />
    </div>
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
    VariantProps<typeof variants> & {
        loading?: boolean
    }

 const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonComponent
    ({ className, intent , size, children, loading, ...rest},
         ref) {
        return (
            <button
                ref={ref} 
                className={twMerge(variants({intent, size, className}))}
                {...rest}
            >
                {loading && <Loading /> }
                <span
                    className={clsx('transition', {
                        'opacity-0': loading,
                        'opacity-100': !loading,
                    })}
                >{children}</span>
            </button>
        ) 
        
    }
 )

 Button.displayName = 'Button'

 export { Button }
 export type { ButtonProps }