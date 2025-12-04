import Link from 'next/link';
import Image from 'next/image';

export default function CEOMessage() {
    return (
        <section id="message" className="section message-section">
            <div className="container">
                <h2 className="section-title mobile-title">Message</h2>
                <div className="message-wrapper">
                    <div className="message-image">
                        <div className="portrait-wrapper" style={{ boxShadow: 'none', background: 'transparent' }}>
                            <Image
                                src="/images/ceo_message_mobile.png"
                                alt="代表取締役 仲上祐斗"
                                width={350}
                                height={350}
                                className="ceo-image"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                    <div className="message-content">
                        <h2 className="section-title desktop-title" style={{ textAlign: 'left' }}>Message</h2>
                        <h3 className="message-heading">
                            やりたいことを見つけられる<br />社会を創りたい
                        </h3>
                        <p className="message-text">
                            私たちは、誰もが自分の可能性を信じ、情熱を持って働ける世界を目指しています。
                            SenseDriveは、そのための羅針盤となり、共に未来を歩んでいきます。
                        </p>
                        <Link href="/message" className="btn btn-outline">
                            代表メッセージを読む
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
