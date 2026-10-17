import AudioPlayer from '@/components/AudioPlayer'
import Hero from '@/components/home/Hero'
import PsaVideo from '@/components/home/PsaVideo'
import Story from '@/components/home/Story'
import DialSection from '@/components/home/DialSection'
import ClipWall from '@/components/home/ClipWall'
import Stream from '@/components/home/Stream'
import Shop from '@/components/home/Shop'
import Community from '@/components/home/Community'

export default function Home() {
  return (
    <>
      <AudioPlayer />
      <Hero />
      <PsaVideo />
      <Story />
      <DialSection />
      <ClipWall />
      <Stream />
      <Shop />
      <Community />
    </>
  )
}
