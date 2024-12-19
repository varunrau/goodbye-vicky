"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { ChatArea } from "@/components/chat-area"
import { useState } from "react";
import { useEffect } from "react";
import { messages } from "@/lib/messages";

export default function Page() {

  const [numMessages, setNumMessages] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumMessages(prev => Math.min(prev + 1, messages.length));
    }, Math.random() * 4000 + 1000);
  }, [numMessages]);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#3F0E40]">
        <Sidebar numMessages={numMessages} />
        <ChatArea numMessages={numMessages} />
      </div>
    </SidebarProvider>
  )
}

