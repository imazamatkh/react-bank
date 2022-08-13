import { useState } from 'react'

import { close, logo, menu } from '../../assets'
import { navLinks } from '../../constants'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'header__inner w-full flex py-6 justify-between items-center'}>
          <div className={'logo'}>
            <a className={'logo__link'} href="/">
              <img className={'logo__image w-[124px] h-[32px]'} src={logo} alt=""/>
            </a>
          </div>

          <nav className={'navbar'}>
            <ul className={'navbar__list hidden sm:flex justify-end items-center flex-1'}>
              {navLinks.map((navLink, idx) => (
                <li className={`navbar__item ${idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} key={navLink.id}>
                  <a className={'navbar__link text-white'} href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>

            <div className={'sm:hidden flex flex-1 justify-end items-center'}>
              <img className={'w-[28px] h-[28px] object-contain transition'} src={toggle ? close : menu} alt="Menu" onClick={() => setToggle(prevState => !prevState)} />

              <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient fixed z-[1000] top-[80px] bottom-0 left-0 right-0 sidebar`}>
                <ul className={'navbar__list flex flex-col justify-center items-center flex-1'}>
                  {navLinks.map((navLink, idx) => (
                    <li className={`navbar__item ${idx === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`} key={navLink.id}>
                      <a className={'navbar__link text-white'} href={`#${navLink.id}`}>{navLink.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
