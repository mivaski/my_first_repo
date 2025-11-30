# Lesson18 - Playwright

 ## TC USED
"Add and delete book from the cart"

1. Open https://nashformat.ua/all-books
2. Click //a[@href="new-books"]
3. Click //a[@href=""/catalog/novynky""]
4. Click''//button[contains(@class, "btn_buy")]'' to add book to the cart
5. //div[@class="modal-content"] is appeared with the appropriate book 
6. Click //a[@href="cart/clear"]
7. //div[@id="cartPopup"]//span[contains(@class, "cart_popup_empty_h1")] is appeared
8. Click //button[@class="closePopup"] 
9. Verify that //i[@class="cart-count"] is equal to 0

