import { Block } from "payload";



export const MarketShield: Block = {
    slug: "marketShield",
    labels: {
        singular: "Market Shield Section",
        plural: "Market Shield Sections",
    },
    fields: [
        {
            name: "heading",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "ctaText",
            type: "text",
        },
        {
            name: "ctaLink",
            type: "text",
        },
        {
            name: "features",
            type: "array",
            label: "Feature Items",
            minRows: 1,
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "content",
                    type: "textarea",
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
    ],
};
