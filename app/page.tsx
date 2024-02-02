import Img from '@/assets/image.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Welcome to NextJS world</h1>
      <Image
        src={Img}
        alt='test image'
        width={300}
        height={300}
        priority
      />
    </>
  )
}
