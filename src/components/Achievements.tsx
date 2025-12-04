import Link from 'next/link';
import Image from 'next/image';

export default function Achievements() {
    return (
        <section id="works" className="section">
            <div className="container">
                <h2 className="section-title">Works</h2>
                <span className="section-subtitle">実績紹介</span>

                <div className="work-highlight">
                    <div className="work-image">
                        <div className="image-placeholder" style={{ background: 'transparent' }}>
                            <Image
                                src="/images/works_tokyu_v2.jpg"
                                alt="東急建設様 オープンカンパニー"
                                width={400}
                                height={400}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="work-content">
                        <span className="work-category">Open Company Support</span>
                        <h3 className="work-title">東急建設株式会社 様</h3>
                        <p className="work-desc" style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            新規事業開発職の魅力を学生が体感する<br />
                            オープンカンパニーの企画・運営をサポート
                        </p>
                        <div className="work-detail">
                            <div className="detail-item">
                                <span className="label">実施日</span>
                                <span className="value">2025年9月11日</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">施策</span>
                                <span className="value">コンテンツ開発・運営支援</span>
                            </div>
                        </div>
                        <Link href="/works/tokyu-construction" className="btn btn-primary">
                            実績詳細を見る
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
