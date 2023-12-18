import Link from 'next/link'
import React from 'react'
import { Icons } from './Icons'
import MaxWidthWrapper from './MaxWidthWrapper'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Cart from './Cart'

const Navbar = () => {

    const user = null;
    return (
        <MaxWidthWrapper>
            <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
                <header className='relative bg-white'>
                    <div className='border-b border-gray-300'>
                        <div className='flex h-16 items-center'>
                            {/* Mobile navigation */}
                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>
                            <div className='hidden z-50 lg:block lg:self-stretch'>
                                <NavItems />
                            </div>
                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {user ? null : (
                                        <>
                                            <Link href='/login'
                                                className={buttonVariants({
                                                    variant: 'ghost',
                                                    size: 'sm',
                                                    className: 'text-sm font-medium text-black'
                                                })}
                                            >
                                                Sign in
                                            </Link>
                                            <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                                            <Link href='/register'
                                                className={buttonVariants({
                                                    variant: 'secondary',
                                                    size: 'sm',
                                                    className: 'text-sm font-medium text-gray-900'
                                                })}
                                            >
                                                Sign up
                                            </Link>
                                            <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                                        </>
                                    )}
                                    {user ? (
                                        <div>
                                            <span className='inline-flex rounded-md shadow-sm'>
                                                <Link href='/account'
                                                    className={buttonVariants({
                                                        variant: 'ghost',
                                                        size: 'sm',
                                                        className: 'text-sm font-medium text-black'
                                                    })}
                                                >
                                                    Account
                                                </Link>
                                            </span>
                                        </div>
                                    ) : null}
                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </MaxWidthWrapper>
    )
}

export default Navbar