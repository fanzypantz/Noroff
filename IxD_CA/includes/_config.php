
<?php
switch ($_SERVER["SCRIPT_NAME"]) {
    case "/contact.php":
        $CURRENT_PAGE = "Contact";
        $PAGE_TITLE = "Contact Us";
        $KEYWORDS = "contact email social-media";
        $DESCRIPTION = "Contact Us!";
        break;
    case "/about.php":
        $CURRENT_PAGE = "About";
        $PAGE_TITLE = "About Us";
        $KEYWORDS = "history story craftsmanship vision ideals";
        $DESCRIPTION = "Our History";
        break;
    case "/products.php":
        $CURRENT_PAGE = "Products";
        $PAGE_TITLE = "Our Selection of Products";
        $KEYWORDS = "brouge oxford derbies wallets belts polish";
        $DESCRIPTION = "Our Selection of Products";
        break;
    case "/faq.php":
        $CURRENT_PAGE = "FAQ";
        $PAGE_TITLE = "Frequently Asked Questions";
        $KEYWORDS = "FAQ frequently asked questions";
        $DESCRIPTION = "Frequently Asked Questions";
        break;
    default:
        $CURRENT_PAGE = "Index";
        $PAGE_TITLE = "Sustainable Leather Craftsmanship";
        $KEYWORDS = "sustainable letha leather craftsmanship belt wallet shoes derbies oxford brouge hiking";
        $DESCRIPTION = "Sustainable Leather Craftsmanship";
}

const SHOES = [
	[
		'title' => "stoneygate dark tan",
		'tag' => "TAMPONATO CALF LEATHER OXFORD BROGUE",
		'category' => "shoes",
		'subCategory' => "oxford",
		'image' => "/images/shoes01.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 299,
	],
	[
		'title' => "YARFORD COGNAC",
		'tag' => "TAMPONATO CALF LEATHER WHOLECUT",
		'category' => "shoes",
		'subCategory' => "oxford",
		'image' => "/images/shoes02.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 399,
	],
	[
		'title' => "PINZOLO DARK BROWN",
		'tag' => "Hand Antiqued Leather Adelaide Oxford Shoe",
		'category' => "shoes",
		'subCategory' => "oxford",
		'image' => "/images/shoes03.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 299,
	],
	[
		'title' => "YARFORD BLACK",
		'tag' => "Calf Leather Wholecut",
		'category' => "shoes",
		'subCategory' => "oxford",
		'image' => "/images/shoes04.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 399,
	],
    [
        'title' => "PINZOLO DARK BROWN",
        'tag' => "Hand Antiqued Leather Adelaide Oxford Shoe",
        'category' => "shoes",
        'subCategory' => "oxford",
        'image' => "/images/shoes05.jpg",
        'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
        'price' => 399,
    ],
    [
        'title' => "PINZOLO BLACK",
        'tag' => "Calf Leather Adelaide Oxford Shoe",
        'category' => "shoes",
        'subCategory' => "oxford",
        'image' => "/images/shoes06.jpg",
        'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
        'price' => 399,
    ],
	[
		'title' => "EXMINSTER DARK TAN",
		'tag' => "Tamponato Calf Leather Derby Brogue",
		'category' => "shoes",
		'subCategory' => "Brogue",
		'image' => "/images/shoes07.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 299,
	],
	[
		'title' => "STONEYGATE BLUE",
		'tag' => "Tamponato Calf Leather Oxford Brogue",
		'category' => "shoes",
		'subCategory' => "Brogue",
		'image' => "/images/shoes08.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 399,
	],
	[
		'title' => "STONEYGATE DARK TAN",
		'tag' => "Tamponato Calf Leather Oxford Brogue",
		'category' => "shoes",
		'subCategory' => "Brogue",
		'image' => "/images/shoes09.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 399,
	],
	[
		'title' => "STOGUMBER BROWN",
		'tag' => "Suede Derby Brogue Shoe",
		'category' => "shoes",
		'subCategory' => "Brogue",
		'image' => "/images/shoes02.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 399,
	],
    [
        'title' => "LOMASO DARK TAN",
        'tag' => "Hand Antiqued Leather Oxford Shoe",
        'category' => "shoes",
        'subCategory' => "Brogue",
        'image' => "/images/shoes04.jpg",
        'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
        'price' => 399,
    ],
    [
        'title' => "LOMASO BLACK",
        'tag' => "Calf Leather/Suede Oxford Shoe",
        'category' => "shoes",
        'subCategory' => "Brogue",
        'image' => "/images/shoes01.jpg",
        'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
        'price' => 399,
    ],
	[
		'title' => "PENDOMER BLACK",
		'tag' => "Calf Leather Derby Shoe",
		'category' => "shoes",
		'subCategory' => "Derbies",
		'image' => "/images/shoes03.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 299,
	],
	[
		'title' => "PENDOMER DARK TAN",
		'tag' => "Tamponato Calf Leather Derby Shoe",
		'category' => "shoes",
		'subCategory' => "Derbies",
		'image' => "/images/shoes06.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 299,
	],
	[
		'title' => "STOGUMBER BROWN",
		'tag' => "Suede Derby Brogue Shoe",
		'category' => "shoes",
		'subCategory' => "Derbies",
		'image' => "/images/shoes08.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 299,
	],
	[
		'title' => "STOGUMBER NAVY",
		'tag' => "Suede Derby Brogue Shoe",
		'category' => "shoes",
		'subCategory' => "Derbies",
		'image' => "/images/shoes09.jpg",
		'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
		'price' => 399,
	],
    [
        'title' => "LATHERTON BLACK",
        'tag' => "Hand Finished Leather Derby Brogue",
        'category' => "shoes",
        'subCategory' => "Derbies",
        'image' => "/images/shoes04.jpg",
        'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
        'price' => 399,
    ],
    [
        'title' => "SAUNDERS DARK TAN",
        'tag' => "Calf Leather Derby Brogue",
        'category' => "shoes",
        'subCategory' => "Derbies",
        'image' => "/images/shoes02.jpg",
        'sizes' => [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0, 10.5, 11.0, 11.5, 12.0],
        'price' => 399,
    ],
];

const ACCESSORIES = [
    [
        'title' => "Trifold Wallet",
        'tag' => "HANDCRAFTED WALLET FROM WALES",
        'category' => "wallet",
        'subCategory' => "accessories",
        'image' => "/images/wallet.jpg",
        'sizes' => ['Small', 'Medium', 'Large'],
        'price' => 39,
    ],
    [
        'title' => "Trifold Wallet",
        'tag' => "HANDCRAFTED WALLET FROM WALES",
        'category' => "wallet",
        'subCategory' => "accessories",
        'image' => "/images/wallet.jpg",
        'sizes' => ['Small', 'Medium', 'Large'],
        'price' => 39,
    ],
    [
        'title' => "Trifold Wallet",
        'tag' => "HANDCRAFTED WALLET FROM WALES",
        'category' => "wallet",
        'subCategory' => "accessories",
        'image' => "/images/wallet.jpg",
        'sizes' => ['Small', 'Medium', 'Large'],
        'price' => 39,
    ],
    [
        'title' => "Cowhide Belt",
        'tag' => "Full grain leather belts",
        'category' => "belt",
        'subCategory' => "accessories",
        'image' => "/images/belt.jpg",
        'sizes' => ['Small', 'Medium', 'Large'],
        'price' => 59,
    ],
    [
        'title' => "Cowhide Belt",
        'tag' => "Full grain leather belts",
        'category' => "belt",
        'subCategory' => "accessories",
        'image' => "/images/belt.jpg",
        'sizes' => ['Small', 'Medium', 'Large'],
        'price' => 59,
    ],
    [
        'title' => "Cowhide Belt",
        'tag' => "Full grain leather belts",
        'category' => "belt",
        'subCategory' => "accessories",
        'image' => "/images/belt.jpg",
        'sizes' => ['Small', 'Medium', 'Large'],
        'price' => 59,
    ],
];

?>
