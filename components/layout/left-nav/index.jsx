import Image from "next/image"

export default function LeftNav () {
    return (
        <div className="left-nav-container">
            <div className="left-nav-container__slogan">
                <a href='/performance'>
                    <Image 
                        src="/slogan/Slogan.png"
                        alt="Payments slogan"
                        width={40}
                        height={45}
                    />
                </a>
            </div>
            
            <div className="left-nav-container__icons">
                <a href='#!'>
                    <Image 
                        src="/icons/home.png"
                        alt="Notifications"
                        width={33}
                        height={35}
                        className="navbar-container__icons-icon"
                    />
                </a>
                <a href='#!'>
                    <Image 
                        src="/icons/calendar.png"
                        alt="Notifications"
                        width={30}
                        height={34}
                        className="navbar-container__icons-icon"
                    />
                </a>
                <a href='#!'>
                    <Image 
                        src="/icons/invoice.png"
                        alt="Notifications"
                        width={30}
                        height={31}
                        className="navbar-container__icons-icon"
                    />
                </a>
                <a href='#!'>
                    <Image 
                        src="/icons/bag.png"
                        alt="Notifications"
                        width={30}
                        height={33}
                        className="navbar-container__icons-icon"
                    />
                </a>
            </div>
        </div>
        
    )
}