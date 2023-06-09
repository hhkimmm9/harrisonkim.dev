import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import '../styles/styles.css'

const ProjectContent = ({ project }: {
    project: {
      name: string,
      readme: string,
      screenshots: {
        id: number,
        src: string,
        description: string
      }[]
}}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  }
  
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-4xl text-stone-800 font-semibold'>{ project.name }</h1>

        <div className='mt-6'>
          <div className='border flex flex-row bg-white items-center border-b-2 rounded-t-xl shadow-inner'>
            <Image src="/images/macos-buttons.webp" alt="" width={800} height={600} className='w-16 ml-2 object-contain' />
            <h3 className='py-1 text-sm'>README.md</h3>
          </div>
          <div className='border-l-2 border-r-2 border-b-2 bg-white p-3 shadow rounded-b-xl'>
            <text dangerouslySetInnerHTML={{ __html: project.readme }} />
          </div>
        </div>

        <div className='my-12 mx-auto w-80 lg:w-auto lg:mx-0'>
          {/* https://react-slick.neostack.com/docs/api */}
          <Slider {...settings}>
            { project.screenshots.map((item: { id: number, src: string, description: string }) => {
              return (
                  <div key={item.id} className='bg-stone-200 p-3 rounded-xl'>
                    <div className='flex flex-col'>
                      <Image src={item.src} alt='' width={1024} height={786} className='object-contain rounded-t-xl' />
                      <div className='p-4 bg-stone-100 rounded-b-xl'>
                        <p className='text-stone-800'>{ item.description }</p>
                      </div>
                    </div>
                  </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default ProjectContent