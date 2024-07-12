import dex from "../assets/dex.svg";
import jup from "../assets/jup.png";

const Description = () => {
    return (
        <div className={'xl:w-1/2 z-10  gap-y-10 flex flex-col'}>
            <h1 className={'text-3xl md:text-5xl font-semibold tracking-wider md:tracking-wide leading-10 md:leading-[4rem]'}>
                Money, don't hate no money. You scared.
                Scared money don't make no money.
            </h1>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-base font-semibold'}>
                    Scared money make no fucking money, you get that?
                </h2>
                <p className={'text-xs  break-all'}>
                    <span className={'font-bold'}>CA:</span> AXCqbA8GFUsqi37dVCYoCufG7x2PyZBS7jJdQLtxLgTf
                </p>
            </div>
            <div className={'flex flex-col md:flex-row gap-4'}>
                <button className={'flex w-44'}>
                    <a href="https://dexscreener.com/solana/6RfBTrFyttmGuRCdRgx1veeqP2g5wFB6cG9mUuiKkejS"
                       className={'flex gap-2'}>
                        <img className={"w-6 h-6"} src={dex} alt="dex-image"/>
                        DEXScreener
                    </a>
                </button>
                <button className={'flex w-44 bg-[#B27528]'}>
                    <a href="https://jup.ag/swap/AXCqbA8GFUsqi37dVCYoCufG7x2PyZBS7jJdQLtxLgTf-SOL"
                       className={'flex gap-2 items-center justify-center '}>
                        <img className={"w-7 h-7"} src={jup} alt="dex-image"/>
                        Buy $LFG
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Description