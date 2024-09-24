import LandingMain from "@/components/items/main/LandingMain"
import LandingNav from "@/components/items/navbar/LandingNav"



export default function LandingPage() {
  return (
    <>
      <nav>
        <LandingNav />
      </nav>
      <main>
        <LandingMain />
      </main>
    </>
  )
}
