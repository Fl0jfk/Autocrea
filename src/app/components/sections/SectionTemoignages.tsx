import Slider from "../sliders/TestimonialSlider"
import Fiat from "public/temoignage-autocrea-olivier-tavera-fiat-pro.png"
import Bmw from "public/temoignage-autocrea-helene-legay-bmw.png"
import Citya from "public/temoignage-autocrea-marylaure-gesquin-citya-immobilier.png"
 
const slides = [
    {
        id: 1,
        image: Fiat,
        alt: "Logo de Fiat",
        nom: "Olivier Tavera",
        fonction: "Business Development Manager",
        entreprise: "Fiat Professional",
        temoignage: "Le set de table publicitaire offre à nos distributeurs une visibilité locale complémentaire des campagnes nationales."
    },
    {
        id: 2,
        image: Bmw,
        alt: "Logo de BMW",
        nom: "Hélène Legay",
        fonction: "Responsable Marketing",
        entreprise: "BMW",
        temoignage: "Je connaissais le concept du set de table publicitaire et j'y prête toujours attention. J'apprécie surtout le fait qu'ils soient visibles par tout le monde, qu'ils ne ciblent pas une clientèle en particulier."
    },
    {
        id: 3,
        image: Citya,
        alt: "Logo de Citya",
        nom: "Marylaure Gesquin",
        fonction: "Directrice d'agence",
        entreprise: "Citya Immobilier",
        temoignage: "En 2016, Citya Immobilier avait un encart sur l'édition caennaise du set de table publicitaire Autocrea. J'ai voulu faire un test pour promouvoir l'activité location pour la saison étudiante qui va de Juillet à Septembre."
    }
]

export default function SectionTemoignages (){
    return (
        <section className="flex flex-col bg-black w-full h-[70vh] gap-16 items-center text-sm p-12 pt-[15vh] sm:h-[50vh] sm:p-4 sm:gap-2">
            <h2 className="uppercase text-green-500">Témoignages</h2>
            <Slider data={slides}/>
        </section>
    )
}