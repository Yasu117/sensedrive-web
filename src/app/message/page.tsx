import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Message() {
    return (
        <main>
            <Header />
            <section className="section" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
                <div className="container">
                    <div className="message-page-content">
                        <div className="message-header">
                            <h1 className="section-title">Message</h1>
                            <span className="section-subtitle">代表メッセージ</span>
                        </div>

                        <div className="message-body">
                            <div className="message-portrait">
                                <div className="portrait-wrapper">
                                    <Image
                                        src="/images/ceo.png"
                                        alt="代表取締役 仲上祐斗"
                                        width={400}
                                        height={400}
                                        className="ceo-image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="ceo-name-block">
                                    <p className="ceo-position">代表取締役社長</p>
                                    <p className="ceo-name">仲上 祐斗</p>
                                </div>
                            </div>

                            <div className="message-text-content">
                                <h2 className="message-catch">
                                    イノベーションは、<br />
                                    新たな価値を普及することで実現します。
                                </h2>

                                <p>
                                    新たな価値は、直接的にWell-beingに貢献するだけでなく、<br />
                                    ワクワクをもたらします。
                                </p>
                                <p>
                                    多様なイノベーションには、多様なやりたいことが必要です。<br />
                                    やりたいことは、何に興味があって、何に興味がないのかというSenseの組合わせです。
                                </p>
                                <p>
                                    Senseは、問いを立てる力と、体験や知識習得などの外部刺激によって<br />
                                    生み出されます。これをSense-making（センスメイキング）といいます。
                                </p>
                                <p>
                                    仕事には、Will、Can、Mustという軸があります。<br />
                                    AI・ロボットの進展により、CanとMustの仕事軸については、<br />
                                    必要とする人手が減っていきます。
                                </p>
                                <p>
                                    人間は、Will（やりたいコト）を提示するコトに付加価値が集中する未来も遠くないでしょう。<br />
                                    Willをもてる社会環境は、Well-beingの向上において必須であるだけでなく、<br />
                                    今後の人間力において向上すべきものになるでしょう。
                                </p>
                                <p className="message-closing">
                                    ぜひ、一緒に、Willをもてる社会環境を構築しましょう。
                                </p>

                                <p className="message-date">2025年4月2日</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
