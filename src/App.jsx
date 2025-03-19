import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SidebarCart from "./components/SidebarCart";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import GoToTopButton from "./components/GoTop";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch data from Products.json
    useEffect(() => {
        fetch("Products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.categoryId]) {
            acc[product.categoryId] = [];
        }
        acc[product.categoryId].push(product);
        return acc;
    }, {});

    // Filter products based on search query
    const filteredProducts = Object.keys(groupedProducts).reduce((acc, categoryId) => {
        acc[categoryId] = groupedProducts[categoryId].filter(
            (product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return acc;
    }, {});

    // Add item to cart
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    // Toggle cart visibility
    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <div className="app-container">
            {/* Navbar */}
            <Navbar
                cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
                toggleCart={toggleCart}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Sidebar Cart */}
            <SidebarCart
                cart={cart}
                removeFromCart={removeFromCart}
                toggleCart={toggleCart}
                showCart={showCart}
            />

            {/* Main Content */}
            <main className="main-content">
                {/* Meals Section */}
                {filteredProducts[101]?.length > 0 && (
                    <section>
                        <h2>Meals</h2>
                        <div className="product-list">
                            {filteredProducts[101].map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Burgers Section */}
                {filteredProducts[102]?.length > 0 && (
                    <section>
                        <h2>Burgers</h2>
                        <div className="product-list">
                            {filteredProducts[102].map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Meal Boxes Section */}
                {filteredProducts[103]?.length > 0 && (
                    <section>
                        <h2>Meal Boxes</h2>
                        <div className="product-list">
                            {filteredProducts[103].map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Offers Section */}
                {filteredProducts[104]?.length > 0 && (
                    <section>
                        <h2>Offers</h2>
                        <div className="product-list">
                            {filteredProducts[104].map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Snacks & Drinks Section */}
                {filteredProducts[105]?.length > 0 && (
                    <section>
                        <h2>Snacks & Drinks</h2>
                        <div className="product-list">
                            {filteredProducts[105].map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Midnight Deals Section */}
                {filteredProducts[106]?.length > 0 && (
                    <section>
                        <h2>Midnight Deals</h2>
                        <div className="product-list">
                            {filteredProducts[106].map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </section>
                )}
                <GoToTopButton/>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;