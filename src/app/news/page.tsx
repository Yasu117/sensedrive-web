import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
    {
        id: 1,
        date: "2025.10.14",
        title: "東急建設様のオープンカンパニーの企画・運営サポートを実施",
        description: "新規事業開発職の魅力を学生が体感するコンテンツを開発・実施SenseDrive株式会社（本社：東京都...",
        image: "/images/news_tokyu.png",
        category: "Press Release"
    },
    {
        id: 2,
        date: "2025.6.1",
        title: "ホームページを開設しました。",
        description: "このたび、私たちSenseDrive（センスドライブ）は、公式ホームページを開設いたしました。組織や...",
        image: "/images/news_laptop.png",
        category: "Information"
    }
];

export default function NewsArchive() {
    return (
        <main>
            <Header />
            <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
                <div className="container">
                    <h1 className="section-title">News</h1>
                    <span className="section-subtitle">お知らせ一覧</span>

                    <div className="news-archive-wrapper">
                        <div className="news-list">
                            {newsItems.map((item) => (
                                <Link href={`/news`} key={item.id} className="news-item-card">
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
                                        <div className="news-meta">
                                            <span className="news-date">{item.date}</span>
                                            <span className="news-category">{item.category}</span>
                                        </div>
                                        <h2 className="news-title">{item.title}</h2>
                                        <p className="news-desc">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="pagination">
                            <span className="page-number active">1</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
