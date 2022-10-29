import Head from "next/head"

// Components
import Navbar from "./navBar/index.jsx"
import Footer from "./footer/index.jsx"
import LeftNav from "./left-nav/index.jsx"

export default function Layout (props) {
    // Estado + bolean + activar o desactivar left-nav mediante dos clases en el cual intervenga un grid ancho-leftnav + auto

    return (
        <div className="layout-container">
            <Head>
                <title>Head desde layout</title>
                <meta name="description" content="Contenido para payments-app"/>
            </Head>
            
            {/* Left Nav */}
            <div className="layout-container__left-nav">
                <LeftNav/>
            </div>

            {/* Layout */}
            <div className="layout-container__body">
                <header>
                    <Navbar/>
                </header>

                <main>
                    <div className="layout-container__body-base">
                        {/* Panel */}
                        <div className="layout-container__body-base-panel">
                            {props.children}
                        </div>
                    </div>
                </main>

                {/* <footer className="layout-container__footer">
                    <Footer/>
                </footer> */}
            </div>
            
        </div>
    )
}