
document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("year-dropdown");
  
    for (var i = 2024; i >= 1970; i--) {
      var option = document.createElement("option");
      option.text = i;
      option.value = i;
      dropdown.add(option);
    }
  
    dropdown.addEventListener("change", function() {
      if (this.value !== "") {
        this.blur();
        var selectedYear = this.value;
        var optionIndex = this.selectedIndex;
        var scrollPos = optionIndex * 28;
        this.parentElement.scrollTop = scrollPos;
      }
    });
  });