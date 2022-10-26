import Image from "next/image"

export default function Navbar () {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-container__slogan">
                    <Image 
                        src="/slogan/Payments.png" 
                        alt="Payments slogan"
                        width={150}
                        height={50}
                    ></Image>
                </div>
                <div className="navbar-container__acount">
                    <div className="navbar-container__acount-greeting">
                        <p><b>Hola,</b><span>Nombre Usuario</span></p>
                    </div>
                    <div className="navbar-container__acount-image">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}