
function showAlert() {
    let selected = document.querySelector('input[name="choice"]:checked');
    if (selected) {
      alert("You selected: " + selected.value);
    } else {
      alert("Please select an option.");
    }
  }
  
