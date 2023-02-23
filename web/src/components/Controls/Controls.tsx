import { useState, useReducer } from 'react'

import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Controls = () => {
  return (
    <div className="text-medium overflow-show flex h-full w-full items-start justify-center rounded-lg bg-black text-xs text-white">
      <div className="mt-4 flex flex-col items-start justify-center">
        <h2 className=" mb-4 text-2xl font-bold">Filter By:</h2>
        <BasicDemo tag="Category" type="search" />
        {/* <BasicDemo
          tag="
Experience level"
        /> */}
        <BasicDemo
          tag="Job type"
          list={['Fixed-Price', 'Hourly Rate', 'Contract']}
        />
        <BasicDemo
          tag="Number of proposals"
          list={[
            'less than 5',
            '5 to 10',
            '10 to 20',
            '20 to 50',
            'more than 50',
          ]}
        />
        <BasicDemo
          tag="Client info"
          list={['Payment Verified', 'My previous Clients']}
        />
        <BasicDemo
          tag="Project Deadline"
          list={[
            'Less Than a Month',
            '1 to 3 Months',
            '3 to 6 months',
            'more than 6 months',
          ]}
        />
        <BasicDemo
          tag="Hours Needed"
          list={[' < 30 Hrs/Week', '< 40 Hrs/week']}
        />
      </div>
    </div>
  )
}

export default Controls

const BasicDemo = ({ tag, type, list }) => {
  const [show, setshow] = useState(null)
  const [selected, setselected] = useState(null)
  return (
    <div className="flex h-max min-h-[2rem] w-full flex-col items-center justify-center">
      <div
        className="flex h-8 w-full flex-shrink-0 flex-row items-start justify-between hover:cursor-pointer  "
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          if (show === true || show === false) {
            setshow(!show)
          } else if (show === null) {
            setshow(true)
          }
        }}
        onClick={() => {
          if (show === true || show === false) {
            setshow(!show)
          } else if (show === null) {
            setshow(true)
          }
        }}
      >
        <p>{tag}</p>
        {show ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <p>{selected}</p>

      <motion.div
        className=" mb-4 h-0 w-full overflow-hidden bg-inherit text-white"
        animate={{
          height: show === false || show === null ? 0 : 'max-content',
        }}
        transition={{
          type: 'spring',
          bounce: 0,
          stiffness: 1000,
          damping: 100,
        }}
      >
        <hr />

        {type === 'search' ? (
          <h1>liol</h1>
        ) : (
          <Checkbox name="text me" list={list} />
        )}
      </motion.div>

      <hr />
    </div>
  )
}

const Checkbox = ({ list }) => {
  return (
    <div className="form-control">
      {list.map((item, id) => {
        return (
          <label
            className="label w-full cursor-pointer px-0 py-2 text-xs"
            key={id}
          >
            <span className="label-text text-xs text-white">{item}</span>
            <input
              type="checkbox"
              className="checkbox-success checkbox h-4 w-4 rounded"
            />
          </label>
        )
      })}
    </div>
  )
}
