document.getElementById("defaultOpen").click();
function openContentItem(evt, contentID) {
    // Declare all variables
    var i, content_item, button_nav_item;
  
    // Get all elements with class="content-item" and hide them
    content_item = document.getElementsByClassName("content-item");
    for (i = 0; i < content_item.length; i++) {
      content_item[i].style.display = "none";
    }
  
    // Get all elements with class="bottom-nav-item" and remove the class "active"
    button_nav_item = document.getElementsByClassName("bottom-nav-item");
    for (i = 0; i < button_nav_item.length; i++) {
      button_nav_item[i].className = button_nav_item[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentID).style.display = "block";
    evt.currentTarget.className += " active";
  }