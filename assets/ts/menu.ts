document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("open_menu");
  if (!(menuButton instanceof HTMLElement)) return;

  document.addEventListener("click", handler);
});

const handler = (e: Event) => {
  if (!(e.target instanceof HTMLElement)) return;

  const globalNav = document.getElementById("global_nav");
  const menuButton = document.querySelector("#open_menu img");
  const source = document.querySelector("#open_menu picture source");
  if (!(globalNav instanceof HTMLElement)) return;
  if (!(menuButton instanceof HTMLImageElement)) return;
  if (!(source instanceof HTMLSourceElement)) return;

  if (e.target.closest("#open_menu img")) {
    if (!menuButton.classList.contains("open")) {
      globalNav.classList.add("open");
      menuButton.classList.add("open");
      source.dataset.orig = source.srcset;
      source.srcset = source.dataset.srcset ?? "";
    } else {
      globalNav.classList.remove("open");
      menuButton.classList.remove("open");
      source.srcset = source.dataset.orig ?? "";
    }
  } else {
    globalNav.classList.remove("open");
    menuButton.classList.remove("open");
    if(source.dataset.orig) source.srcset = source.dataset.orig;
  }
};


// stickyメニューの表示非表示
document.addEventListener('scroll', () => {
  const floatNavi = document.querySelector('#sp_nav_button')
  const footer = document.querySelector('body > footer')
  if(!floatNavi || !footer ) return
  const menuPosition = floatNavi.getBoundingClientRect();
  const footerPosition = footer.getBoundingClientRect();
  if(footerPosition.top - menuPosition.bottom > 50){
    floatNavi.classList.remove('hide');
  }else{
    floatNavi.classList.add('hide');
  }

});
