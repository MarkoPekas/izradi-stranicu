import Link from 'next/link'
import { ReactChild } from 'react';

const Navelem = ({active, to, children}: {active: boolean, to: string, children: ReactChild}) => {
    return(
        <div className="h-full flex flex-col mr-8">
            <Link href={to}>
            <div className={`flex-1 text-sm justify-center items-center flex font-normal ${active?'text-gray-800':'text-gray-500'}`}>
                {children}
            </div>
            </Link>
            <div className={`w-full rounded-t h-1 ${active?'bg-118AB2':''}`}></div>
        </div>
    )
}

export default Navelem;