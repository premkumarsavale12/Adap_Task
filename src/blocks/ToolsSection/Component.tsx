"use client";
import { useState } from "react";

interface Tool {
    label: string;
    image: {
        url: string;
        alt?: string;
    };
}

interface Props {
    heading: string;
    description?: string;
    tools: Tool[];
}

export const ToolsSection: React.FC<Props> = ({
    heading,
    description,
    tools,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-4">{heading}</h2>

                {description && (
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                        {description}
                    </p>
                )}

                {/* Buttons */}
                <div className="flex justify-center gap-6 flex-wrap mb-16">
                    {tools.map((tool, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${activeIndex === index
                                    ? "bg-pink-100 text-pink-700"
                                    : "text-gray-500 hover:text-black"
                                }`}
                        >
                            {tool.label}
                        </button>
                    ))}
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={tools[activeIndex]?.image?.url}
                        alt={tools[activeIndex]?.image?.alt || "Tool Chart"}
                        className="max-w-5xl w-full rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};
