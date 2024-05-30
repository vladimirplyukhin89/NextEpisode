import { useState, useCallback } from "react";

export const useScroll = () => {
    const [progress, setProgress] = useState(0)
    
    const handleScroll = useCallback(() => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPosition = window.scrollY
            const scrollProgress = (scrollPosition / totalScrollHeight) * 100
            setProgress(scrollProgress)
    }, [])
    
    return { progress, handleScroll }
}
