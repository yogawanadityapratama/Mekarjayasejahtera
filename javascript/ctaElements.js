const ctaElementsStyle = document.createElement("style");
ctaElementsStyle.textContent = `.ctaElements {
    text-align: center;
} .postision {
    display: flex;
    justify-content: center;
} .postision .card {
    padding: 10px;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.15);
    width: fit-content;
} .postision .button {
    padding: 10px;
    border-radius: 100px;
    background-color: #FFC727;
    width: fit-content;
}`;
document.head.appendChild(ctaElementsStyle);