import { HandCoins } from "lucide-react";
import Link from "next/link"

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className="items-center hidden lg:flex">
            <HandCoins className="h-[28] w-[28]"/>
            <p className="font-semibold text-white text-2xl ml-2.5">Mintree</p>
        </div>
    </Link>
  )
}

export default HeaderLogo;