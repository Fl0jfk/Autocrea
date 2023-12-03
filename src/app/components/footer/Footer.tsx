import Image from "next/image"
import Link from "next/link"
import LogoWhite from "../../assets/images/logo-autocrea-light-20-ans.png"

export default function Footer (){
    return (
        <footer className="bg-black text-white flex w-full flex-col">
            <div className="h-[40vh] flex justify-center w-full gap-16 p-12 pt-24 sm:flex-col sm:h-full">
                <div>
                    <Image src={LogoWhite} alt="Logo d'autocrea" width={250} height={175}/>
                </div>
                <div className="flex flex-col gap-6 w-[20%] sm:w-full">
                    <h3>Qui sommes-nous</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link href={"/"} className="text-sm">Société</Link></li>
                        <li><Link href={"/"} className="text-sm">Savoir-faire</Link></li>
                        <li><Link href={"/"} className="text-sm">Références</Link></li>
                        <li><Link href={"/"} className="text-sm">Presse</Link></li>
                        <li><Link href={"/"} className="text-sm">Phototèque</Link></li>
                        <li><Link href={"/"} className="text-sm">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 w-[20%] sm:w-full">
                    <h3>Nos supports de communication</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link href={"/"} className="text-sm">Le set de table publicitaire</Link></li>
                        <li><Link href={"/"} className="text-sm">L&apos;étui à baguette publicitaire</Link></li>
                        <li><Link href={"/"} className="text-sm">Le sachet pharmacie publicitaire</Link></li>
                        <li><Link href={"/"} className="text-sm">Le sachet primeur publicitaire</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 w-[20%] sm:w-full">
                    <h3>Réseaux sociaux</h3>
                    <ul className="flex gap-2">
                        <li><Link href={"/"}>
                            <svg width="22px" height="22px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <rect width="132" height="132" x="30" y="30" stroke="#fff" strokeWidth="12" rx="16"/>
                                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M66 86v44"/>
                                <circle cx="66" cy="64" r="8" fill="#fff"/><path stroke="#fff" strokeLinecap="round" strokeWidth="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"/>
                            </svg>
                        </Link></li>
                        <li><Link href={"/"}>
                            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z" fill="#fff"/>
                            </svg>
                        </Link></li>
                        <li><Link href={"/"}>
                            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF"/>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF"/>
                            </svg>
                        </Link></li>
                        <li><Link href={"/"}>
                            <svg width="22px" height="22px" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#fff">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex flex-col sm">
                <span className="bg-white w-[96%] mx-auto h-[1px]"></span>
                <div className="flex self-end gap-1 items-center justify-center text-sm pt-4 sm:pb-4 sm:p-1 sm:pt-4">
                    <p>&copy; 2023 autocrea</p>
                    <span>-</span>
                    <Link href={"/"}>Mentions légales</Link>
                </div>
            </div>
        </footer>
    )
}