import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  const renderLink = (link) => {
    const isHashLink = link.path.startsWith('#')
    const isHomePage = location.pathname === '/'

    if (isHashLink && isHomePage) {
      return (
        <a
          key={link.name}
          href={link.path}
          className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-colors text-white"
          onClick={closeMenu}
        >
          {link.name}
        </a>
      )
    }

    return (
      <Link
        key={link.name}
        to={isHashLink ? '/' : link.path}
        className={`text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-colors ${
          location.pathname === link.path
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500'
            : 'text-white'
        }`}
        onClick={closeMenu}
      >
        {link.name}
      </Link>
    )
  }

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-screen-xl transition-all duration-300 ${scrolled ? 'bg-transperent backdrop-blur-sm py-4' : 'bg-black/70 backdrop-blur-sm py-6'} rounded-xl shadow-lg`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src="/img/logo.png" alt="Nari-Nexus Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navLinks.map((link) => renderLink(link))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => renderLink(link))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
