export default function Home() {
  return (
    <main className="page">
      <h1 className="title">Собака в стиле векторной иллюстрации</h1>
      <p className="subtitle">
        Нежная иллюстрация собаки, созданная исключительно с помощью SVG.
      </p>
      <figure className="figure">
        <svg
          className="dog-svg"
          viewBox="0 0 420 320"
          role="img"
          aria-labelledby="dog-title dog-desc"
        >
          <title id="dog-title">Веселая собака</title>
          <desc id="dog-desc">
            Минималистичная собака, сидящая на траве под закатным небом.
          </desc>
          <defs>
            <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffe7a9" />
              <stop offset="50%" stopColor="#ffd4a8" />
              <stop offset="100%" stopColor="#f9b7a2" />
            </linearGradient>
            <linearGradient id="fur" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7ead2" />
              <stop offset="100%" stopColor="#d5b890" />
            </linearGradient>
            <linearGradient id="spot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8a86b" />
              <stop offset="100%" stopColor="#a07442" />
            </linearGradient>
            <linearGradient id="collar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fc74a6" />
              <stop offset="100%" stopColor="#f24b76" />
            </linearGradient>
            <radialGradient
              id="shine"
              cx="50%"
              cy="30%"
              r="60%"
              fx="45%"
              fy="20%"
            >
              <stop offset="0%" stopColor="#ffe7f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffe7f6" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="420" height="320" fill="url(#sky)" />
          <ellipse cx="210" cy="280" rx="190" ry="45" fill="#8cc572" />
          <ellipse cx="210" cy="302" rx="210" ry="30" fill="#689c4f" opacity="0.45" />

          <path
            d="M120 220 Q90 200 70 210 T40 200"
            fill="none"
            stroke="#fef1d9"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M340 220 Q360 200 380 205 T410 190"
            fill="none"
            stroke="#fef1d9"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />

          <path
            d="M160 200 C140 185 125 165 130 145 C135 125 170 120 190 160"
            fill="url(#fur)"
          />
          <path
            d="M262 204 C282 180 298 150 292 134 C286 118 260 120 240 160"
            fill="url(#fur)"
          />

          <ellipse cx="210" cy="210" rx="100" ry="80" fill="url(#fur)" />
          <path
            d="M310 210 Q335 185 360 195 Q345 210 340 235 Z"
            fill="url(#fur)"
          />
          <path
            d="M110 210 Q80 190 70 210 Q90 215 105 240 Z"
            fill="url(#fur)"
          />

          <ellipse cx="150" cy="150" rx="38" ry="50" fill="url(#fur)" />
          <ellipse cx="270" cy="150" rx="38" ry="50" fill="url(#fur)" />
          <ellipse cx="210" cy="150" rx="88" ry="80" fill="url(#fur)" />

          <path
            d="M138 107 Q130 85 140 80 Q160 88 166 118 Z"
            fill="url(#spot)"
          />
          <path
            d="M282 107 Q290 85 280 80 Q260 88 254 118 Z"
            fill="url(#spot)"
          />

          <circle cx="175" cy="140" r="10" fill="#2f2b2a" />
          <circle cx="245" cy="140" r="10" fill="#2f2b2a" />
          <circle cx="172" cy="136" r="3" fill="#fff" opacity="0.8" />
          <circle cx="242" cy="136" r="3" fill="#fff" opacity="0.8" />

          <ellipse cx="210" cy="180" rx="22" ry="16" fill="#2f2b2a" />
          <path
            d="M188 200 Q210 215 232 200"
            fill="none"
            stroke="#2f2b2a"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <path
            d="M202 186 Q210 190 218 186"
            fill="none"
            stroke="#f7ead2"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M180 240 C160 260 175 272 198 268 L220 264 C244 260 260 270 240 246"
            fill="url(#fur)"
          />

          <path
            d="M130 245 C115 282 135 290 152 274"
            fill="url(#fur)"
          />
          <path
            d="M290 245 C305 282 285 290 268 274"
            fill="url(#fur)"
          />

          <ellipse cx="210" cy="230" rx="55" ry="25" fill="url(#spot)" opacity="0.45" />
          <path
            d="M210 250 Q200 280 180 290 Q210 305 240 290 Q220 270 210 250 Z"
            fill="url(#spot)"
            opacity="0.4"
          />

          <rect x="162" y="205" width="96" height="18" rx="9" fill="url(#collar)" />
          <circle cx="210" cy="222" r="10" fill="#fddf69" stroke="#f8c13a" strokeWidth="4" />

          <path
            d="M320 180 Q360 150 360 220 Q330 200 310 210"
            fill="url(#spot)"
            opacity="0.7"
          />

          <circle cx="310" cy="110" r="45" fill="url(#shine)" />
        </svg>
        <figcaption className="caption">
          Иллюстрация создана с использованием чистого SVG и CSS без внешних
          изображений.
        </figcaption>
      </figure>
    </main>
  );
}
