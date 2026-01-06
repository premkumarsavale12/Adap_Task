import { Block } from "payload";


export const HorizontalContentWithImage: Block = {
    slug: 'horizontalContentWithImage',
    labels: {
        singular: 'Horizontal Content With Image',
        plural: 'Horizontal Content With Images',
    },
    fields: [
        {
            name: 'items',
            type: 'array',
            required: true,
            label: 'Content Rows',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'subtitle',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'buttonText',
                    type: 'text',
                },
                {
                    name: 'buttonUrl',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
}
