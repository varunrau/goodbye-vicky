"use client"

import { useEffect, useRef } from 'react'
import { messages } from '@/lib/messages'

export function MessageList({ numMessages }: { numMessages: number }) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [numMessages])


  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex-1 flex-col h-full">
          <div className="flex flex-row h-full items-end">
            <div>
              👋 Welcome to <b>#eng-growth-help-i-am-stuck-and-would-like-some-help</b>, Vicky!
            </div>
          </div>
        </div>
        {messages.slice(0, numMessages).map((message) => (
        <div key={message.id} className="flex gap-3">
          <img 
            src={message.senderImage}
            alt={message.sender}
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">{message.sender}</span>
              <span className="text-sm text-muted-foreground">{message.timestamp}</span>
            </div>
            <div className="message-content">
              {message.content}
            </div>
            {message.images.length > 0 && (
              <div className="flex gap-2 flex-wrap pt-4">
                {message.images.map((image, index) => (
                  <div key={index} className="relative w-full max-w-[400px] pt-[56.25%]">
                    <img
                      src={image}
                      alt={`${message.sender}'s image ${index + 1}`}
                      className="absolute inset-0 h-full w-full rounded-lg border bg-card object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
  )
}
