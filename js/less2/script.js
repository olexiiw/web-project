const form = document.getElementById("themeForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
  if (selectedTheme === "night"){
    document.body.style.backgroundColor = "#222222";
    document.body.style.color = "#ffffff";
    console.log("Увімкнено нічну тему 🌙");
  }else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    console.log("Увімкнено денну тему ☀️")
  }
});