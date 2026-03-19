function opentab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//document.getElementById("default").click();

//Show/Hide FW Changelog Ifrrame
function toggleIframe() {
    var iframeContainer = document.getElementById("iframeContainer");

    if (iframeContainer.style.display === "none") {
        iframeContainer.style.display = "block"; // or any other display value like 'inline', 'flex', 'grid'
    } else {
        iframeContainer.style.display = "none";
    }
}
function toggleIframe2() {
    var iframeContainer = document.getElementById("iframeContainer2");

    if (iframeContainer.style.display === "none") {
        iframeContainer.style.display = "block"; // or any other display value like 'inline', 'flex', 'grid'
    } else {
        iframeContainer.style.display = "none";
    }
}
function toggleTable() {
  var element = document.getElementById("tauto");
  // Toggle the 'hidden' attribute
  if (element.hasAttribute("hidden")) {
    element.removeAttribute("hidden");
  } else {
    element.setAttribute("hidden", "hidden");
  }
}