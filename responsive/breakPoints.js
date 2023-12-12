const breakPoints = document.createElement("style");
breakPoints.textContent = `@media (max-width: 480px) {
    .logo {
        display: none;
    } nav {
        padding: 0 6px 0 6px;
    } .ctaElements {
        padding: 0 6px 0 6px;
    } .coperationElements {
        padding: 32px 6px 32px 6px;
    } .aboutElements {
        padding: 0 6px 0 6px;
    } .cardElements {
        padding: 0 6px 0 6px;
    } .footerElements {
        padding: 169px 6px 169px 6px;
    }
} @media (min-width: 481px) and (max-width: 767px) {
    .logo {
        display: none;
    } nav {
        padding: 0 6px 0 6px;
    } .ctaElements {
        padding: 0 6px 0 6px;
    } .coperationElements {
        padding: 32px 6px 32px 6px;
    } .aboutElements {
        padding: 0 6px 0 6px;
    } .cardElements {
        padding: 0 6px 0 6px;
    } .footerElements {
        padding: 169px 6px 169px 6px;
    }
} @media (min-width: 768px) and (max-width: 991px) {
    .logo {
        display: none;
    } nav {
        padding: 0 6px 0 6px;
    } .ctaElements {
        padding: 0 6px 0 6px;
    } .coperationElements {
        padding: 32px 6px 32px 6px;
    } .aboutElements {
        padding: 0 6px 0 6px;
    } .cardElements {
        padding: 0 6px 0 6px;
    } .footerElements {
        padding: 169px 6px 169px 6px;
    }
} @media (min-width: 992px) and (max-width: 1199px) {
    .selector {
        property: value;
    }
} @media (min-width: 1200px) and (max-width: 1919px) {
    .selector {
        property: value;
    }
} @media (min-width: 1920px) {
    .selector {
        property: value;
    }
}`;
document.head.appendChild(breakPoints);