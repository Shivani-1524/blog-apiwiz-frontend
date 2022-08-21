import React from 'react'
import { MdDarkMode, BsFillSunFill } from '../Assets/icons';
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../Context/theme-provider'

const Header = ({ children }) => {
    const navigate = useNavigate()
    const { setTheme, theme } = useTheme()
    return (
        <header className='space-bw bloglist-header'>
            <p onClick={() => navigate('/')} className="md-title boldest pointer">Blogs</p>
            <div className="util-items">
                {theme === "light" ? <MdDarkMode onClick={() => setTheme("dark")} className='icon-md' /> :
                    <BsFillSunFill className='icon-md' onClick={() => setTheme("light")} />}
                {children}
            </div>
        </header>
    )
}

export { Header }