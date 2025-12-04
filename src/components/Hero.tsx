export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        ひとりひとりの<br />
                        <span className="highlight">”やりたいこと”</span>を見つけ、<br />
                        ワクワクする社会を実装する。
                    </h1>
                    <p className="hero-subtitle">
                        SenseDriveは、人と組織の可能性を広げ、<br className="desktop-only" />
                        未来を創るスタートアップです。
                    </p>
                </div>
                <div className="hero-visual">
                    <div className="visual-circle main-circle"></div>
                    <div className="visual-circle sub-circle"></div>
                </div>
            </div>
        </section>
    );
}
