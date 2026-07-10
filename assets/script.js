(function () {
  "use strict";

  /* ===== dark mode toggle ===== */
  var root = document.documentElement;
  var btn = document.getElementById("darkToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("skin-theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }

  /* ===== 상단 바 날짜 ===== */
  var dateEl = document.getElementById("tbDate");
  if (dateEl) {
    var d = new Date();
    dateEl.textContent = d.getFullYear() + ". " + (d.getMonth() + 1) + ". " + d.getDate() + ".";
  }

  /* ===== 카테고리: 하위 목록은 접어두고 화살표 클릭으로 펼침 ===== */
  document.querySelectorAll(".sb-category .category_list > li").forEach(function (li) {
    var sub = li.querySelector(".sub_category_list");
    if (!sub) return;
    li.classList.add("has-sub");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-toggle";
    btn.setAttribute("aria-label", "하위 카테고리 펼치기/접기");
    li.insertBefore(btn, sub);
    btn.addEventListener("click", function () { li.classList.toggle("open"); });
    /* 지금 보고 있는 하위 카테고리가 속한 묶음은 펼친 채로 시작 */
    var here = decodeURIComponent(location.pathname);
    sub.querySelectorAll("a").forEach(function (a) {
      if (decodeURIComponent(a.pathname) === here) li.classList.add("open");
    });
  });
})();
