import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="cta-section">
                <div className="container">
                    <h2 className="cta-title">
                        仕事の魅力体験を<br />デザインしませんか？
                    </h2>
                    <p className="cta-desc">
                        採用・組織づくりに関するご相談など、<br />
                        お気軽にお問い合わせください。
                    </p>
                    <Link href="/contact" className="btn btn-white">
                        お問い合わせ
                    </Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-inner">
                    <div className="footer-info">
                        <div className="footer-logo">SenseDrive</div>
                        <address className="footer-address">
                            〒105-0004<br />
                            東京都港区新橋4丁目31-3<br />
                            第3名和ビル
                        </address>
                    </div>
                    <div className="footer-links">
                        <Link href="/">Home</Link>
                        <Link href="/#services">Services</Link>
                        <Link href="/about">About us</Link>
                        <Link href="/message">Message</Link>
                        <Link href="/#works">Works</Link>
                        <Link href="/#news">News</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2024 SenseDrive Inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
