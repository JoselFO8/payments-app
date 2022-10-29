import Image from "next/image"

export default function Navbar () {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-container__acount">
                    <div className="navbar-container__acount-greeting">
                        <p><b>Hola, </b><span>Nombre Usuario</span></p>
                    </div>
                    <div className="navbar-container__acount-alerts">
                        <p>Tienes <a href="#!"><span className="text-blue">3 alertas</span></a> esperando por ti</p>
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