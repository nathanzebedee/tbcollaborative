import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

import { PopupButton } from '@typeform/embed-react'

// https://discord.gg/EzBpDrNYa7 DISCORD
// https://cfy2dkiqhp9.typeform.com/to/K79B5cdo JOIN
// https://cfy2dkiqhp9.typeform.com/to/RbfWKOhX CONTACT

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-pink-900 sm:text-5xl">
                Connect with us!
              </p>
              <p className="mt-4 text-lg tracking-tight text-pink-900">
                If you are interested in collaborating with us, or have any questions, please
                use the link below to get in contact with us.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-pink-600 hover:text-pink-900">
                <PopupButton id="RbfWKOhX" style={{ fontSize: 20 }} className="my-button">
                  Get in contact with us <span aria-hidden="true">&#8594;</span>
                </PopupButton>
              </h3>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
