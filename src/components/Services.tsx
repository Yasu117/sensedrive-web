'use client';

import { useState } from 'react';
import ServiceModal, { ServiceData } from './ServiceModal';

const services: ServiceData[] = [
    {
        id: 'open-company',
        title: '仕事体験事業',
        description: '企業の仕事の魅力を伝える体験型プログラムを提供します。',
        accentColor: '#0070f3',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        detail: {
            lead: '学生に「働くこと」のリアルを伝え、ミスマッチを防ぐオープンカンパニーを支援します。',
            purpose: '学生が企業の実際の業務やカルチャーに触れる機会を創出し、入社後のミスマッチを解消するとともに、企業の魅力を深く伝えることを目的としています。',
            menu: [
                'オープンカンパニー企画立案',
                '体験コンテンツ制作（ワークショップ等）',
                '当日の運営サポート・ファシリテーション',
                '学生集客支援・広報'
            ],
            process: [
                { step: 'ヒアリング', desc: '貴社の課題やターゲット学生像を明確にします。' },
                { step: '企画提案', desc: '貴社の強みを活かした体験プログラムをご提案します。' },
                { step: 'コンテンツ制作', desc: '詳細なタイムテーブルやワーク資料を作成します。' },
                { step: '実施・運営', desc: '当日の運営をサポートし、スムーズな進行を実現します。' },
                { step: '振り返り', desc: '参加学生のアンケート分析等を行い、次回の改善に繋げます。' }
            ],
            effects: [
                '母集団形成の質的向上',
                '内定承諾率の向上',
                '企業ブランディングの強化'
            ]
        }
    },
    {
        id: 'hr-consulting',
        title: '人事コンサルティング',
        description: '採用・定着・キャリア形成まで一貫支援するHRコンサルティング。',
        accentColor: '#f81ce5',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h.01"></path>
                <path d="M7 20v-4"></path>
                <path d="M12 20v-8"></path>
                <path d="M17 20V8"></path>
                <path d="M22 4v16"></path>
            </svg>
        ),
        detail: {
            lead: '組織の成長と個人のキャリア自律を両立させる、戦略的な人事施策をサポートします。',
            purpose: '変化の激しい時代において、企業が持続的に成長するための「人」の基盤を構築し、社員一人ひとりがイキイキと働ける環境づくりを支援します。',
            menu: [
                '採用戦略策定・採用代行（RPO）',
                '新入社員・若手社員研修',
                '人事評価制度の構築・運用支援',
                'キャリアカウンセリング・面談代行'
            ],
            process: [
                { step: '現状分析', desc: '組織診断やインタビューを通じ、課題を特定します。' },
                { step: '施策立案', desc: '課題解決に向けた具体的なアクションプランを策定します。' },
                { step: '実行支援', desc: '制度導入や研修実施など、現場への定着まで伴走します。' },
                { step: '効果測定', desc: '定量的・定性的な指標を用いて効果を検証します。' }
            ],
            effects: [
                '離職率の低下・定着率向上',
                '従業員エンゲージメントの向上',
                '採用力の強化と採用コスト適正化'
            ]
        }
    },
    {
        id: 'platform',
        title: '仕事体験プラットフォーム',
        description: '地域や企業の魅力的な仕事体験を集約し、届けるプラットフォーム事業。',
        accentColor: '#00bfa5',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        detail: {
            lead: '誰もが気軽に多様な「仕事」に触れられる機会を創出するプラットフォームです。',
            purpose: '地域の中小企業やスタートアップなど、知られざる優良企業の魅力を可視化し、学生や求職者との偶発的な出会いを生み出します。',
            menu: [
                '企業向け求人・体験掲載プラン',
                '学生・求職者向け検索・応募機能',
                'スカウト・オファー機能',
                '企業特集・インタビュー記事掲載'
            ],
            process: [
                { step: 'アカウント開設', desc: '企業情報の登録と審査を行います。' },
                { step: '求人・体験掲載', desc: '魅力的な写真やテキストで募集ページを作成します。' },
                { step: '応募・マッチング', desc: '興味を持ったユーザーからの応募を受け付けます。' },
                { step: '体験実施', desc: '実際の仕事体験を通じて相互理解を深めます。' }
            ],
            effects: [
                '企業の認知拡大・ブランディング',
                '潜在層（転職顕在層以外）へのアプローチ',
                '採用コストの大幅な削減'
            ]
        }
    }
];

export default function Services() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

    const openModal = (service: ServiceData) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        // setTimeout(() => setSelectedService(null), 300); // Clear after animation if needed, but keeping it helps fade out
    };

    return (
        <section id="services" className="section bg-sub">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <span className="section-subtitle">事業内容</span>

                <div className="services-grid-new">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="service-card-new"
                            onClick={() => openModal(service)}
                        >
                            <div className="service-accent-bar" style={{ backgroundColor: service.accentColor }}></div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-desc">{service.description}</p>
                            <div className="service-visual-area" style={{ backgroundColor: `${service.accentColor}10` }}>
                                <div className="service-visual-icon" style={{ color: service.accentColor }}>
                                    {service.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ServiceModal
                isOpen={modalOpen}
                onClose={closeModal}
                service={selectedService}
            />
        </section>
    );
}
