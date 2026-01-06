'use client'
import { useEffect, useRef, useState } from 'react'

interface Item {
    title: string
    subtitle?: string
    description?: string
    buttonText?: string
    buttonUrl?: string
    image?: {
        url: string
        alt?: string
    }
}

interface Props {
    items: Item[]
}

export const HorizontalContentWithImage: React.FC<Props> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'))
                        setActiveIndex(index)
                    }
                })
            },
            { threshold: 0.5 }
        )

        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    if (!items?.length) return null

    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                {/* LEFT CONTENT */}
                <div className="space-y-16">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                itemRefs.current[index] = el
                            }}
                            data-index={index}
                        >
                            <h2 className="text-2xl font-semibold text-gray-900">
                                {item.title}
                            </h2>

                            {item.subtitle && (
                                <p className="text-sm text-gray-500 mt-1">
                                    {item.subtitle}
                                </p>
                            )}

                            {item.description && (
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {item.description}
                                </p>
                            )}

                            {item.buttonText && item.buttonUrl && (
                                <a
                                    href={item.buttonUrl}
                                    className="inline-block mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-white transition"
                                >
                                    {item.buttonText}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* RIGHT IMAGE */}
                <div className="sticky top-28 h-[450px] rounded-xl overflow-hidden shadow-xl">
                    <img
                        src={items[activeIndex]?.image?.url}
                        alt={items[activeIndex]?.image?.alt || ''}
                        className="w-full h-full object-cover transition-all duration-700"
                    />
                </div>

            </div>
        </section>
    )
}
