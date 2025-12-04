import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    detail: {
        lead: string;
        purpose: string;
        menu: string[];
        process: { step: string; desc: string }[];
        effects: string[];
    };
    accentColor?: string;
}

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceData | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`modal-content ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {service && (
                    <div className="modal-body">
                        <div className="modal-header">
                            <span className="modal-service-icon">{service.icon}</span>
                            <h2 className="modal-title">{service.title}</h2>
                        </div>

                        <p className="modal-lead">{service.detail.lead}</p>

                        <div className="modal-section">
                            <h3 className="modal-section-title">事業の目的</h3>
                            <p className="modal-text">{service.detail.purpose}</p>
                        </div>

                        <div className="modal-section">
                            <h3 className="modal-section-title">提供メニュー</h3>
                            <ul className="modal-list">
                                {service.detail.menu.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section">
                            <h3 className="modal-section-title">導入プロセス</h3>
                            <div className="modal-steps">
                                {service.detail.process.map((step, index) => (
                                    <div key={index} className="modal-step-item">
                                        <div className="step-number">STEP {index + 1}</div>
                                        <div className="step-content">
                                            <div className="step-title">{step.step}</div>
                                            <div className="step-desc">{step.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <h3 className="modal-section-title">期待できる効果</h3>
                            <ul className="modal-check-list">
                                {service.detail.effects.map((effect, index) => (
                                    <li key={index}>{effect}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-cta">
                            <Link href="/contact" className="btn btn-primary" onClick={onClose}>
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
