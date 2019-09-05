const EXAMPLE_HTML_BLOCKS = document.getElementsByClassName("example-html");

addHtmlLogo = () => {
    for (let i=0; i < EXAMPLE_HTML_BLOCKS.length; i++) {
        EXAMPLE_HTML_BLOCKS[i].insertAdjacentHTML("beforebegin", '<img class="html-logo" src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png">');
    } 
} 

onLoadDoThis = () => {
    addHtmlLogo();
}