function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("header").style.display = "none";
    document.getElementById("openbtn").style.cursor = "default";
    
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("header").style.display = "flex";
    document.getElementById("openbtn").style.cursor = "pointer";

  }