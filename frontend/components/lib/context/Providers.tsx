'use client';

import { WorkspaceProvider } from "./WorkspaceContext";

export function Providers({ children }:{children:React.ReactNode}) {
    return <WorkspaceProvider>{children}</WorkspaceProvider>;


}