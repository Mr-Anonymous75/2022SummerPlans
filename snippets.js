function includeHTMLSnippet() {

    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];

        // Search for elements with
        // specific attributes
        file = element.getAttribute("checkbox");

        if (file) {
            element.innerHTML = this.responseText;
            element.removeAttribute("checkbox");
            includeHTMLSnippet();
            return;
        }
    }
};

includeHTMLSnippet();