import { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { getTotalItems, getWishlistCount, toggleCart } = useCart();

  const navItems = [
    { id: 1, label: 'Home', href: '#' },
    { id: 2, label: 'Products', href: '#' },
    { id: 3, label: 'Categories', href: '#' },
    { id: 4, label: 'About', href: '#' },
    { id: 5, label: 'Contact', href: '#' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const cartCount = getTotalItems();
  const wishlistCount = getWishlistCount();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="header-branding">
            <h1 className="header-title">QuickCart</h1>
            <p className="header-subtitle">Your one-stop shop for everything</p>
          </div>
          <div className="header-actions">
            <button className="wishlist-button">
              <span className="wishlist-icon">❤️</span>
              <span>Wishlist</span>
              {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
            </button>
            <button className="cart-button" onClick={toggleCart}>
              <span className="cart-icon">🛒</span>
              <span>Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <div className="user-menu-container">
              <button 
                className="user-button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <span className="user-icon">👤</span>
              </button>
              {userMenuOpen && (
                <div className="user-dropdown">
                  <a href="#" className="dropdown-item">My Profile</a>
                  <a href="#" className="dropdown-item">Orders</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item logout">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;

  const navItems = [
    { id: 1, label: 'Home', href: '#' },
    { id: 2, label: 'Products', href: '#' },
    { id: 3, label: 'Categories', href: '#' },
    { id: 4, label: 'About', href: '#' },
    { id: 5, label: 'Contact', href: '#' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="header-branding">
            <h1 className="header-title">QuickCart</h1>
            <p className="header-subtitle">Your one-stop shop for everything</p>
          </div>
          <div className="header-actions">
            <button className="wishlist-button">
              <span className="wishlist-icon">❤️</span>
              <span>Wishlist</span>
              {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
            </button>
            <button className="cart-button">
              <span className="cart-icon">🛒</span>
              <span>Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <div className="user-menu-container">
              <button 
                className="user-button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <span className="user-icon">👤</span>
              </button>
              {userMenuOpen && (
                <div className="user-dropdown">
                  <a href="#" className="dropdown-item">My Profile</a>
                  <a href="#" className="dropdown-item">Orders</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item logout">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
