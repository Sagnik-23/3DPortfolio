import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>Sagnik</span> 👋
      </h1>
      <div className='mt-4 text-slate-600 gap-3 flex-col'>
        <p>
          Web Developer with a passion for building things. I am a self-taught developer who loves to learn new things and solve problems. I have experience in building web applications using React, Node.js, Express, and MongoDB. I am always looking for new opportunities to learn and grow.
        </p>
      </div>

      <div className='flex flex-col py-10'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
        <div className='py-16'>
          <h3 className='subhead-text '>Work Experience</h3>
          <div className='mt-4 text-slate-600 gap-3 flex-col'>
            <p>
              I am currently learning and have no work experience. I am looking for opportunities to work and learn from experienced developers.
            </p>
            {/* React Vertical timeline component will be used here */}
          </div>
        </div>
      </div>
      <hr className='border-slate-400'/>
      <CTA />
    </section>
  )
}

export default About