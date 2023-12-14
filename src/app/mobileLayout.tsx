import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import {useEffect} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const fontType = EB_Garamond({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chronicles of Mieraud',
  description: 'The Book Series',
}

export default function MobileLayout({ 
  children,
}: { 
  children: React.ReactNode 
}) {

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName == '/') {
      router.push('/mobileHome');
      router.refresh;
      router.push('/mobileHome');
    }
  }, [pathName, router]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

 

  return (

    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={fontType.className}>
        <Analytics />
        <SpeedInsights />
        <div>
          {/* "Buy Now" button */}
          <div className="absolute top-[2%] right-[4%]">
            <p className="bg-zinc-200 text-black p-2">
              <a
                href="https://www.amazon.com/dp/B09PHCFNH8?binding=paperback&qid=1700102595&sr=1-1&ref=dbs_dp_rwt_sb_pc_tpbk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Buy Now&nbsp;</b>
              </a>
            </p>
          </div>

          <div className="burger-menu" onClick={toggleMenu}>
            ☰
          </div>

          {menuOpen && (
            <div className="mobile-nav">
              <Link legacyBehavior href="/mobileHome" passHref>
                <a onClick={closeMenu}>Home</a>
              </Link>
              <Link legacyBehavior href="/mobileAbout" passHref>
                <a onClick={closeMenu}>About</a>
              </Link>
              <Link legacyBehavior href="/mobileMap" passHref>
                <a onClick={closeMenu}>Map</a>
              </Link>
              <Link legacyBehavior href="/mobileBookOne" passHref>
                <a onClick={closeMenu}>Book One</a>
              </Link>
              <Link legacyBehavior href="/mobileBookTwo" passHref>
                <a onClick={closeMenu}>Book Two</a>
              </Link>
              <Link legacyBehavior href="/mobileBookThree" passHref>
                <a onClick={closeMenu}>Book Three</a>
              </Link>
            </div>
          )}

          <div className="main-content">
            {children}
          </div>

          <style jsx>
            {`
              .burger-menu {
                position: fixed;
                top: 12px;
                left: 10px;
                cursor: pointer;
                font-size: 40px;
                z-index: 1000;
                }
              
              .mobile-nav {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: white; /* Customize the background color */
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 999;
                }
              
              .mobile-nav a {
                margin: 10px;
                font-size: 30px;
                text-decoration: none;
                color: black; /* Customize the text color */
                }
              
              .main-content {
                margin-top: 50px; /* Adjust to leave space for the burger menu */
                }
            `}
          </style>
        </div>
      </body>
    </html>
  );
}