import { useEffect, useId, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import sarahDelOlmoImage from '@/images/avatars/sarah-del-olmo.jpeg'
import nathanGalindoImage from '@/images/avatars/nathan-galindo.jpeg'
import nathanHennighImage from '@/images/avatars/nathan-hennigh.jpeg'
import jinhaengLeeImage from '@/images/avatars/jinhaeng-lee.jpeg'
import coleFlennikenImage from '@/images/avatars/cole-flenniken.jpeg'
import jackReymondImage from '@/images/avatars/jack-reymond.jpeg'
import jeffDonahooImage from '@/images/avatars/jeff-donahoo.jpg'
import faithTechImage from '@/images/avatars/faith-tech.jpg'
import solanaImage from '@/images/avatars/solana.jpg'
import BAFImage from '@/images/avatars/baf.jpg'




const days = [
  {
    name: 'Leadership Team',
    speakers: [
      {
        name: 'Nathan Galindo',
        role: 'Co-President, Head of Engineering',
        url: 'https://www.linkedin.com/in/nathan-galindo-840835195/',
        image: nathanGalindoImage,
      },
      {
        name: 'Nathan Hennigh',
        role: 'Co-President, Head of Research',
        url: 'https://www.linkedin.com/in/nathan-hennigh/',
        image: nathanHennighImage,
      },
      {
        name: 'Sarah Del Olmo',
        role: 'Vice President, Head of Design and Operations',
        url: 'https://www.linkedin.com/in/sarahdelolmo/',
        image: sarahDelOlmoImage,
      },
      {
        name: 'Jinhaeng Lee',
        role: 'Head of Outreach and Community Development',
        url: 'https://www.linkedin.com/in/jinhaenglee3/',
        image: jinhaengLeeImage,
      },
      {
        name: 'Cole Flenniken',
        role: 'Head of Marketing and Communications',
        url: 'https://www.linkedin.com/in/cole-flenniken-8438101a9/',
        image: coleFlennikenImage,
      },
      {
        name: 'Jack Reymond',
        role: 'Head of Finance and Accounting',
        url: 'https://www.linkedin.com/in/john-jack-reymond-5136b2192/',
        image: jackReymondImage,
      },
    ],
  },
  {
    name: 'Faculty Advisors',
    speakers: [
      {
        name: 'Dr. Jeff Donahoo',
        role: 'Professor of Computer Science',
        url: 'https://www.ecs.baylor.edu/index.php?id=961897',
        image: jeffDonahooImage,
      },
    ],
  },
  {
    name: 'Partners and Sponsors',
    speakers: [
      {
        name: 'BAF',
        role: 'Partner',
        url: 'https://www.blockchainacceleration.org/',
        image: BAFImage,
      },
      {
        name: 'Solana',
        role: 'Partner',
        url: 'https://solana.com/',
        image: solanaImage,
      },
      {
        name: 'Faith Tech',
        role: 'Partner',
        url: 'https://faithtech.com/',
        image: faithTechImage,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter sm:text-5xl text-pink-600"
          >
            Notable mentions
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-pink-900">
            Meet the people who make The Blockchain Collaborative possible.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-pink-600 stroke-pink-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-pink-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-pink-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-pink-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        onClick={() => speaker.url !== '' ? window.open(speaker.url, '_blank') : null}
                        className="cursor-pointer absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt={speaker.name}
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
