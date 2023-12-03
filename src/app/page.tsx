import HomeBanner from "./components/banners/HomeBanner";
import HomeGrid from "./components/grids/HomeGrid";
import SectionSavoirFaireHome from "./components/sections/SectionSavoirFaireHome";
import Section4SupportsHome from "./components/sections/Section4SupportsHome";
import SectionTemoignages from "./components/sections/SectionTemoignages";
import SectionActualite from "./components/sections/SectionActualite";
import SectionVideo from "./components/sections/SectionVideo";

export default function Home() {
  return (
    <main className="bg-white">
        <HomeBanner/>
        <HomeGrid/>
        <SectionSavoirFaireHome/>
        <Section4SupportsHome/>
        <SectionTemoignages/>
        <SectionActualite/>
        <SectionVideo/>
    </main>
  )
}
