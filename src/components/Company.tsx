export default function Company() {
    return (
        <section id="company" className="section">
            <div className="container">
                <h2 className="section-title">Company</h2>
                <span className="section-subtitle">会社情報</span>

                <div className="company-info-wrapper">
                    <dl className="company-list">
                        <div className="company-item">
                            <dt>会社名</dt>
                            <dd>SenseDrive株式会社</dd>
                        </div>
                        <div className="company-item">
                            <dt>代表取締役</dt>
                            <dd>仲上 祐斗</dd>
                        </div>
                        <div className="company-item">
                            <dt>設立</dt>
                            <dd>2025年4月2日</dd>
                        </div>
                        <div className="company-item">
                            <dt>資本金</dt>
                            <dd>2,000 千円</dd>
                        </div>
                        <div className="company-item">
                            <dt>所在地</dt>
                            <dd>
                                〒105-0004<br />
                                東京都港区新橋4丁目31-3<br />
                                第3名和ビル
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
