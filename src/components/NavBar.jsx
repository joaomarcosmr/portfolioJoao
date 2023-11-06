import React from 'react'
import { useState } from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    const linklist = document.getElementById('menuBar')
    if(!click > 0){
      linklist.classList.remove('fadeOut');
      linklist.classList.add('fadeIn');
      linklist.style.display = 'block'
      setClick(1)
    } else {
      linklist.classList.remove('fadeIn');
      linklist.classList.add('fadeOut');
      linklist.style.display = 'none'
      setClick(0)
    }
  }

  return (
    <>
      <div className={style.navbar}>
            <a href="#">
              <h2>João.<span>Dev</span></h2>
            </a>
            <div className={style.pages}>
                <div className="linkList" id='list'>
                    <ul className='my-3'>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#sobre">Sobre</a>
                      </li>
                      <li>
                        <a href="#portfolio">Portfólio</a>
                      </li>
                      <li>
                        <a href="#contato">Contato</a>
                      </li>
                    </ul>
                </div>
                <div onClick={(handleClick)} className="menuBurger">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
            </div>
      </div>
      <div id="menuBar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
              <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
         </ul>
        </div>
    </>
  )
}

export default NavBar