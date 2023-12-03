import Link from "next/link"
import ImageBanner from "public/autocrea-concepts-publicitaires.jpg"

export default function HomeBanner (){
    return (
        <section className="h-[65vh] flex pt-[100px] w-full">
            <div style={{backgroundImage:`url("${ImageBanner.src}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className="flex w-full h-full sm:flex-col">
                <div className="flex flex-col w-[35%] p-8 justify-center pl-[5vw] gap-4 items-start sm:w-full sm:text-center sm:items-center">
                    <h1 className="text-4xl sm:text-3xl">Une communication ciblée au plus près de vos clients.</h1>
                    <Link href={"/"} className="text-gray-500 text-sm">4 supports</Link>
                    <p className="text-xl">Votre campagne publicitaire en moins de 15 jours.</p>
                    <Link href={"/"} className="text-white p-2 px-4 bg-green-600 rounded">Demande de devis</Link>
                </div>
            </div>
        </section>
    )
}