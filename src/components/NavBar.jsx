import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import dex from "../assets/dex.svg";


const NavBar = () => {
    return (
        <div className={'w-full py-10 flex items-center justify-between'}>
            <h1 className={'font-black text-2xl'}>LFG</h1>
            <div className={'flex gap-4'}>
                <ul className={'flex items-center gap-4'}>
                    <li className={'text-3xl'} ><a href="https://x.com/ScaredMoneycto"><FaTwitter /></a> </li>
                    <li className={'text-3xl'}><a href="https://t.me/SCAREDMONEYLFGSOL"><FaTelegram /></a></li>
                    <li className={'p-2 rounded-full bg-gray-900'}><a href="https://dexscreener.com/">
                        <img className={"w-6 h-6"} src={dex} alt="dex-image"/>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;