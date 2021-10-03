$(() => {
    $("button").toArray().forEach( button => {
        if ( button.dataset.goto )
            button.onclick = () => { goto( button.dataset.goto ) }
    } )
    document.onkeydown = ( event ) => {
        if ( event.code == "ArrowLeft" ) goBack();
        else if ( event.code == "ArrowRight" ) goNext();
    }
});

let current = config.home;
let last    = config.home;

function goto ( key ) {
    console.log(!key || key == "")
    if ( !key || key == "" ) key = config.home;
    last = current;
    current = key;
    $("section").toArray().forEach( section => {
        if ( section.id == key ) section.style.display = "flex"
        else section.style.display = "none";
    } )
}

function findIndexOfPage ( key ) {
    for ( i = 0; i < config.sequence.length; i++ )
        if ( config.sequence[i] == key ) return i; 
}
function goBack ( ) {
    goto( config.sequence[ findIndexOfPage(current) - 1 ] );
}
function goNext ( ) {
    goto( config.sequence[ findIndexOfPage(current) + 1 ] );
}

goto()