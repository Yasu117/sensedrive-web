import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function TokyuWork() {
    return (
        <main>
            <Header />
            <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
                <div className="container">
                    <div className="work-detail-wrapper">
                        <span className="work-category-badge">Open Company Support</span>
                        <h1 className="work-detail-title">
                            東急建設様のオープンカンパニーの<br />企画・運営サポートを実施
                        </h1>
                        <p className="work-detail-subtitle">
                            新規事業開発職の魅力を学生が体感するコンテンツを開発・実施
                        </p>

                        <div className="work-detail-image">
                            <Image
                                src="/images/works_tokyu_detail.png"
                                alt="東急建設様 オープンカンパニー"
                                width={800}
                                height={500}
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </div>

                        <div className="work-detail-content">
                            <p>
                                SenseDrive株式会社（本社：東京都港区、代表取締役社長：仲上祐斗）は、
                                東急建設株式会社（本社：東京都渋谷区、代表取締役社長：寺田光宏）の
                                価値創造推進室 イノベーション推進部新規事業開発職を対象とした
                                オープンカンパニーの企画・運営をサポートし、2025年9月11日に実施いたしました。
                            </p>

                            <div className="pr-link-section">
                                <Link href="https://prtimes.jp/main/html/rd/p/000000001.000171009.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    PR TIMESでプレスリリースを見る
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
