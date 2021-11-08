import { useEffect, useState } from "react";
import Icon from "./svg/Icon";


const Intro = () => {
    const [page, setPage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPage(page => page + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (page <= 1) {
            document.getElementById(page.toString())!.style.opacity = "1";
            page===1?document.getElementById("0")!.style.opacity = "0":null;
        }else{
            document.getElementById("1")!.style.opacity = "0";
            document.getElementById("x")!.style.opacity = "0";
        }
    }, [page]);

  return (
    <div className="bg-white transition-opacity duration-300 fixed top-0 left-0 z-50 h-screen w-full" id="x">
        <div className="h-screen w-full flex justify-center items-center fixed z-50 top-0 bg-white left-0 opacity-0 transition-opacity duration-300" id="1">
            <Icon w={64} h={64} />
            <p className="text-4xl"><span className="font-medium">Sneaky</span>Coin</p> 
        </div>
        <div className="h-screen w-full flex justify-center items-center fixed z-50 top-0 bg-white left-0 transition-opacity duration-300" id="0">
            <p className="text-4xl">The first coin with true privacy</p>
        </div>
    </div>
  );
};

export default Intro;