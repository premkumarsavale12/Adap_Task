
"use client"
import React, { useRef } from "react";

interface CardProps {
    heading: string;
    description?: string;
    cards: {
        image: {
            url: string;
            alt?: string;
        };
        tag: string;
        date: string;
        title: string;
        excerpt?: string;
        link: string;
    }[];
}

export const Card: React.FC<CardProps> = ({
    heading,
    description,
    cards,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header + Buttons */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {heading}
                        </h2>
                        {description && (
                            <p className="text-gray-600 text-base">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Slider Buttons */}
                    <div className="flex gap-3 mt-6 md:mt-0">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100"
                        >
                            ←
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Horizontal Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {cards?.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] lg:min-w-[300px] bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <img
                                src={card.image.url}
                                alt={card.image.alt || card.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                                        {card.tag}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {new Date(card.date).toLocaleDateString()}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {card.title}
                                </h3>

                                {card.excerpt && (
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                        {card.excerpt}
                                    </p>
                                )}

                                <a
                                    href={card.link}
                                    className="text-sm font-semibold underline underline-offset-4"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
