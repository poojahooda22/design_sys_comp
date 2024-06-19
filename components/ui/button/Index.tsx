'use client'

import { VariantProps, cva } from "class-variance-authority"
import clsx from "clsx"
import { forwardRef } from "react"


const variants = cva(
    [   
        'rounded-md', 'tracking-wide',
        'cursor-pointer', 'inline-flex',
        'items-center', 'justify-center',
        'relative',
        'transition',
        'outline-none',
        'focus:scale-[0.98]',
        'disabled:cursor-not-allowed',
    ], {
    variants: {
        intent: {
            primary: ['bg-indigo-500 text-white, font-semibold'],
            secondary: [],
            destructive: [],
            link:[],
        },
        size: {
            sm: [],
            md: [],
            lg: [],
            xl: ['w-[146px] h-[60px] leading-6'],
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
            hover: [],
        }
    },
    defaultVariants: {
        intent: 'primary',
        size: 'xl',
    },
})

const Loading = () => (
    <div className="absolute inline-flex items-center">
        <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]"/>
    </div>
)

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

 const Button = forwardRef<HTMLButtonElement, Props>(function ButtonComponent
    ({ className, children, loading, ...rest},
         ref) {
        return (
            <button
                ref={ref} 
                className={clsx(
                'bg-indigo-500 text-white',
                'w-[146px] h-[60px] leading-6',
                'rounded-md',
                'font-semibold tracking-wide',
                'cursor-pointer',
                'inline-flex items-center justify-center',
                'relative shadow-md',
                
                //Hover
                'transition',
                'hover:bg-indigo-800 hover:shadow-lg',
    
                //Focus
                'outline-none',
                'ring-indigo-500/70 ring-offset-2 ',
                'focus-visible:ring-2 focus:scale-[0.98]',
    
                //Disabled
                'disabled:bg-indigo-300 disabled:cursor-not-allowed',
                className)}
                
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