'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-inner">
                <Link href="/" className="logo" onClick={closeMenu}>
                    <span className="logo-text">SenseDrive</span>
                </Link>

                {/* Hamburger Button */}
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation */}
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/#services" className="nav-link" onClick={closeMenu}>Services</Link></li>
                        <li><Link href="/about" className="nav-link" onClick={closeMenu}>About us</Link></li>
                        <li><Link href="/message" className="nav-link" onClick={closeMenu}>Message</Link></li>
                        <li><Link href="/#works" className="nav-link" onClick={closeMenu}>Works</Link></li>
                        <li><Link href="/#news" className="nav-link" onClick={closeMenu}>News</Link></li>
                    </ul>
                    <Link href="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
