import React from 'react'
import {  CarouselComponent } from './components/Carousel/Carousel'
import SubHeader from '../Component/SubHeader/SubHeader'
import { GalleryVerticalEnd } from 'lucide-react'

function Gallery2 () {
  const slides = [
    {
      image: './assets/img1.jpg',
      title: 'Majestic Mountains',
      description: 'Discover the breathtaking beauty of nature\'s greatest peaks.',
    },
    {
      image: './assets/img2.jpg',
      title: 'Serene Beaches',
      description: 'Experience the calming waves and golden sands of paradise.',
    },
    {
      image: './assets/img3.jpg',
      title: 'Urban Adventures',
      description: 'Explore the vibrant energy of city life and architecture.',
    },
    {
      image: './assets/img4.jpg',
      title: 'Majestic Mountains',
      description: 'Discover the breathtaking beauty of nature\'s greatest peaks.',
    },
    {
      image: './assets/img5.jpg',
      title: 'Serene Beaches',
      description: 'Experience the calming waves and golden sands of paradise.',
    },
    {
      image: './assets/img6.jpg',
      title: 'Urban Adventures',
      description: 'Explore the vibrant energy of city life and architecture.',
    },
  ];
  return (
    <>
      <SubHeader
        title={' Our Gallery'}
        icon={<GalleryVerticalEnd className='w-10 h-10 animate-bounce' />}
        discription={
          <p className='text-center mt-4 text-lg text-indigo-100 max-w-2xl mx-auto'>
            Take a peek into the exciting world of{' '}
            <span className='font-semibold'>Shri ji Tution and Coaching</span>!
            Here are some snapshots from our live classes, student images, and
            events.
          </p>
        }
      />
      <div className='min-h-[46rem] bg-gradient-to-br from-indigo-100 to-purple-100 p-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'></h1>
          <CarouselComponent slides={slides} />
        </div>
      </div>
    </>
  )
}

export default Gallery2
