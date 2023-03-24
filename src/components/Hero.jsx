import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-[#ffeefe]">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-pink-600 sm:text-7xl">
            <span className="sr-only">We love </span> The Blockchain Collaborative
          </h1>
          <h2 className="font-display text-5xl font-bold tracking-tighter text-pink-600 sm:text-5xl">
            at Baylor University
          </h2>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-pink-900">
            <p>
              We are The Blockchain Collaborative at Baylor University — an organization dedicated to 
              raising the leaders of the decentralized future.
            </p>
            <p>
              Our mission is simple: We hope to contribute to a world where we value skills and relationships over careers and money; where we are passionate about building and creating things in a self-motivated and self-directed way.
            </p>
          </div>
          <Button target='_blank' rel='noreferrer' href="https://cfy2dkiqhp9.typeform.com/to/K79B5cdo" className="mt-10 w-full sm:hidden">
            Join the club
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Campus', 'Baylor University'],
              ['Building', 'Hankamer School of Business'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-pink-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-pink-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
