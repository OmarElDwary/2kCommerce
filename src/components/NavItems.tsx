"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useOnClickOutside } from "@/hooks/use-on-click";
import { useState, useRef, useEffect } from "react";
import NavItem from "./Navitem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<
        null | number
    >(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveIndex(null);
            }
        }
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        }
    }, [])

    const isAnyOpen = activeIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(navRef, () => setActiveIndex(null));

    return <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, id) => {
            const handleOpen = () => {
                if (activeIndex === id) {
                    setActiveIndex(null);
                } else {
                    setActiveIndex(id);
                }
            }
            const isOpen = activeIndex === id;
            return <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen} />
        })}
    </div>;
}

export default NavItems;