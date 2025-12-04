import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
    return (
        <main>
            <Header />
            <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
                <div className="container">
                    <h1 className="section-title">Privacy Policy</h1>
                    <span className="section-subtitle">プライバシーポリシー</span>

                    <div className="privacy-content" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        <p>
                            SenseDrive株式会社（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>第1条（個人情報）</h2>
                        <p>
                            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>第2条（個人情報の収集方法）</h2>
                        <p>
                            当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                        </p>

                        {/* Add more sections as needed for a standard privacy policy */}

                        <h2 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>第3条（お問い合わせ窓口）</h2>
                        <p>
                            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            住所：東京都港区新橋4丁目31-3 第3名和ビル<br />
                            社名：SenseDrive株式会社<br />
                            代表取締役：仲上 祐斗
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
