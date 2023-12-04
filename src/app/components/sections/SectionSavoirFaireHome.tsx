export default function SectionSavoirFaireHome (){
    return(
        <section className="flex min-h-[80vh] bg-gray-100 flex-col p-12 gap-12 h-full">
            <div className="flex gap-4 w-4/5 mx-auto mt-8 sm:flex-col sm:w-full">
                <div className="w-1/2 flex flex-col gap-8 sm:w-full">
                    <h2 className="text-green-500">Notre savoir-faire</h2>
                    <p className="text-2xl font-light w-4/5 sm:w-full">Nos 4 support sont utiles au bon fonctionnement de nos partenaires.</p>
                </div>
                <div className="w-1/2 flex items-center justify-center sm:w-full">
                    <p className="text-gray-500">L&apos;agence Autocrea développe différents concepts publicitaires reposant sur les notions de wait marketing et de publicité contextuelle distribués gracieusement aux établissements et lieux d&apos;attente partout en France.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 w-4/5 mx-auto gap-6 sm:grid-cols-1 sm:w-full">
                <div className="bg-white p-8 py-12 w-full flex flex-col gap-4 justify-center shadow-sm">
                    <h3 className="text-xl">Communiquer au bon endroit</h3>
                    <p className="text-gray-500 text-sm">au bon moment sans paraitre intrusif tout en respectant le consommateur</p>
                </div>
                <div className="bg-white p-8 py-12 w-full flex flex-col gap-4 justify-center shadow-sm">
                    <h3 className="text-xl">Valoriser les moments d&apos;attente</h3>
                    <p className="text-gray-500 text-sm">qui sont les moments privilégiés pendant lesquels la publicité est accueillie comme divertissante</p>
                </div>
                <div className="bg-white p-8 py-12 w-full flex flex-col gap-4 justify-center shadow-sm">
                    <h3 className="text-xl">Cibler précisément la clientèle</h3>
                    <p className="text-gray-500 text-sm">celle-ci est plus réceptive au message qui lui est imposé, son impact est donc démultiplié</p>
                </div>
            </div>
        </section>
    )
}