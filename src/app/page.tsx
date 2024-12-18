"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { ChatArea } from "@/components/chat-area"
import { useState } from "react";
import { useEffect } from "react";
import { messages } from "@/lib/messages";

export default function Page() {

  const [canStart, setCanStart] = useState(false);

  const [numMessages, setNumMessages] = useState(0);

  useEffect(() => {
    if (!canStart) {
      return;
    }
    setTimeout(() => {
      setNumMessages(prev => {
        const newValue = Math.min(prev + 1, messages.length);
        if (newValue !== prev) {
          const sound = new Audio('ping.mp3');
          sound.play();
        }
        return newValue;
      });
    }, Math.random() * 2000 + 1000);
  }, [canStart, numMessages]);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#3F0E40]">
        <Sidebar numMessages={numMessages} canStart={canStart} setCanStart={setCanStart} />
        <ChatArea numMessages={numMessages} canStart={canStart} setCanStart={setCanStart} />
      </div>
    </SidebarProvider>
  )
}

