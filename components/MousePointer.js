// Core Components
import { useState, useEffect, useCallback, useRef } from "react"


export default function MousePointer() {
    const [position, setPosition] = useState({x: 0, y: 0});
    
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        });

    }, []);


    return (
        <>
            <div className="p__cursor" style={{top: position.y, left: position.x}}>
                <div className="p__inner"></div>
            </div>
        </>
    )
}