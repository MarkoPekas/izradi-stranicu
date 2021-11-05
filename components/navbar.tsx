import Navelem from './mini/Navelem';
import Icon from './svg/Icon'
const NavBar = () => {
    return (
        <div className="w-full h-16 shadow-google flex items-center fixed top-0 left-0 bg-white">
            <div className="px-3">
                <Icon w={48} h={48} />
            </div>
            <h1 className="text-xl text-gray-700 font-semibold">Izradi <span className="font-normal">Stranicu</span></h1>
            <p className="text-gray-700 text-xxs font-medium -mb-4">ALFA</p>
            <div className="hidden md:flex flex-1 h-full">
                <div className="px-4"></div>
                <Navelem active={true} to="/" ><p>Home</p></Navelem>
                <Navelem active={false} to="/" ><p>Explore</p></Navelem>
                <Navelem active={false} to="/" ><p>Prices</p></Navelem>
                <div className="flex-1"></div>
                <div className="p-3.5 h-full">
                    <div className="min-w-135px font-medium text-sm rounded h-full flex justify-center items-center text-073B4C px-8 border-073B4C border">
                        <p>Sign In</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;