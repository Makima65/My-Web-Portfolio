"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // This prevents the button from glitching before the page fully loads
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div style={{ width: '60px', height: '30px' }} />

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input 
          type="checkbox" 
          className="checkbox" 
          checked={theme === 'light'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <span className="slider" />
      </label>

      {/* Upgraded Buttery Smooth CSS */}
      <style>{`
        .toggle-switch {
          position: relative;
          width: 60px;
          height: 30px;
          --light: #d8dbe0;
          --dark: #28292c;
        }
        .switch-label {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--dark);
          border-radius: 25px;
          cursor: pointer;
          border: 3px solid var(--dark);
        }
        .checkbox {
          position: absolute;
          display: none;
        }
        .slider {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 25px;
          /* Smooth background color fade */
          transition: background-color 0.4s ease-in-out; 
        }
        .checkbox:checked ~ .slider {
          background-color: var(--light);
        }
        .slider::before {
          content: "";
          position: absolute;
          top: 4px;
          left: 5px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          box-shadow: inset 7px -2px 0px 0px var(--light);
          background-color: var(--dark);
          /* Premium glide and subtle bounce effect */
          transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), 
                      background-color 0.4s ease-in-out,
                      box-shadow 0.4s ease-in-out;
        }
        .checkbox:checked ~ .slider::before {
          transform: translateX(28px);
          background-color: var(--dark);
          box-shadow: none;
        }
      `}</style>
    </div>
  )
}