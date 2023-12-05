import Image from "next/image"

export const Logo = () => {
    return (
        <Image
            className=""
            height={130}
            width={155}
            alt="logo"
            src="/FA.svg"
        />
    )
}