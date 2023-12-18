import Hero from '@/components/Hero'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>
      <section className='bg-gray-100'>
        
      </section>
    </>
  )
}