
document.addEventListener("DOMContentLoaded", () => {
  const tabList = document.querySelectorAll(".tab-list > li");
  const tabContent = document.querySelectorAll(".tab-content");

  const handler = (e: Event) => {
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

document.addEventListener("DOMContentLoaded", () => {
  const tabList = document.querySelectorAll(".tab-list > li");
  const tabContent = document.querySelectorAll(".tab-content");

  const changeTab = (target: string) => {
    const targetTab = document.getElementById("merit_" + target);
    const targetContent = document.getElementById(target + "_content");

    tabList.forEach((elm) => elm.classList.remove("active"));
    targetTab?.classList.add("active");
    tabContent.forEach((elm) => elm.classList.remove("show"));
    targetContent?.classList.add("show");
  };

  const changeHash = () => {
    if (location.hash.indexOf("#merit_creator", 0) !== -1) {
      changeTab("creator");
    }
    if (location.hash.indexOf("#merit_fan", 0) !== -1) {
      changeTab("fan");
    }
  };

  window.addEventListener("DOMContentLoaded", changeHash);
  window.addEventListener("hashchange", changeHash);
});
