
document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("year-dropdown");
  
    for (let i = 2024; i >= 1970; i--) {
      let option = document.createElement("option");
      option.text = i;
      option.value = i;
      dropdown.add(option);
    }
  
    dropdown.addEventListener("change", function() {
      if (this.value !== "") {
        this.blur();
        let selectedYear = this.value;
        let optionIndex = this.selectedIndex;
        let scrollPos = optionIndex * 28;
        this.parentElement.scrollTop = scrollPos;
      }
    });
  });