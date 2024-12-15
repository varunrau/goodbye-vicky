import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { ChatArea } from "@/components/chat-area"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#3F0E40]">
        <Sidebar />
        <ChatArea />
      </div>
    </SidebarProvider>
  )
}

