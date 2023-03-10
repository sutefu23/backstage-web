document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("open_menu");
  if (!(menuButton instanceof HTMLElement)) return;

  menuButton.addEventListener("click", handler);
});

const handler = (e: Event) => {
  const globalNav = document.getElementById("global_nav");
  if (!(globalNav instanceof HTMLElement)) return;
  if (!(e.target instanceof HTMLImageElement)) return;
  
  if (!e.target.classList.contains("open")) {
    globalNav.classList.add("open");
    e.target.classList.add("open");
    e.target.dataset.orig = e.target.src;
    e.target.src = e.target.dataset.src ?? "";
  }
  else{
    globalNav.classList.remove("open");
    e.target.classList.remove("open");
    e.target.src = e.target.dataset.orig ?? "";
  }
};
