import React from "react"
import Link from "next/link"
import { PlusIcon, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "./ui/button"
import { NextIcon, SupabaseIcon } from "./ui/icons"

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center md:items-start md:px-2 justify-center gap-2 md:ml-12">
      <div className="flex items-center space-x-2">
        <h1 className="text-5xl font-black text-left">Product</h1>
        <Badge
          variant="outline"
          className="border border-primary/10 hidden md:block"
        >
          <span className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse mr-1"></span>
          ized studio
        </Badge>
      </div>
      <div className="flex flex-col items-center md:items-start md:mt-4">
        <Badge className="hidden md:block" variant="default">
          Studio Directory Site
        </Badge>
        <div className="flex w-full items-center mt-2 justify-center md:justify-start">
          <NextIcon className="hidden md:block size-4" />
          <span className="mx-2 text-xl font-bold text-left">
            Find your next great studio
          </span>
          <SupabaseIcon className="hidden md:block size-4" />
        </div>
        <p className="mt-2 text-center md:text-left text-muted-foreground text-sm md:text-base px-2">
          A Curated & Vetted List of the BEST Productized Studios. Design &gt; Email &gt;
          SaaS &gt; <span className="text-yellow-200/40">$</span>
          <span className="text-yellow-200/60">$</span>
          <span className="text-yellow-300/80">$</span>
        </p>
      </div>
      <div className="flex mt-4 mb-4 space-x-4">
        <Button variant="secondary" asChild>
          <Link href="/submit" className="flex items-center text-black">
            <PlusIcon className="size-4 mr-1" /> Submit tool
          </Link>
        </Button>
        <a
          href="https://x.com/nolansym"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <Twitter className="size-4 mr-1" />
          updates
        </a>
      </div>
      {children}
    </div>
  )
}
