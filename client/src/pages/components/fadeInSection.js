import { useEffect, useRef, useState } from "react";

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        let obsref = null;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        obsref = domRef.current;
        return () => observer.unobserve(obsref);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;