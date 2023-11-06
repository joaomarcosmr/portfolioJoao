import React from 'react'
import style from './Sobre.module.css'
import setup from '../../img/setup.jpg'
import notebook from '../../img/emojinotebok.png'
import frontendCircle from '../../img/frontend-circle.png'

const Sobre = () => {
  return (
    <div className={style.skill} id='sobre'>
        <div className="rowSkills">
                <div className="rowTech">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-sm-2 contentImg">
                        <div className="imgAbout">
                            <div className='circle'>
                                <img src={notebook} alt="emoji notebook" className='notebook'/>
                                <img src={frontendCircle} alt="emoji notebook" className='text-circle'/>
                            </div>
                            <img src={setup} alt="setup" className='img img-fluid codeImg'/>
                        </div>
                    </div>
                    <div className="middleRisk"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-sm-2">
                        <div className="backendTech">
                        <div className="skillTitle">
                            <h2>
                                SOBRE MIM&#128161;
                            </h2>
                            <p>
                                Dedicado a aprender e apaixonado por técnologia desde os 10 anos de idade.
                            </p>
                            <span>
                                Me chamo João Marcos, tenho 21 anos e sou natural de Floranópolis.
                                Desde o inicio de 2023 conheci o mercado de programação através de uma experiência profissional com tradução de vistos para o canada, e como sempre gostei muito de games e computador, comecei a procurar mais a respeito até começar a estudar de fato. E após as primeiras linhas de código, foi apenas paixão. E desde então, venho estudando e me desenvolvendo para entrar no mercado de trabalho. Adoro aprender, então estudar faz parte do meu dia-a-dia desde sempre. Dito isso, estou disposto a aprender e me entregar 100% do que preciso para entrar na área.
                            </span>
                        </div>

                        </div>
                    </div>
                </div>
        </div> 
    </div>
  )
}

export default Sobre