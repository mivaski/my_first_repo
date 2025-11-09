## Tested source  https://nashformat.ua/ 

// TC 1 "Search authors via alphabet"

1. Open source link -> .navigation-wrapper should be visible 
2. Click .navigation-li_publish > a[data-page="8"] -> #alphabet_list__ appeared
3. Click a[href="/authors/letter-14"] 
4. observe .publishers_list 
5. Verify that each .publishers_list__li has a[href="authors/....."] which contains 'k' letter

// TC 2 "Search book by its tittle"

1. Open source link -> #fn-search is visible 
2. Enter book title (сто років самотності) into the #fn-search input[name="keyword"]
3. Click button .header_search-button
4. Verify that h1.h1.category-title.products-category-title contains searched tittle
5. Verify that #fn-products_content contains searched items a.card-image[href="products/sto-rokiv-samotnosti-folio.-svitova-klasyka-951037"]