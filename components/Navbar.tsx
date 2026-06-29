'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useLenis } from 'lenis/react';

const MENU_LINKS = [
    { name: 'Home', url: '/' },
    { name: 'About Me', url: '/#about-me' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Projects', url: '/#selected-projects' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const lenis = useLenis();

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            lenis?.stop();
            document.body.style.overflow = 'hidden';
        } else {
            lenis?.start();
            document.body.style.overflow = '';
        }
        return () => {
            lenis?.start();
            document.body.style.overflow = '';
        };
    }, [isMenuOpen, lenis]);

    return (
        <>
            {/* Menu Toggle Button */}
            <div className="fixed top-6 right-6 md:top-10 md:right-10 z-[6]">
                <button
                    className="group relative size-12 md:size-14 flex items-center justify-center transition-transform duration-500 hover:scale-105"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="relative z-10 w-8 h-4 flex flex-col justify-between items-center">
                        <span
                            className={cn(
                                'block w-full h-[2px] bg-white rounded-full transition-all duration-500 origin-center',
                                {
                                    'rotate-45 translate-y-[7px]': isMenuOpen,
                                    'group-hover:-translate-y-1 group-hover:rotate-6': !isMenuOpen,
                                }
                            )}
                        />
                        <span
                            className={cn(
                                'block w-full h-[2px] bg-white rounded-full transition-all duration-500 origin-center',
                                {
                                    '-rotate-45 -translate-y-[7px]': isMenuOpen,
                                    'group-hover:translate-y-1 group-hover:-rotate-6': !isMenuOpen,
                                }
                            )}
                        />
                    </div>
                </button>
            </div>

            {/* Overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-[4] bg-black/60 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                        'opacity-100 visible pointer-events-auto': isMenuOpen,
                    }
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[85%] xs:w-[75%] md:w-[500px] lg:w-[540px] xl:w-[600px] bg-[#080808] border-l border-white/5 transform transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-[5] overflow-y-auto shadow-2xl',
                    {
                        'translate-x-full': !isMenuOpen,
                        'translate-x-0': isMenuOpen,
                    }
                )}
            >
                <div className="flex flex-col min-h-full justify-between pt-20 pb-8 px-6 xs:px-8 md:pt-24 md:pb-10 md:px-12 lg:pt-24 lg:pb-10 lg:px-14 xl:pt-32 xl:pb-12 xl:px-20">
                    {/* Main Menu Links */}
                    <nav className="flex flex-col gap-2 xs:gap-3 md:gap-4 lg:gap-4 xl:gap-6 mt-4 md:mt-6 lg:mt-6 xl:mt-10">
                        {MENU_LINKS.map((link, idx) => (
                            <div key={link.name} className="overflow-hidden py-1 md:py-1.5 lg:py-1.5 xl:py-2">
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        
                                        // Wait for the menu to visually close before scrolling
                                        setTimeout(() => {
                                            if (link.url.startsWith('/#') && window.location.pathname === '/') {
                                                // Extract the hash part (e.g., "#about-me")
                                                const hash = link.url.replace('/', '');
                                                lenis?.scrollTo(hash, { offset: 0, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                                            } else {
                                                router.push(link.url);
                                            }
                                        }, 500);
                                    }}
                                    className={cn(
                                        'group text-4xl xs:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-anton uppercase text-left transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] transform origin-left',
                                        {
                                            'translate-y-[120%] rotate-3 opacity-0': !isMenuOpen,
                                            'translate-y-0 rotate-0 opacity-100': isMenuOpen,
                                        }
                                    )}
                                    style={{ transitionDelay: `${isMenuOpen ? idx * 100 + 200 : 0}ms` }}
                                >
                                    <span className="inline-block relative text-white/40 group-hover:text-white transition-colors duration-500">
                                        {link.name}
                                        {/* Hover Underline effect */}
                                        <span className="absolute left-0 bottom-1 xl:bottom-2 w-0 h-[3px] xl:h-[4px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                                    </span>
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* Bottom Section: Socials & Email */}
                    <div 
                        className={cn(
                            'mt-10 md:mt-12 lg:mt-12 xl:mt-20 flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-8 xl:gap-12 transition-all duration-700 ease-out transform flex-shrink-0',
                            {
                                'translate-y-10 opacity-0': !isMenuOpen,
                                'translate-y-0 opacity-100': isMenuOpen,
                            }
                        )}
                        style={{ transitionDelay: `${isMenuOpen ? 600 : 0}ms` }}
                    >
                        {/* Socials */}
                        <div>
                            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 md:mb-4 xl:mb-5 font-bold font-roboto-flex">Socials</p>
                            <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-2 xl:gap-3 font-roboto-flex">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white/50 hover:text-primary transition-colors text-[10px] md:text-xs uppercase tracking-widest relative group font-medium flex w-fit items-center gap-1"
                                        >
                                            {link.name}
                                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[10px]">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Email */}
                        <div>
                            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 md:mb-4 xl:mb-5 font-bold font-roboto-flex">Get in touch</p>
                            <a 
                                href={`mailto:${GENERAL_INFO.email}`}
                                className="text-white/80 hover:text-primary transition-colors text-xs md:text-sm xl:text-base tracking-wide block relative group overflow-hidden font-roboto-flex w-fit"
                            >
                                {GENERAL_INFO.email}
                                <span className="block w-full h-[1px] bg-white/20 mt-2 relative overflow-hidden">
                                    <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
