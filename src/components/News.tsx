import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
    {
        date: "2025.10.14",
        title: "東急建設様のオープンカンパニーの企画・運営サポートを実施",
        description: "新規事業開発職の魅力を学生が体感するコンテンツを開発・実施SenseDrive株式会社（本社：東京都...",
        image: "/images/news_tokyu.png"
    },
    {
        date: "2025.6.1",
        title: "ホームページを開設しました。",
        description: "このたび、私たちSenseDrive（センスドライブ）は、公式ホームページを開設いたしました。組織や...",
        image: "/images/news_laptop.png"
    }
];

export default function News() {
    return (
        <section id="news" className="section bg-sub">
            <div className="container">
                <h2 className="section-title">News</h2>
                <span className="section-subtitle">お知らせ</span>

                <div className="news-list">
                    {newsItems.map((item, index) => (
                        <Link href="/news" key={index} className="news-item-card">
                            <div className="news-item-image-wrapper">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={250}
                                    className="news-item-image"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="news-item-content">
                                <span className="news-date">{item.date}</span>
                                <h3 className="news-title">{item.title}</h3>
                                <p className="news-desc">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link href="/news" className="btn btn-outline">
                        ニュース一覧へ
                    </Link>
                </div>
            </div>
        </section>
    );
}
