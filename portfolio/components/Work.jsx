import { assets, workData } from '@/assets/assets'
import React from 'react'

const Work = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Here are some of my recent projects. Each one was a unique challenge that helped me grow as a developer.</p>

        <div>
            {workData.map((project, index)=>(
                <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Work
