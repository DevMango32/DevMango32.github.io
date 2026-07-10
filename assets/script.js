(function () {
  "use strict";

  /* ===== dark mode toggle ===== */
  var root = document.documentElement;
  var btn = document.getElementById("darkToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("skin-theme", dark ? "dark" : "light"); } catch (e) {}
      /* giscus 댓글창 테마 동기화 */
      var gf = document.querySelector("iframe.giscus-frame");
      if (gf) gf.contentWindow.postMessage({ giscus: { setConfig: { theme: dark ? "dark" : "light" } } }, "https://giscus.app");
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
    /* 상위 카테고리는 링크가 아니므로 이름 클릭으로도 펼침 */
    var head = li.querySelector(":scope > a:not([href])");
    if (head) {
      head.style.cursor = "pointer";
      head.addEventListener("click", function () { li.classList.toggle("open"); });
    }
    /* 지금 보고 있는 하위 카테고리가 속한 묶음은 펼친 채로 시작 */
    var here = decodeURIComponent(location.pathname);
    sub.querySelectorAll("a").forEach(function (a) {
      if (decodeURIComponent(a.pathname) === here) li.classList.add("open");
    });
  });

  /* ===== 방문자 카운터 (counterapi.dev, 누적/오늘/어제) ===== */
  var cntTotal = document.getElementById("cntTotal");
  if (cntTotal) {
    var API = "https://api.counterapi.dev/v1/devmango32-blog/";
    var kstDate = function (daysAgo) {
      return new Date(Date.now() + (9 * 3600 - daysAgo * 86400) * 1000).toISOString().slice(0, 10);
    };
    var show = function (name, up, el) {
      fetch(API + name + (up ? "/up" : "/"))
        .then(function (r) { return r.json(); })
        .then(function (j) { el.textContent = (j.count || 0).toLocaleString(); })
        .catch(function () { el.textContent = "0"; });
    };
    /* 같은 브라우저 세션에서는 한 번만 집계 */
    var seen = false;
    try {
      seen = sessionStorage.getItem("visited") === "1";
      sessionStorage.setItem("visited", "1");
    } catch (e) {}
    show("total", !seen, cntTotal);
    show("d-" + kstDate(0), !seen, document.getElementById("cntToday"));
    show("d-" + kstDate(1), false, document.getElementById("cntYesterday"));
  }

  /* ===== 글 좋아요 (counterapi.dev, 브라우저당 1회) ===== */
  var likeBtn = document.getElementById("likeBtn");
  if (likeBtn) {
    var likeCnt = document.getElementById("likeCnt");
    var likeKey = "like-" + location.pathname.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    var LAPI = "https://api.counterapi.dev/v1/devmango32-blog/";
    try { if (localStorage.getItem(likeKey) === "1") likeBtn.classList.add("liked"); } catch (e) {}
    fetch(LAPI + likeKey + "/")
      .then(function (r) { return r.json(); })
      .then(function (j) { likeCnt.textContent = j.count || 0; })
      .catch(function () { likeCnt.textContent = "0"; });
    likeBtn.addEventListener("click", function () {
      if (likeBtn.classList.contains("liked")) return;
      likeBtn.classList.add("liked");
      try { localStorage.setItem(likeKey, "1"); } catch (e) {}
      fetch(LAPI + likeKey + "/up")
        .then(function (r) { return r.json(); })
        .then(function (j) { likeCnt.textContent = j.count || 0; })
        .catch(function () {});
    });
  }

  /* ===== 글 공유 (모바일: 공유 시트, PC: 링크 복사) ===== */
  var shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      if (navigator.share) { navigator.share({ title: document.title, url: location.href }); return; }
      navigator.clipboard.writeText(location.href).then(function () {
        var t = shareBtn.querySelector("span");
        t.textContent = "링크 복사됨!";
        setTimeout(function () { t.textContent = "공유"; }, 1500);
      });
    });
  }
})();
