"use client"

import * as React from "react"
import { Hash, ChevronDown, Plus, MessageSquare, Bell, BookmarkIcon } from 'lucide-react'

import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSkeleton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuBadge,
  useSidebar,
} from "@/components/ui/sidebar"

export function Sidebar({
  numMessages,
  canStart,
  setCanStart,
}: {
  numMessages: number;
  canStart: boolean;
  setCanStart: (canStart: boolean) => void;
}) {
  const { state } = useSidebar();

  return (
    <SidebarPrimitive
      className="min-w-64 shrink-0 bg-[#3F0E40]"
      data-state={state}
    >
      <SidebarHeader className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-between text-[#BCABBC] hover:bg-[#350D36] hover:text-white">
              <span className="text-lg font-bold">Notion</span>
              <ChevronDown className="h-4 w-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="text-[#BCABBC]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-[#350D36] hover:text-white">
                  <MessageSquare className="h-4 w-4" />
                  <span>Threads</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-[#350D36] hover:text-white">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-[#350D36] hover:text-white">
                  <BookmarkIcon className="h-4 w-4" />
                  <span>Saved items</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between px-2 text-[#BCABBC]">
            Channels
            <Plus className="h-4 w-4" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className={`hover:bg-[#350D36] hover:text-white ${
                    canStart ? 'bg-[#1164A3] text-white' : ''
                  }`}
                  onClick={() => setCanStart(true)}
                >
                  <Hash className="h-4 w-4" />
                  <span>
                    #eng-growth-help-i-am-stuck-and-would-like-some-help{" "}
                  </span>
                </SidebarMenuButton>
                {numMessages > 0 && (
                  <SidebarMenuBadge className="bg-red-500 text-white">
                    {numMessages}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuItem>
              {/* Shimmer loading states for remaining channels */}
              {Array.from({ length: 4 }).map((_, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between px-2 text-[#BCABBC]">
            Direct Messages
            <Plus className="h-4 w-4" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Shimmer loading states for DMs */}
              {Array.from({ length: 3 }).map((_, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarPrimitive>
  );
}

