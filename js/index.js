function myFunction() {
    var linkContainer = document.getElementById("links");
    var currentClass = linkContainer.className;
    if(currentClass === 'hide'){
      linkContainer.className = "links-container"
    } else {
      linkContainer.className = "hide"
    }
  }