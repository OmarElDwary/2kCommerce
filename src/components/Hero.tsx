import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Hero = () => {
  return (
    <MaxWidthWrapper>
        <section className='mx-0 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
            <div className='mb-6 w-full flex flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
                <h1 className='mb-4 text-4xl font-bold text-primary'>
                    Best place for technology products
                </h1>
                <p className='text-black max-w-md leading-relaxed xl:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
                </p>
            </div>
            <div className='w-full lg:w-2/3 flex md:mb-16 mb-12'>
                <div className='relative left-12 top-12 z-10 overflow-hidden rounded-lg bg-transparent shadow-lg md:left-16 md:top-16 lg:ml-0'>
                    <Image 
                        src='/vercel.svg'
                        width={500}
                        height={500}
                        className='object-cover w-full h-full'
                        alt='hero image'
                    />
                </div>
                <div className='overflow-hidden rounded-lg bg-transparent shadow-lg'>
                    <Image 
                        src='/vercel.svg'
                        width={500}
                        height={500}
                        className='object-cover w-full h-full'
                        alt='hero image'
                    />
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-8 md:flex-row justify-between items-center'>
            <div className='flex h-12 w-96 divide-x overflow-hidden rounded-lg border'>
                <Link 
                href='/Mobiles'
                className='flex w-1/4 items-center justify-center text-gray-600 hover:text-white hover:bg-primary active:bg-gray-200'>
                    Mobiles
                </Link>
                <Link 
                href='/Mobiles'
                className='flex w-1/4 items-center justify-center text-gray-600 hover:text-white hover:bg-primary active:bg-gray-200'>
                    Laptops
                </Link>
                <Link 
                href='/Mobiles'
                className='flex w-1/4 items-center justify-center text-gray-600 hover:text-white hover:bg-primary active:bg-gray-200'>
                    Camera
                </Link>
                <Link 
                href='/Mobiles'
                className='flex w-1/4 items-center justify-center text-gray-600 hover:text-white hover:bg-primary active:bg-gray-200'>
                    Accesories
                </Link>
            </div>
        </div>
    </section>
    </MaxWidthWrapper>
  )
}

export default Hero