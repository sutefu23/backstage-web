document.addEventListener("DOMContentLoaded", () => {
    const tabList = document.querySelectorAll(".tab-list > li");
    const tabContent = document.querySelectorAll(".tab-content");
  
    var handler = (e: Event) => {
      // instanceofによるType Guard https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard
      if (!(e.target instanceof HTMLElement)) return;
  
      tabList.forEach((elm) => elm.classList.remove("active"));
      e.target.classList.add("active");
      tabContent.forEach((elm) => elm.classList.remove("show"));
      const index = Array.prototype.indexOf.call(tabList, e.target);
      tabContent[index].classList.add("show");
    };
    tabList.forEach((target) => {
      target.addEventListener("click", handler);
    });
  });
  