"use client"

import { MoreHorizontal } from 'lucide-react'
import { useMobile } from '@/hooks/use-mobile'
import { Button } from "@/components/ui/button"
import { MessageList } from "@/components/message-list"

export function ChatArea({ numMessages, canStart, setCanStart }: { numMessages: number, canStart: boolean, setCanStart: (canStart: boolean) => void }) {
  const isMobile = useMobile()

  if (!canStart) {
    return (
      <div className="flex h-full w-full flex-col bg-white" onClick={() => setCanStart(true)}>
        <div className="flex h-full w-full flex-col bg-white items-center justify-center">
          <div className="text-xl font-bold">
            {isMobile ? "Tap anywhere to get started" : "Select a channel to get started"}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <header className="flex h-12 items-center justify-between border-b border-[#522653] bg-[#3F0E40] px-4 py-8 md:py-0 py-6 text-white">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">#eng-growth-help-i-am-stuck-and-would-like-some-help</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#350D36]">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Messages */}
      <MessageList numMessages={numMessages} />

      {/* Join Channel Button */}
      <div className="border-t p-4 flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">#eng-growth-help-i-am-stuck-and-would-like-some-help</h2>
        <a 
          href="https://notion.com/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#3F0E40] hover:bg-[#350D36] text-white h-10 px-8"
        >
          Join channel to respond
        </a>
      </div>
    </div>
  )
}
