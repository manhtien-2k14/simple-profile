function getEnv(key, fallback = '') {
  const v = import.meta.env[key];
  return (v !== undefined && v !== null && String(v).length) ? v : fallback;
}

export function createProfileView(root) {
  // Read env vars
  const BG = getEnv('VITE_BACKGROUND', '');
  const AVATAR = getEnv('VITE_AVATAR', '');
  const NAME = getEnv('VITE_NAME', 'Guest');
  const DESC = getEnv('VITE_DESCRIPT', '');
  const YT = getEnv('VITE_YOUTUBE', '');
  const TT = getEnv('VITE_TIKTOK', '');
  const GM = getEnv('VITE_GMAIL', '');
  const STATUS = getEnv('VITE_STATUS', '');
  const YEAR = new Date().getFullYear();
  const COPYRIGHT = `© ${YEAR} Zweyx`;

  if (BG) document.body.style.backgroundImage = `url(${BG})`;

  root.innerHTML = `
    <div class="container">
      <div class="card">
        ${AVATAR ? `<img class=\"avatar\" src=\"${AVATAR}\" alt=\"avatar\" />` : `<img class=\"avatar\" src=\"/logo.svg\" alt=\"logo\" />`}
        <h1 class="name">${NAME}</h1>
        ${DESC ? `<p class="desc">${DESC}</p>` : ''}
        ${STATUS ? `<p class="status">${STATUS}</p>` : ''}
        <div class="links">
          ${TT ? `<a class=\"link-btn link-tiktok\" target=\"_blank\" rel=\"noopener\" href=\"${TT}\" aria-label=\"TikTok\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n              <rect x=\"13\" y=\"4\" width=\"2\" height=\"9\" fill=\"#fff\"/>\n              <circle cx=\"9\" cy=\"17\" r=\"3\" fill=\"#fff\"/>\n              <path d=\"M15 6c2 2 4 3 6 3v2c-2.6 0-5-1.2-6-2V6z\" fill=\"#fff\"/>\n            </svg>\n            <span class=\"sr-only\">TikTok</span>\n          </a>` : ''}
          ${YT ? `<a class=\"link-btn link-youtube\" target=\"_blank\" rel=\"noopener\" href=\"${YT}\" aria-label=\"YouTube\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n              <rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\" ry=\"3\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>\n              <polygon points=\"10,8 10,16 16,12\" fill=\"#fff\"/>\n            </svg>\n            <span class=\"sr-only\">YouTube</span>\n          </a>` : ''}
          ${GM ? `<a class=\"link-btn link-gmail\" target=\"_blank\" rel=\"noopener\" href=\"mailto:${GM}\" aria-label=\"Gmail\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n              <rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>\n              <path d=\"M3 6l9 7 9-7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n            <span class=\"sr-only\">Gmail</span>\n          </a>` : ''}
        </div>
      </div>
      <div class="site-footer">${COPYRIGHT}</div>
    </div>
  `;
}
