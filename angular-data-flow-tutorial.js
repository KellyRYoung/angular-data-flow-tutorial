const EXAMPLE_HTML_BLOCKS = document.getElementsByClassName("example-html");
const EXAMPLE_CSS_BLOCKS = document.getElementsByClassName("example-css");
const EXAMPLE_TS_BLOCKS = document.getElementsByClassName("example-ts");
const EXAMPLE_NG_BLOCKS = document.getElementsByClassName("example-ng");

addHtmlLogo = () => {
    for (let i=0; i < EXAMPLE_HTML_BLOCKS.length; i++) {
        EXAMPLE_HTML_BLOCKS[i].insertAdjacentHTML("beforebegin", '<img class="html-logo" src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png">');
    } 
}

addCssLogo = () => {
    for (let i=0; i < EXAMPLE_CSS_BLOCKS.length; i++) {
        EXAMPLE_CSS_BLOCKS[i].insertAdjacentHTML("beforebegin", '<img class="css-logo" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png">');
    }
}

addTsLogo = () => {
    for (let i=0; i < EXAMPLE_TS_BLOCKS.length; i++) {
        EXAMPLE_TS_BLOCKS[i].insertAdjacentHTML("beforebegin", '<img class="ts-logo" src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png">');
    }
}

addNgLogo = () => {
    for (let i=0; i < EXAMPLE_NG_BLOCKS.length; i++) {
        EXAMPLE_NG_BLOCKS[i].insertAdjacentHTML("beforebegin", '<img class="ng-logo" src="https://angular.io/assets/images/logos/angular/angular.png">');
    }
}

onLoadDoThis = () => {    
    addHtmlLogo();
    addCssLogo();
    addTsLogo();
    addNgLogo();
}   