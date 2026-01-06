import { Block } from "payload";


export const Card: Block = {
    slug: "card",
    labels: {
        singular: "card Section",
        plural: "card Sections",
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

        // 🔹 Drag & Drop Cards
        {
            name: "cards",
            type: "array",
            label: "Cards",

            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "tag",
                    type: "text",
                    required: true,
                },
                {
                    name: "date",
                    type: "date",
                    required: true,
                },
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "excerpt",
                    type: "textarea",
                },
                {
                    name: "link",
                    type: "text",
                    required: true,
                },
            ],
        },
    ],
};
