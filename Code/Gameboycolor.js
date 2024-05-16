function showImage() {
    var imageContainer =
        document.createElement("div");
    imageContainer.className =
        "image-container";

    var image =
        document.createElement("img");
    image.src =
"../Ressources/gbc.png";
    var closeButton =
        document.createElement(
            "button"
        );
    closeButton.textContent = "Close";
    closeButton.className =
        "close-btn";
    closeButton.onclick =
        function () {
            document.body.removeChild(
                imageContainer
            );
        };

    imageContainer.appendChild(
        closeButton
    );
    imageContainer.appendChild(image);

    document.body.appendChild(
        imageContainer
    );
}            function showImage() {
    var imageContainer =
        document.createElement("div");
    imageContainer.className =
        "image-container";

    var image =
        document.createElement("img");
    image.src =
"../Ressources/gbc.png";
    var closeButton =
        document.createElement(
            "button"
        );
    closeButton.textContent = "Close";
    closeButton.className =
        "close-btn";
    closeButton.onclick =
        function () {
            document.body.removeChild(
                imageContainer
            );
        };

    imageContainer.appendChild(
        closeButton
    );
    imageContainer.appendChild(image);

    document.body.appendChild(
        imageContainer
    );
}