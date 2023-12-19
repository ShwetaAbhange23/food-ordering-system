package com.foodapp.service;

import java.util.List;

import com.foodapp.model.Cart;
import com.foodapp.model.Customer;

public interface CartService {

	Cart addCart(Cart cart,long foodId,long customerId);
	List<Cart> getAllCarts();
	Cart getCartById(long cartId);
	Cart updateCart(Cart cart, long cartId);
	void deleteCart(long cartId);
	void deleteCartByCustomer(Customer c);
	

}