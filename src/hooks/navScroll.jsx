/* eslint-disable react-hooks/rules-of-hooks */
import { useState,useEffect } from "react"
export default function navScroll() {
    
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return { scroll }
}