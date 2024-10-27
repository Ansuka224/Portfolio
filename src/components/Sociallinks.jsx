import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Ansuka224',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
      style: 'rounded-br-md'
    },
  ]

  return (
    <div className='flex flex-col top-[35%] left-0 fixed z-50'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ' + style}>
            <a href={href} className='flex justify-between items-center w-full text-white' target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sociallinks
