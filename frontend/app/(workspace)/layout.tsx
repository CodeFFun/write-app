import { WorkspaceProvider } from '@/components/lib/context/WorkspaceContext'
import '../globals.css'


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <>
        <WorkspaceProvider>
            <main>
            {children}
            </main>
        </WorkspaceProvider>
    </>
  )
}