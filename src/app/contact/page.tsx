import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
    return (
        <main>
            <Header />
            <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
                <div className="container">
                    <h1 className="section-title">Contact</h1>
                    <span className="section-subtitle">お問い合わせ</span>

                    <div className="contact-form-wrapper">
                        <p className="contact-intro">
                            弊社へのお問い合わせはこちらよりお願い致します。<br />
                            5営業日以内にご返信させて頂きます。
                        </p>

                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    お名前 <span className="badge-required">必須</span>
                                </label>
                                <input type="text" id="name" name="name" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company" className="form-label">
                                    会社名
                                </label>
                                <input type="text" id="company" name="company" className="form-input" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    メールアドレス <span className="badge-required">必須</span>
                                </label>
                                <input type="email" id="email" name="email" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">
                                    電話番号
                                </label>
                                <input type="tel" id="phone" name="phone" className="form-input" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    お問い合わせ内容
                                </label>
                                <textarea id="message" name="message" className="form-textarea" rows={6}></textarea>
                            </div>

                            <div className="privacy-check">
                                <label className="checkbox-label">
                                    <input type="checkbox" required />
                                    <span className="checkbox-text">
                                        <Link href="/privacy" className="text-link" target="_blank">プライバシーポリシー</Link>
                                        に同意する
                                    </span>
                                </label>
                            </div>

                            <div className="form-submit">
                                <button type="submit" className="btn btn-primary btn-submit">
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
