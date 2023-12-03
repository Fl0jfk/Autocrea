import Image from "next/image"
import Link from "next/link"
import LogoSet from "public/picto-set-de-table-publicitaire.png"
import LogoEtui from "public/picto-etui-a-baguette-publicitaire.png"
import LogoSachet from "public/picto-sachet-a-pharmacie-publicitaire.png"
import LogoSachetPrimeur from "public/picto-sachet-primeur-publicitaire.png"

export default function HomeGrid (){
    return (
        <section className="grid grid-cols-2 sm:grid-cols-1 w-3/4 mx-auto gap-12 p-8">
            <Link href={"/"} className="flex flex-col items-center justify-center gap-4">
                <Image src={LogoSet} alt="Logo d'un set de table" width={150} height={150}/>
                <p className="text-xl">Set de table</p>
                <p className="w-4/5 text-center text-gray-500 text-sm">90% de la clientèle des brasseries reste au moins 45 min à table</p>
            </Link>
            <Link href={"/"} className="flex flex-col items-center justify-center gap-4">
                <Image src={LogoEtui} alt="Logo d'un set de table" width={150} height={150}/>
                <p className="text-xl">Etui à baguette</p>
                <p className="w-4/5 text-center text-gray-500 text-sm">76% de la population active consomme du pain</p>
            </Link>
            <Link href={"/"} className="flex flex-col items-center justify-center gap-4">
                <Image src={LogoSachet} alt="Logo d'un set de table" width={150} height={150}/>
                <p className="text-xl">Sachet pharmacie</p>
                <p className="w-4/5 text-center text-gray-500 text-sm">76% des clients sont fidèles à leur client</p>
            </Link>
            <Link href={"/"} className="flex flex-col items-center justify-center gap-4">
                <Image src={LogoSachetPrimeur} alt="Logo d'un set de table" width={150} height={150}/>
                <p className="text-xl">Sachet primeur</p>
                <p className="w-4/5 text-center text-gray-500 text-sm">83% des français achètent des fruits et légumes</p>
            </Link>
        </section>
    )
}