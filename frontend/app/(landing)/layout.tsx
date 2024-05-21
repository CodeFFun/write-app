import '../globals.css'
import LandingNav from '@/components/items/navbar/LandingNav'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <>
        <LandingNav />
        <main>
          {children}
        </main>
    </>
  )
}
