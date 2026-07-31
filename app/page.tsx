const socials = [
  {
    name: "YouTube",
    handle: "@yu._2008-p7v",
    href: "https://youtube.com/@yu._2008-p7v?si=VVxSl_oAnyqyO56X",
    mark: "YT",
    className: "youtube",
  },
  {
    name: "TikTok",
    handle: "@_yu._2008",
    href: "https://www.tiktok.com/@_yu._2008?_r=1&_t=ZP-98UagavWUs2",
    mark: "TT",
    className: "tiktok",
  },
  {
    name: "Instagram",
    handle: "@_yu._2008",
    href: "https://www.instagram.com/_yu._2008?igsh=cTNqMG9pbzN5bTE0&utm_source=qr",
    mark: "IG",
    className: "instagram",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首頁">
          <span className="brand-glyph">Y</span>
          <span>YU<span className="brand-dot">.</span>2008</span>
        </a>
        <nav aria-label="主要導覽">
          <a href="#about">關於我</a>
          <a href="#games">主玩遊戲</a>
          <a className="nav-cta" href="#links">追蹤平台</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-static-art" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> AOV × HOK JUNGLE STREAMER</p>
          <p className="hero-signature">YU.2008</p>
          <p className="hero-tagline">穿越次元，掌控野區節奏</p>
          <h1>穿越次元<br /><em>掌控野區節奏</em></h1>
          <p className="hero-copy">主玩《傳說對決》與《王者榮耀》<br />排位實戰・打野觀念・直播互動</p>
          <div className="hero-socials" aria-label="社群平台連結">
            {socials.map((social) => (
              <a key={social.name} className={`hero-social ${social.className}`} href={social.href} target="_blank" rel="noreferrer">
                <span className="hero-social-mark">{social.mark}</span>
                <span className="hero-social-name"><b>{social.name}</b><small>{social.handle}</small></span>
                <span className="hero-social-arrow">↗</span>
              </a>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href={socials[0].href} target="_blank" rel="noreferrer">
              前往 YouTube <span>↗</span>
            </a>
            <a className="text-button" href="#about">認識我 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-status" aria-label="直播內容">
          <span className="live-dot" />
          <span><b>LIVE CONTENT</b>排位・實戰・聊天</span>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>SCROLL</span><i /></div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-heading">
          <p className="kicker">哈囉，我是</p>
          <h2>YU <span>／</span> 野區節奏型玩家</h2>
        </div>
        <div className="about-copy">
          <p>主玩《傳說對決》跟《王者榮耀》！</p>
          <p>《王者榮耀》主玩鏡，《傳說對決》主玩打野。平常會開台打排位、打實戰、跟大家聊天互動。</p>
          <p>喜歡看 MOBA、喜歡打野節奏，或想一起看我上分的朋友，歡迎追蹤＋開啟小鈴鐺，開台才不會錯過！</p>
        </div>
        <div className="about-tags" aria-label="內容標籤">
          <span>#打野節奏</span><span>#排位上分</span><span>#實戰操作</span><span>#聊天室互動</span>
        </div>
      </section>

      <section className="games section" id="games">
        <div className="section-label">02 / MAIN GAMES</div>
        <div className="section-title-row">
          <div>
            <p className="kicker">我的戰場</p>
            <h2>兩款 MOBA，一種節奏</h2>
          </div>
          <p>從判斷進場時機，到掌控地圖資源。<br />每一場，都是新的上分挑戰。</p>
        </div>
        <div className="game-grid">
          <article className="game-card aov-card">
            <span className="card-index">AOV / 01</span>
            <div className="card-content">
              <span className="role-pill">JUNGLE</span>
              <h3>傳說對決</h3>
              <p>主玩打野・抓準節奏・帶動全場</p>
            </div>
            <div className="card-symbol">N</div>
          </article>
          <article className="game-card hok-card">
            <span className="card-index">HOK / 02</span>
            <div className="card-content">
              <span className="role-pill">鏡 / JING</span>
              <h3>王者榮耀</h3>
              <p>鏡主力・極限操作・快速收割</p>
            </div>
            <div className="card-symbol">鏡</div>
          </article>
        </div>
      </section>

      <section className="live-banner section">
        <div className="signal" aria-hidden="true"><i /><i /><i /><i /></div>
        <div>
          <p className="kicker">NEXT STREAM</p>
          <h2>下一場，一起上分。</h2>
          <p>開台預告請看 Instagram 限時動態、TikTok 與 YouTube 通知。</p>
        </div>
        <a href="#links">開啟通知 <span>↘</span></a>
      </section>

      <section className="links section" id="links">
        <div className="section-label">03 / FIND ME</div>
        <div className="links-intro">
          <p className="kicker">別錯過開台</p>
          <h2>追蹤我的每一場<br /><em>精彩操作</em></h2>
        </div>
        <div className="social-list">
          {socials.map((social, index) => (
            <a key={social.name} className={`social-row ${social.className}`} href={social.href} target="_blank" rel="noreferrer">
              <span className="social-number">0{index + 1}</span>
              <span className="social-mark">{social.mark}</span>
              <span className="social-info"><b>{social.name}</b><small>{social.handle}</small></span>
              <span className="social-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-glyph">Y</span><span>YU<span className="brand-dot">.</span>2008</span></a>
        <p>打野不只是一個位置，是掌握全場的節奏。</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
