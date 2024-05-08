

/*
function openTab(evt, tabName){

    //Define variables
    var x, content, links;
    content = document.getElementsByClassName("content");
    links = document.getElementsByClassName("links");

    //Hide all content
    for(x = 0; x < content.length; x++) { 
        content[x].style.display = "none";
    }
    
    //Remove active
    for(x = 0; x < links.length; x++){
        links[x].className = links[x].className.replace(" active","");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.tabName += " active";
    
}
