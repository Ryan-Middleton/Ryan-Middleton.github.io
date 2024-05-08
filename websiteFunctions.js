function openTab(evt, tabName) {
    // Hide all tab content
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
    
    // Add 'active' class to the clicked tab link
    evt.currentTarget.classList.add("active");
}

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
