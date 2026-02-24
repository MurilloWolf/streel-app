"use client"

import { useEffect, useRef, useState } from "react"

type UseInViewOptions = IntersectionObserverInit & {
  freezeOnceVisible?: boolean
}

export function useInView<T extends Element>(options: UseInViewOptions = {}) {
  const { freezeOnceVisible = true } = options
  const root = options.root
  const rootMargin = options.rootMargin
  const threshold = options.threshold
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (freezeOnceVisible && isInView) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return
      if (entry.isIntersecting) setIsInView(true)
      else if (!freezeOnceVisible) setIsInView(false)
    }, { root, rootMargin, threshold })

    observer.observe(node)
    return () => observer.disconnect()
  }, [freezeOnceVisible, isInView, root, rootMargin, threshold])

  return { ref, isInView }
}
