document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("open_menu");
  if (!(menuButton instanceof HTMLElement)) return;

  document.addEventListener("click", handler);
});

const handler = (e: Event) => {
  if (!(e.target instanceof HTMLElement)) return;
  
  const globalNav = document.getElementById("global_nav");
  const menuButton = document.querySelector("#open_menu > img");
  if (!(globalNav instanceof HTMLElement)) return;
  if (!(menuButton instanceof HTMLImageElement)) return;
  
  if (e.target.closest("#open_menu > img")) {
    if (!menuButton.classList.contains("open")) {
      globalNav.classList.add("open");
      menuButton.classList.add("open");
      menuButton.dataset.orig = menuButton.src;
      menuButton.src = menuButton.dataset.src ?? "";
    } else {
      globalNav.classList.remove("open");
      menuButton.classList.remove("open");
      menuButton.src = menuButton.dataset.orig ?? "";
    }
  } else {
    globalNav.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.src = menuButton.dataset.orig ?? "";
  }
};
