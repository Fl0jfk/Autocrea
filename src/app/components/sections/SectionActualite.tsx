import Link from "next/link"
import Image from "next/image"
import Westfield from "public/preview-etui-a-baguette-westfield-parly.webp"
import Lille from "public/preview-set-de-table-publicitaire-multi-annonceurs-lilles-rennes.webp"
import Region from "public/preview-etui-a-baguette-publicitaire-formation-region-normandie.webp"

export default function SectionActualite (){
    return (
        <section className="flex flex-col p-16 items-center justify-center gap-12">
            <h2 className="text-green-500 uppercase text-sm">Actualités</h2>
            <div className="grid grid-cols-3 items-center justify-center w-[90%] mx-auto gap-8 sm:grid-cols-1">
                <Link aria-label="Lien vers la page socié" href={"/"} className="flex flex-col gap-12 items-center hover:scale-105 duration-300 sm:gap-4">
                    <Image src={Westfield} alt="Image d'un étui de baguette publicitaire" width={300} height={200}/>
                    <h3 className="text-center font-light">Westfield Parly 2 x Autocrea : l&apos;impact des étuis à baguette publicitaires</h3>
                    <p className="text-center text-sm text-gray-500">La récente collaboration entre Westfield Parly 2, le prestigieux centre commercial au Chesnay-Rocquencourt, et Autocrea, l&apos;agence de publicité numéro 1 du média tactique, illustre parfaitement l&apos;approche novatrice...</p>
                </Link>
                <Link aria-label="Lien vers la page sociét" href={"/"} className="flex flex-col gap-12 items-center hover:scale-105 duration-300 sm:gap-4">
                    <Image src={Lille} alt="Image d'un étui de baguette publicitaire" width={300} height={200}/>
                    <h3 className="text-center font-light">Le set de table publicitaire multi annonceurs débarque à Lille et Brest !</h3>
                    <p className="text-center text-sm text-gray-500">Depuis plusieurs années, notre agence de publicité autocrea est spécialisée dans la diffusion de sets de table publicitaires multi-annonceurs. Nous opérons avec succès dans plusieurs villes de Normandie...</p>
                </Link>
                <Link aria-label="Lien vers la page société" href={"/"} className="flex flex-col gap-12 items-center hover:scale-105 duration-300 sm:gap-4">
                    <Image src={Region} alt="Image d'un étui de baguette publicitaire" width={300} height={200}/>
                    <h3 className="text-center font-light">Valorisez votre avenir avec les formations de la Région Normandie : Une campagne percutante dans vos boulangeries</h3>
                    <p className="text-center text-sm text-gray-500">Autocrea a réalisé une campagne d’étuis à baguette publicitaires pour la Région Normandie. Cette campagne avait pour ambition de promouvoir les formations...</p>
                </Link>
            </div>
        </section>
    )
}