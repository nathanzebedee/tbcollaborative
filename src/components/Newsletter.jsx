import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

import { Sidetab, Widget, PopupButton } from '@typeform/embed-react'

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
    <>
      <section id="newsletter" aria-label="Newsletter">
        <Container>
          <div className="relative -mx-4 overflow-hidden bg-[#faebfe] py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
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
                  Ready to dive in?
                </p>
                <p className="mt-4 text-lg tracking-tight text-pink-900">
                  If you want to learn more about us and what we do, join or Discord
                  server and get involved with the organization using the link provided!
                </p>
              </div>
              <div className='flex items-center'>
                <h3 className="text-lg font-semibold tracking-tight bg-pink-600 text-white rounded-xl py-1 px-4 border-2 border-transparent hover:text-pink-600 hover:bg-indigo-50 hover:border-pink-600 transition-all duration-200">
                  <a href='https://discord.gg/EzBpDrNYa7' target='_blank' rel='noreferrer' id="RbfWKOhX" style={{ fontSize: 20 }} className="my-button">
                    Join our Discord server <span className='transition-all duration-200' aria-hidden="true">&#8594;</span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div>
        <Sidetab id="RbfWKOhX" style={{ fontSize: 20 }} className="my-button">
          Get in contact with us <span aria-hidden="true">&#8594;</span>
        </Sidetab>
      </div>
    </>
  );
}
