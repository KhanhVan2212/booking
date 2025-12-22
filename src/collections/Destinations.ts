import { CollectionConfig } from 'payload'

export const Destinations: CollectionConfig = {
  slug: 'destinations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'price', 'status', 'featured'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tên điểm đến',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL thân thiện (VD: da-nang)',
      },
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Giá',
      admin: {
        description: 'VD: 1.200.000 VNĐ',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Hình ảnh',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'URL Hình ảnh (fallback)',
      admin: {
        description: 'Nếu không upload, có thể dán link ảnh trực tiếp',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: [
        {
          label: 'Đã xuất bản',
          value: 'published',
        },
        {
          label: 'Nháp',
          value: 'draft',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Điểm đến nổi bật',
      defaultValue: false,
    },
  ],
  timestamps: true,
}