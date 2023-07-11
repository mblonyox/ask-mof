import SearchIcon from "./search-icon.tsx";

export default function Header() {
  return (
    <header class="header menu_2">
      <div id="preloader">
        <div data-loader="circle-side"></div>
      </div>
      <div id="logo">
        <a href="index.html">
          <img src="img/logo.webp" width="65" height="54" alt="" />
        </a>
      </div>
      <ul id="top_menu">
        <li>
          <a href="#0" class="search-overlay-menu-btn">
            <SearchIcon />
          </a>
        </li>
      </ul>
      <a href="#menu" class="btn_mobile">
        <div class="hamburger hamburger--spin" id="hamburger">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </a>
      <nav id="menu" class="main-menu">
        <ul>
          <li>
            <span>
              <a href="/">Beranda</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#0">Bidang-bidang Keuangan Negara</a>
            </span>
            <ul>
              <li>
                <span>
                  <a href="/bidang-anggaran">Anggaran</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/bidang-pajak">Pajak</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/bidang-bea-dan-cukai">Bea dan Cukai</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/bidang-perbendaharaan">Perbendaharaan</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/bidang-kekayaan-negara">Kekayaan Negara</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/bidang-perimbangan-keuangan">
                    Perimbangan Keuangan
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/bidang-pengelolaan-pembiayaan-dan-risiko">
                    Pengelolaan Pembiayaan dan Risiko
                  </a>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <a href="/about">Tentang Kami</a>
            </span>
          </li>
        </ul>
      </nav>
      <div class="search-overlay-menu">
        <span class="search-overlay-close">
          <span class="closebt">
            <i class="ti-close"></i>
          </span>
        </span>
        <form role="search" id="searchform" method="get">
          <input value="" name="q" type="search" placeholder="Search..." />
          <button type="submit">
            <img src="/icons/search.svg" />
          </button>
        </form>
      </div>
    </header>
  );
}
