import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Blockchain Collaborative - a Student Organization at Baylor University</title>
        <meta
          name="description"
          content="The Blockchain Collaborative is a student organization dedicated to advancing the blockchain community through research, education, and community."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
