## Tested source  https://nashformat.ua/ 

// TC 1 "Search books by category"

1. Open source link 
2. click //li[@class="navigation-li navigation-li_drop navigation-li_drop_red"] -> //div[@class="navigation-cat-drop active"] appeared
3. Click //a[@href="all-books" and contains(@class, "bottom_item_link")] -> //div[@class="all-cat-categories"] opened
4. Click //div[@class="all-cat-categories"]//span[@class="category_name" and normalize-space(text())="Трилер. Кримінал. Бойовик"] 
5. Verify that //h1[normalize-space(text())="Бойовик. Трилер"]


// TC 2 "Add and delete book from the cart"

1. Open https://nashformat.ua/all-books
2. Click //a[@href="new-books"]
3. Click //a[@href="catalog/novynky-non-fiction"]
4. Click //button[@class="fn-is_stock btn btn_buy variant_58511 fn_variant_58511"] to add book to the cart
5. //div[@class="modal-content"] is appeared with the appropriate book 
6. Click //a[@href="cart/clear"]
7. //div[@id="cartPopup"]//span[contains(@class, "cart_popup_empty_h1")] is appeared
8. Click //button[@class="closePopup"] 
9. Verify that //i[@class="cart-count"] is equal to 0