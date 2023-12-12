const navigationElementStyle = document.createElement("style");
navigationElementStyle.textContent = `@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap'); * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
} body {
    background-color: #171717;
    color: white;
} nav {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 200px 0 200px;
    height: 128px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #171717;
} nav ul {
    display: flex;
    flex-wrap: wrap;
} nav ul li {
    list-style: none;
} nav ul li a {
    text-decoration: none;
    color: white;
    margin: 0 12px 0 12px;
}
`;
document.head.appendChild(navigationElementStyle);