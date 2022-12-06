import { useState, useEffect } from "react"

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);
    useEffect(() => {
        const nodeElement = element.current
        if (!nodeElement) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        nodeElement && observer.observe(nodeElement);

        return () => observer.unobserve(nodeElement);
    }, []);

    return isVisible;
}

export { useIntersection }