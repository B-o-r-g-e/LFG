import NavBar from "./components/NavBar.jsx";
import Description from "./components/Description.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
    return (
        <div className={'w-screen min-h-screen px-5 md:px-32 flex justify-between font-poppins bg-slate-950'}>
            <div className={'w-screen'}>
                <NavBar />
                <div className={'flex mt-5 flex-col relative items-center xl:flex-row w-full justify-between'}>
                    <Description />
                    <Hero />
                </div>
                <p className={'text-xs mt-5'}>&copy;2024 LFG. All rights reserved.</p>
            </div>
        </div>
    )
}

export default App;