
<?php
switch ($_SERVER["SCRIPT_NAME"]) {
    case "/contact.php":
        $CURRENT_PAGE = "Contact";
        $PAGE_TITLE = "Contact Us";
        break;
    case "/visit.php":
        $CURRENT_PAGE = "Visit Us";
        $PAGE_TITLE = "Visit Us";
        break;
    case "/exhibitions.php":
        $CURRENT_PAGE = "Exhibitions";
        $PAGE_TITLE = "Our Exhibitions";
        break;
    case "/involvement.php":
        $CURRENT_PAGE = "Involvement";
        $PAGE_TITLE = "Get Involved";
        break;
    default:
        $CURRENT_PAGE = "Index";
        $PAGE_TITLE = "Welcome to your local Community Science Museum";
}
?>
