"use client"

import { useSyncExternalStore } from "react"

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true })
  return () => window.removeEventListener("scroll", onStoreChange)
}

function getSnapshot() {
  return window.scrollY
}

function getServerSnapshot() {
  return 0
}

export function useScrollY() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

