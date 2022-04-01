function includeHTMLSnippet() {

    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];

        // Search for elements with
        // specific attributes
        file = element.getAttribute(
            "checkbox");

        if (file) {
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML += this.responseText;
                    }

                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }

                    // Delete the attribute and
                    // call this function again.
                    element.removeAttribute(
                        "checkbox");

                    includeHTMLSnippet();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return; // Exit function.
        }
    }
};

includeHTMLSnippet();