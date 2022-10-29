import Image from "next/image"

export default function LeftNav () {
    return (
        <div className="left-nav-container">
            <div className="left-nav-container__slogan">
                <Image 
                    src="/slogan/Slogan.png"
                    alt="Payments slogan"
                    width={40}
                    height={40}
                />
            </div>
            
        </div>
        
    )
}