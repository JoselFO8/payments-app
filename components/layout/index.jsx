import Head from "next/head"

// Components
import Navbar from "./navBar/index.jsx"
import Footer from "./footer/index.jsx"
import LeftNav from "./left-nav/index.jsx"

export default function Layout (props) {

    return (
        <div className="app-cointainer">
            <Head>
                <title>Head desde layout</title>
                <meta name="description" content="Contenido para payments-app"/>
            </Head>

            <header>
                <Navbar/>
            </header>
            <main>
                {/* Left Nav */}
                <LeftNav/>

                {/* Panel */}
                <h2>desde Layout</h2>
                {props.children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}