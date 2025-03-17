import React from "react";

const Navbar = ({ cartCount, toggleCart, searchQuery, setSearchQuery }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className="navbar">
                {/* Hamburger Menu (Visible only on Mobile) */}
                <div className="hamburger-menu" onClick={toggleSidebar}>
                    ☰
                </div>

                {/* Logo (Visible on Desktop) */}
                <div className="logo">KFC 2.0</div>

                {/* Navigation Links (Visible on Desktop) */}
                <ul className="nav-links">
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Cart Icon */}
                <div className="cart-icon" onClick={toggleCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>{cartCount}</span>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                {/* Close Button */}
                <div className="close-sidebar" onClick={toggleSidebar}>
                    ×
                </div>

                {/* Sidebar Links */}
                <ul className="sidebar-links">
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </aside>
        </>
    );
};

export default Navbar;