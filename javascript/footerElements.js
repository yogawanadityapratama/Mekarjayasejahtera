const footerElementsStyle = document.createElement("style");
footerElementsStyle.textContent = `.footerElements {
    margin: 256px 0 0 0;
    padding: 64px 200px 0px 200px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
} .footerElements .content {
    padding: 12px;
    margin-bottom: 64px;
} .footerElements .content-1 {
    width: 256px;
    margin-bottom: 64px;
} .footerElements .content .href {
    margin: 16px 0 16px 0;
} .footerElements .content .href a {
    text-decoration: none;
    color: black;
} .footerElements .content .href a:hover {
    color: #FFC727;
}`;
document.head.appendChild(footerElementsStyle);