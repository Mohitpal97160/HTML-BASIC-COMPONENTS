const panels = document.querySelectorAll(".panel-card1");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeactiveClasses();
    panel.classList.add("active-card1");
  });
});

const removeactiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active-card1");
  });
};
