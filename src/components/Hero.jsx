import money from "../assets/money.gif";

const Hero = () => (
    <div className={"w-full absolute xl:relative z-0 xl:w-1/2"}>
        <img className={'block w-full md:max-h-[70vh] object-cover'} src={money} alt={'falling money'}></img>
    </div>
)

export default Hero