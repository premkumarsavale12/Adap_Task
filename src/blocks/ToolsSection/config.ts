import { Block } from "payload";


export const ToolsSection: Block = {
    slug: "toolsSection",
    labels: {
        singular: "Tools Section",
        plural: "Tools Sections",
    },
    fields: [
        {
            name: "heading",
            type: "text",
            required: true,
            defaultValue: "Our Free Tools",
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "tools",
            type: "array",
            minRows: 1,
            maxRows: 4,
            label: "Tool Tabs",
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                    label: "Button Text",
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
