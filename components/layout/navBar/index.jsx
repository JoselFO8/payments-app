import Image from "next/image"

export default function Navbar () {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-container__slogan">
                    <a href='/performance'>
                        <Image 
                            src="/slogan/Slogan.png"
                            alt="Payments slogan"
                            width={40}
                            height={45}
                        />
                    </a>
                </div>

                <div className="navbar-container__acount">
                    <div className="navbar-container__acount-greeting">
                        <h3><b>Hola, </b><span>Cosme Fulanito</span></h3>
                    </div>
                    <div className="navbar-container__acount-alerts">
                        <p>Tienes</p>
                        <a href="#!"><span className="text-blue">3 alertas</span></a>
                        <p>esperando por ti</p>
                    </div>
                </div>

                <div className="navbar-container__icons">
                    <a href='#!' className="navbar-container__icons-bell">
                        <Image 
                            src="/icons/bell.png"
                            alt="Notifications"
                            width={27}
                            height={33}
                        />
                    </a>
                    <a href='#!' className="navbar-container__icons-menu">
                        <Image 
                            src="/icons/menu.png"
                            alt="Menu"
                            width={27}
                            height={33}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}