import React from "react";

const SidebarCart = ({ cart, removeFromCart, toggleCart, showCart }) => {
    return (
        <aside className={`cart-sidebar ${showCart ? "open" : ""}`}>
            {/* Cart Header */}
            <div className="cart-header">
                <h2>Your Cart</h2>
                <button className="close-cart" onClick={toggleCart}>
                    <i className="fas fa-times"></i>
                </button>
            </div>

            {/* Cart Items */}
            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-title">{item.title}</p>
                                <p className="cart-item-price">Rs. {item.price}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                            </div>
                            <button
                                className="cart-item-remove"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="empty-cart-message">Your cart is empty.</p>
                )}
            </div>

            {/* Cart Footer */}
            <div className="cart-footer">
                <button className="close-cart" onClick={toggleCart}>
                    Close Cart
                </button>
            </div>
        </aside>
    );
};

export default SidebarCart;