const cardElementsStyle = document.createElement("style");
cardElementsStyle.textContent = `.cardElements {
    padding: 0 200px 0 200px;
} .cardElements .cardHeader {
    text-align: center;
    margin-top: 256px;
    margin-bottom: 64px;
} .cardElements .card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
} .cardElements .card .cardContent {
    width: 336px;
    height: 268px;
    text-align: center;
    margin-bottom: 32px;
}`;
document.head.appendChild(cardElementsStyle);