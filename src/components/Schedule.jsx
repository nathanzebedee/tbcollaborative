import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import Head from 'next/head'

const schedule = [
  {
    event: 'Educational Workshops',
    eventTime: '2022-04-04',
    summary:
      'Non-technical classes that improve your understanding of blockchain.',
    timeSlots: [
      {
        name: 'Nathan Hennigh',
        description: 'Hankamer Cashion Academic Center, Hankamer 355',
        day: 'Tuesday (alternating bi-weekly)',
        start: '6:30PM',
        end: '7:30PM',
      },
    ],
  },
  {
    event: 'Engineering Labs',
    eventTime: '2022-04-05',
    summary:
      'Technical classes where we program using blockchain technologies.',
    timeSlots: [
      {
        name: 'Nathan Galindo',
        description: 'Hankamer Cashion Academic Center, Hankamer 355',
        day: 'Tuesday (alternating bi-weekly)',
        start: '6:30PM',
        end: '7:30PM',
      },
    ],
  },
  {
    event: 'General Meetings',
    eventTime: '2022-04-06',
    summary:
      'Fireside chats and speaker events about all things blockchain.',
    timeSlots: [
      {
        name: 'Officers',
        description: 'Paul L. Foster 124',
        day: 'Thursday (bi-weekly)',
        start: '6:30PM',
        end: '7:30PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    if (typeof (window) === 'undefined') {
      let smMediaQuery = window.matchMedia('(min-width: 640px)')
      function onMediaQueryChange({ matches }) {
        setTabOrientation(matches ? 'vertical' : 'horizontal')
      }
  
      onMediaQueryChange(smMediaQuery)
      smMediaQuery.addEventListener('change', onMediaQueryChange)
  
      return () => {
        smMediaQuery.removeEventListener('change', onMediaQueryChange)
      }
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.eventTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  event: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="flex justify-start absolute inset-0" />
                      {day.event}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.eventTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-pink-900">
        <time eventTime={day.eventTime}>{day.event}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-pink-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <>
      <ol
        role="list"
        className={clsx(
          className,
          'rounded-xl space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-pink-900/5 backdrop-blur'
        )}
      >
        {day.timeSlots.map((timeSlot, timeSlotIndex) => (
          <li
            key={timeSlot.start}
            aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} CST`}
          >
            {timeSlotIndex > 0 && (
              <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
            )}
            <h4 className="text-lg tracking-tight text-pink-900">
              Led by <span className='text-lg font-semibold'>{timeSlot.name}</span>
            </h4>
            {timeSlot.description && (
              <p className="mt-1 tracking-tight text-pink-900">
                {timeSlot.description}
              </p>
            )}
            {timeSlot.day && (
              <p className="mt-1 tracking-tight text-pink-900">
                {timeSlot.day}
              </p>
            )}
            <p className="mt-1 font-mono text-sm text-slate-500">
              <time eventTime={`${day.eventTime}T${timeSlot.start}-08:00`}>
                {timeSlot.start}
              </time>{' '}
              -{' '}
              <time eventTime={`${day.eventTime}T${timeSlot.end}-08:00`}>
                {timeSlot.end}
              </time>{' '}
              CST
            </p>
          </li>
        ))}
      </ol>
    </>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.eventTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-pink-600 sm:text-5xl">
            We host a variety of events throughout the year
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-pink-900">
            Stop by one of our events to get a sense of what blockchain technology is, how it works, and why it matters.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-[#fdecfc]">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
