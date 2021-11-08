import Navelem from './mini/Navelem';
import Icon from './svg/Icon'
const NavBar = () => {
    return (
        <div className="w-full h-16 shadow-google flex items-center fixed top-0 left-0 bg-white z-30">
            <div className="px-3">
                <Icon w={48} h={48} />
            </div>
            <h1 className="text-xl text-gray-700 font-semibold">Quiet<span className="font-normal">Coin</span></h1>
            <p className="text-gray-700 text-xxs font-medium -mb-4">QITE</p>
            <div className="hidden md:flex flex-1 h-full">
                <div className="px-4"></div>
                <Navelem active={true} to="/" ><p>Explore</p></Navelem>
                <Navelem active={false} to="/" ><p>Learn</p></Navelem>
                <Navelem active={false} to="/" ><p>Invest</p></Navelem>
                <div className="flex-1"></div>
                <div className="flex flex-col justify-center px-4">
                    <button className="border border-073B4C rounded p-2 min-w-135px text-073B4C">Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;