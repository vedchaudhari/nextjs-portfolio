import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({ closeNav, showNav }: Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/*overlay*/}
      <div className={`fixed inset-0 ${navOpen} transition-all right-0 duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
      </div>

      {/*navlinks*/}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gradient-to-br backdrop-blur-lg space-y-6 z-[1050] right-0 shadow-2xl`}>
        {
          NavLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url} onClick={closeNav}>
                <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-cyan-200 hover:border-cyan-200 transition-all duration-300 hover:scale-105'>
                  {link.label}
                </p>
              </Link>
            )
          })
        }
        {/*cross icon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:rotate-90 transition-transform duration-300' />
      </div>
    </div>
  )
}

export default MobileNavbar