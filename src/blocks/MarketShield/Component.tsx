

"use client";

import React, { useEffect, useState } from "react";

interface FeatureItem {
    title: string;
    content?: string;
    image?: {
        url: string;
        alt?: string;
    };
}

interface MarketShieldProps {
    heading?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    features?: FeatureItem[];
}

export const MarketShieldBlock: React.FC<MarketShieldProps> = ({
    heading,
    description,
    ctaText,
    ctaLink,
    features = [],
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    // ⏱ Show content after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const activeFeature = features[activeIndex];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Content */}
                <div
                    className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {heading}
                            </h2>
                            <p className="text-gray-600 max-w-2xl">
                                {description}
                            </p>
                        </div>

                        {ctaText && (
                            <a
                                href={ctaLink || "#"}
                                className="border border-green-500 text-green-600 px-6 py-3 rounded hover:bg-green-500 hover:text-white transition"
                            >
                                {ctaText}
                            </a>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14 items-center">
                    {/* Left: Feature List */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">
                            What Makes Market Shield Unmatched?
                        </h3>

                        {features.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="flex gap-4 cursor-pointer group"
                            >
                                <span
                                    className={`mt-1 h-4 w-4 rounded-full border-2 flex-shrink-0 ${activeIndex === index
                                        ? "border-green-500 bg-green-500"
                                        : "border-gray-300"
                                        }`}
                                />

                                <div>
                                    <h4
                                        className={`font-semibold ${activeIndex === index
                                            ? "text-green-600"
                                            : "text-gray-900"
                                            }`}
                                    >
                                        {item.title}
                                    </h4>

                                    {activeIndex === index && item.content && (
                                        <p className="text-gray-600 mt-2 max-w-md">
                                            {item.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Image */}
                    <div className="relative">
                        {activeFeature?.image?.url && (
                            <img
                                src={activeFeature.image.url}
                                alt={activeFeature.image.alt || ""}
                                className="rounded-xl shadow-lg w-full object-cover transition-all duration-500"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
