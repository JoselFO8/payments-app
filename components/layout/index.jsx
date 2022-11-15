import Head from "next/head"

// Components
import Navbar from "./navBar/index.jsx"
// import Footer from "./footer/index.jsx"
import LeftNav from "./left-nav/index.jsx"

export default function Layout (props) {
    
    return (
        <div className="layout">
            <Head>
                <title>Head desde layout</title>
                <meta name="description" content="Contenido para payments-app"/>
            </Head>
            
            <div className="layout-container">

            
                {/* Left Nav */}
                <div className="layout-container__left-nav">
                    <LeftNav/>
                </div>

                {/* Layout */}
                <div className="layout-container__full">
                    <header>
                        <div className="layout-container__full-navbar">
                            <Navbar/>
                        </div>
                    </header>


                    <main>
                        <div className="layout-container__full-base">
                            {/* Panel */}
                            <div className="layout-container__full-base-panel">
                                {props.children}
                            </div>
                        </div>
                    </main>

                </div>

            
            </div>     

        </div>
    )
}