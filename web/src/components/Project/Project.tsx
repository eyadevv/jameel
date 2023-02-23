import { useState } from 'react'

import { motion } from 'framer-motion'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const text = `
Start Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Doloribus a laboriosam vel illum ducimus eveniet tenetur? Debitis
numquam sequi commodi libero, quam obcaecati repellendus accusamus
eligendi reprehenderit aspernatur laudantium, quas harum tempore rem
explicabo aliquam facere molestias dignissimos optio illo nostrum
dolor? Similique laudantium harum magni architecto, aperiam culpa
dolore rem animi perspiciatis quis vitae ducimus. Lorem ipsum dolor
Start Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Doloribus a laboriosam vel illum ducimus eveniet tenetur? Debitis
numquam sequi commodi libero, quam obcaecati repellendus accusamus
eligendi reprehenderit aspernatur laudantium, quas harum tempore rem
explicabo aliquam facere molestias dignissimos optio illo nostrum
dolor? Similique laudantium harum magni architecto, aperiam culpa
dolore rem animi perspiciatis quis vitae ducimus. Lorem ipsum dolor



 END
`
const tags = ['web development', 'Reactjs', 'Nextjs', 'Software Enginnering']
const Project = ({ name }) => {
  const [liked, setliked] = useState(false)
  const [show, setshow] = useState(false)
  return (
    <div className="flex h-max w-[96%] flex-col items-center justify-start gap-4  rounded-lg bg-black  p-3 text-white">
      <div className="mb-2 flex h-max w-full flex-shrink-0 flex-col items-start justify-start">
        <div className="flex h-8 w-full flex-row items-center justify-between ">
          <h2 className="text-2xl font-bold">{name}</h2>
          {liked ? (
            <BsHeartFill onClick={() => setliked(!liked)} />
          ) : (
            <BsHeart onClick={() => setliked(!liked)} />
          )}
        </div>
        <div className="flex h-4 w-full flex-row items-center justify-start gap-2  text-xs font-medium">
          <p>Contract</p>
          <p>50$</p>
          <p>10 Applicants</p>
        </div>
      </div>

      <div
        className="flex h-56 w-full flex-col items-start justify-between gap-2"
        style={{
          height: show ? 'max-content' : '10rem',
        }}
      >
        <div className="h-5/6 w-full overflow-clip ">
          <p>{text}</p>
        </div>
        <button onClick={() => setshow(!show)} className="text-emerald-600">
          {show ? 'show less' : 'show more'}
        </button>
      </div>

      <div className="flex w-full flex-shrink-0 flex-row flex-nowrap items-center justify-between">
        <div className="flex h-4 w-5/6 flex-row items-center justify-start gap-2 ">
          {tags.map((tag, i) => {
            return (
              <p
                key={i}
                className="rounded bg-blue-600 bg-opacity-40 p-1 text-xs hover:bg-opacity-60"
              >
                {tag}
              </p>
            )
          })}
        </div>
        <p className="text-xs">5 minutes ago</p>
      </div>
    </div>
  )
}

export default Project
