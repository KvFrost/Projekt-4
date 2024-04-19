
console.log("Det virker wuuw")

document.addEventListener("DOMContentLoaded", function drop() {
    let dropdown = document.getElementById("year-dropdown");
    let years = [];

    for (let i = 2024; i >= 1970; i--) {
      years.push(i);
    }

    years.forEach(function(year) {
      let option = document.createElement("option");
      option.text = year;
      option.value = year;
      dropdown.add(option);
    });

  dropdown.addEventListener("change", function() {
    if (this.value !== "") {
      this.blur();
      let selectedYear = this.value;

    } else {
      console.log("intet årstal.");
    }
  });
});