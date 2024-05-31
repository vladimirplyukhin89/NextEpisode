import { useState, useEffect } from "react";

export const useScroll = () => {
    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPosition = window.scrollY
            const scrollProgress = Math.round((scrollPosition / totalScrollHeight) * 100)
            setProgress(scrollProgress)
        }
        
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return { progress }
}
