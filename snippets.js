function includeHTMLSnippet() {

    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];
        file = element.getAttribute("checkbox");

        if (file) {
            element.innerHTML =
                "<input id=\"termsCheck\" type=\"checkbox\" name=\"terms\" />"
                + element.innerHTML;
        }
    }
};