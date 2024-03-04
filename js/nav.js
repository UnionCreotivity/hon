const navItem = [
  {
    name: "關於我們",
    enName: "About Us",
    url: "./About.html",
  },
  { name: "產品介紹", enName: "Product", url: "./Product.html" },
  { name: "代工服務", enName: "OEM", url: "./Oem.html" },
  { name: "最新消息", enName: "News", url: "./News.html" },
  { name: "聯絡我們", enName: "Contact Us", url: "./Contact.html" },
];

$(window).on("load", function () {
  const nav = $("#nav");
  let src = "";
  src += `
  
  <div class="nav-left">
           <a href="index.html">
            <img src="./img/home/header-icon.png" alt="header-icon"/>
           </a>
          </div>`;
  src += `<button class="nav-hamb-icon">
            <span></span>
            <span></span>
            <span></span>
          </button>`;
  src += `<div class="nav-right"><ul class="nav-right-container">`;
  navItem.forEach((el) => {
    src += `<li class="nav-right-item">
                <a href="${el.url}">
                <div class="nav-text-top">${el.name}</div>
                <div class="nav-text-bottom">${el.enName}</div>
                </a>
            </li>`;
  });
  src += `  <li class="nav-right-item nav-trans">
            <span class="nav-zh">中</span><span>|</span>
            <span class="nav-en txt-opacity">E N</span>
            </li></ul></div>`;
  nav.append(src);

  const navHeight = $("#nav").outerHeight();
  const video = $(".cut-1-video video");
  video.css("padding-top", navHeight);
  if (window.innerWidth <= 1024) {
    $(".nav-hamb-icon").on("click", function (e) {
      e.preventDefault();
      $(".nav-right").slideToggle(500);
    });
    $(".nav-right-container").css("margin-top", -navHeight);
  } else {
    $(".ph").remove();
  }

  const localhref = new URL(window.location.href);
  const lang = localhref.searchParams.get("lang");
  $(".nav-trans").on("click", function () {
    let newUrl;
    if (lang === "en") {
      newUrl = new URL("?lang=zh", window.location.href);
      window.location = newUrl;
    } else {
      newUrl = new URL("?lang=en", window.location.href);
      window.location = newUrl;
    }
  });
  if (lang === "en") {
    $(".nav-zh").addClass("txt-opacity");
    $(".nav-en").removeClass("txt-opacity");
  } else {
    $(".nav-zh").removeClass("txt-opacity");
    $(".nav-en").addClass("txt-opacity");
  }
});
