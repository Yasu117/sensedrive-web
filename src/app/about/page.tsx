import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <main>
            <Header />
            <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
                <div className="container">
                    <h1 className="section-title">About us</h1>
                    <span className="section-subtitle">私たちが目指す社会</span>

                    <div className="about-content-wrapper">
                        <div className="mvv-section">
                            <div className="mvv-item">
                                <h2 className="mvv-label">Mission</h2>
                                <p className="mvv-text-large">
                                    一人ひとりの”やりたいこと”を見つけ、<br />
                                    ワクワクする社会を実現する
                                </p>
                            </div>

                            <div className="mvv-item">
                                <h2 className="mvv-label">Vision</h2>
                                <div className="vision-list-container">
                                    <ol className="vision-list">
                                        <li>やりたいことを見つけられる環境づくり</li>
                                        <li>Will-Economy、Sense Making-Economyの実現</li>
                                        <li>イノベーションの実現に向けた全フェーズの循環型環境の構築</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="team-section">
                            <h2 className="section-title" style={{ fontSize: '2rem', marginTop: '6rem' }}>Team</h2>
                            <span className="section-subtitle">メンバー紹介</span>

                            <div className="member-card">
                                <div className="member-image-wrapper">
                                    <Image
                                        src="/images/member_sugimoto_v2.png"
                                        alt="杉本 知恵莉"
                                        width={300}
                                        height={300}
                                        className="member-image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="member-info">
                                    <span className="member-role">COO</span>
                                    <h3 className="member-name">杉本 知恵莉</h3>

                                    <div className="member-detail-block">
                                        <h4 className="member-detail-title">【強み】</h4>
                                        <ul className="member-detail-list">
                                            <li>
                                                <strong>人事・組織開発の実践経験</strong><br />
                                                大手企業での人事戦略立案・実行（新卒採用、障害者雇用、若手～中堅育成、組織開発）
                                            </li>
                                            <li>
                                                <strong>HRコンサルティング専門性</strong><br />
                                                国家資格キャリアコンサルタント<br />
                                                法人営業及びインサイドセールスプレイヤー及び管理者の現場経験<br />
                                                採用・育成の両面で実績9年
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="member-detail-block">
                                        <h4 className="member-detail-title">【経歴】</h4>
                                        <p className="member-history">
                                            2012年 カルチュア・コンビニエンス・クラブ株式会社<br />
                                            2021年 株式会社エス・エム・エス<br />
                                            2025年 SenseDrive株式会社
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="member-card advisor-card">
                                <div className="member-image-wrapper">
                                    <Image
                                        src="/images/member_watanabe_final.png"
                                        alt="渡邉 政嘉"
                                        width={300}
                                        height={300}
                                        className="member-image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="member-info">
                                    <span className="member-role">顧問</span>
                                    <h3 className="member-name">渡邉 政嘉 <span className="member-name-kana">（わたなべ まさよし）</span></h3>

                                    <p className="member-titles">
                                        一般財団法人 高度技術社会推進協会 (TEPIA) 常務理事<br />
                                        東京科学大学特定教授、京都大学学外連携フェロー・特任教授、<br />
                                        日本機械学会フェロー、日本工学アカデミー正会員・理事など
                                    </p>

                                    <p className="member-bio">
                                        東京工業大学（現東京科学大学）修士課程及び東北大学博士課程終了（博士（工学））。<br />
                                        経済産業省産業技術政策課長、NEDO理事、中小企業庁経営支援部長、東北経済産業局長、内閣官房デジタル田園都市国家構想実現会議事務局内閣審議官を歴任。<br />
                                        過去、経済産業省、NEDOの編纂していた技術戦略マップの総括責任者として活躍し、経済産業省の「Mr. Roadmap」との異名を持つ。また、産総研においてつくばイノベーションアリーナ（TIA）ナノテクノロジー拠点初代事務局長等として産業技術政策の戦略及び現場双方を歴任。多くの中小・中堅企業のものづくり現場を回り、技術開発から取引慣行改善まで様々な経営戦略にかかわるテーマについての知見も深い。2022年7月退官。<br />
                                        2025年に新会社設立の趣旨に賛同し、顧問として事業に参画。<br />
                                        主な著書に「ものづくりの羅針盤」（単著、経済産業調査会、2010年）等。
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
