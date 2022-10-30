import Image from "next/image"

export default function Navbar () {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-container__acount">
                    <div className="navbar-container__acount-greeting">
                        <h3><b>Hola, </b><span>Nombre Usuario</span></h3>
                    </div>
                    <div className="navbar-container__acount-alerts">
                        <p>Tienes</p>
                        <a href="#!"><span className="text-blue">3 alertas</span></a>
                        <p>esperando por ti</p>
                    </div>
                </div>

                <div className="navbar-container__icons">
                    <a href='#!'>
                        <Image 
                            src="/icons/bell.png"
                            alt="Notifications"
                            width={27}
                            height={33}
                            className="navbar-container__icons-icon"
                        />
                    </a>
                    <a href='#!'>
                        <Image 
                            src="/icons/menu.png"
                            alt="Menu"
                            width={27}
                            height={33}
                            className="navbar-container__icons-icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}