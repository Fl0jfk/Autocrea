import Image from "next/image"
import Setdetable from "public/set-de-table-publicitaire.jpg"
 
export default function Section4SupportsHome (){
    return (
        <section className="flex flex-col bg-white gap-12 p-12 items-center">
            <h2 className="text-2xl font-light">Nos 4 supports de communication</h2>
            <div className="flex w-[85%] mx-auto gap-4 mt-6">
                <div className="flex flex-col w-1/2 gap-2">
                    <p className="text-gray-100 text-8xl font-bold">01.</p>
                    <p className="text-green-500">Au restaurant</p>
                    <h3 className="text-2xl">Le set de table publicitaire</h3>
                    <span className="w-full bg-gray-200 h-[1px]"></span>
                    <p className="text-gray-500 font-sm">Le set de table publicitaire vous permet de communiquer quotidiennement auprès de la clientèle des restaurants de votre région.</p>
                </div>
                <div className="w-1/2 pl-4">
                    <Image src={Setdetable} alt="Exemple de set de table" width={400} height={180}/>
                </div>
            </div>
            <div className="flex w-[85%] mx-auto gap-4 mt-12">
            <div className="w-1/2 pl-4">
                    <Image src={Setdetable} alt="Exemple de set de table" width={400} height={180}/>
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <p className="text-gray-100 text-8xl font-bold">02.</p>
                    <p className="text-green-500">Chez le boulanger</p>
                    <h3 className="text-2xl">L&apos;étui à baguette publicitaire</h3>
                    <span className="w-full bg-gray-200 h-[1px]"></span>
                    <p className="text-gray-500 font-sm">Le sac à pain publicitaire est un support ludique et pratique où votre publicité est accueillie comme divertissante.</p>
                </div>
            </div>
            <div className="flex w-[85%] mx-auto gap-4 mt-12">
                <div className="flex flex-col w-1/2 gap-2">
                    <p className="text-gray-100 text-8xl font-bold">03.</p>
                    <p className="text-green-500">Dans votre pharmacie</p>
                    <h3 className="text-2xl">Le sachet pharmacie publicitaire</h3>
                    <span className="w-full bg-gray-200 h-[1px]"></span>
                    <p className="text-gray-500 font-sm">Le sachet pharmacie diffusé dans les pharmacies de votre région est disposé au coeur des foyers pendant plusieurs jours.</p>
                </div>
                <div className="w-1/2 pl-4">
                    <Image src={Setdetable} alt="Exemple de set de table" width={400} height={180}/>
                </div>
            </div>
            <div className="flex w-[85%] mx-auto gap-4 mt-12">
            <div className="w-1/2 pl-4">
                    <Image src={Setdetable} alt="Exemple de set de table" width={400} height={180}/>
                </div>
                <div className="flex flex-col w-1/2 gap-2">
                    <p className="text-gray-100 text-8xl font-bold">04.</p>
                    <p className="text-green-500">Chre le primeur</p>
                    <h3 className="text-2xl">Le sachet primeur publicitaire</h3>
                    <span className="w-full bg-gray-200 h-[1px]"></span>
                    <p className="text-gray-500 font-sm">Le sachet primeur publicitaire est un support innovant diffusé dans les primeurs de votre région.</p>
                </div>
            </div>     
            <div className="flex flex-col items-center w-full w-2/5 mx-auto gap-8">
                <h3 className="text-2xl font-light">Pouvoir d&apos;achat / support</h3>
                <p className="text-center text-gray-500">Un support de communication adapté au pouvoir d&apos;achat des clients.</p>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex w-[60%] justify-between items-center">
                        <p className="uppercase text-sm">Etui à baguette</p>
                        <p className="text-sm">€</p>
                    </div>
                    <div className="flex w-full relative">
                        <span className="absolute z-0 bg-gray-100 w-full h-[5px] rounded-full"></span>
                        <span className="absolute z-1 bg-green-500 w-[60%] top-0 left-0 h-[5px] rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex w-[60%] justify-between items-center">
                        <p className="uppercase text-sm">Sachet pharmacie</p>
                        <p className="text-sm">€</p>
                    </div>
                    <div className="flex w-full relative">
                        <span className="absolute z-0 bg-gray-100 w-full h-[5px] rounded-full"></span>
                        <span className="absolute z-1 bg-green-500 w-[60%] top-0 left-0 h-[5px] rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex w-[60%] justify-between items-center">
                        <p className="uppercase text-sm">Sachet Primeur</p>
                        <p className="text-sm">€</p>
                    </div>
                    <div className="flex w-full relative">
                        <span className="absolute z-0 bg-gray-100 w-full h-[5px] rounded-full"></span>
                        <span className="absolute z-1 bg-green-500 w-[60%] top-0 left-0 h-[5px] rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex w-[60%] justify-between items-center">
                        <p className="uppercase text-sm">Set de table</p>
                        <p className="text-sm">€€</p>
                    </div>
                    <div className="flex w-full relative mb-12">
                        <span className="absolute z-0 bg-gray-100 w-full h-[5px] rounded-full"></span>
                        <span className="absolute z-1 bg-green-500 w-[70%] top-0 left-0 h-[5px] rounded-full"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}