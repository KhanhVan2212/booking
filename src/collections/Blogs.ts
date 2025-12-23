// collections/Blogs.ts
import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'updatedAt'],
  },
  access: {
    read: () => true, // Public có thể đọc
    create: ({ req: { user } }) => !!user, // Chỉ admin mới tạo
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Tiêu đề',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug (URL)',
      admin: {
        description: 'URL thân thiện (ví dụ: 10-dia-diem-check-in-da-nang)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Danh mục',
      options: [
        { label: 'Địa điểm', value: 'dia-diem' },
        { label: 'Kinh nghiệm', value: 'kinh-nghiem' },
        { label: 'Ẩm thực', value: 'am-thuc' },
        { label: 'Cẩm nang', value: 'cam-nang' },
        { label: 'Tin tức', value: 'tin-tuc' },
      ],
      defaultValue: 'kinh-nghiem',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'URL ảnh đại diện',
      admin: {
        description: 'Link ảnh từ nguồn bên ngoài',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Ảnh đại diện (Upload)',
      admin: {
        description: 'Hoặc upload ảnh lên server',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Mô tả ngắn',
      admin: {
        description: 'Hiển thị ở danh sách blog',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Nội dung bài viết',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Tác giả',
      defaultValue: 'Admin',
    },
    {
      name: 'readTime',
      type: 'text',
      label: 'Thời gian đọc',
      defaultValue: '5 phút',
      admin: {
        description: 'Ví dụ: 5 phút, 10 phút',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'Tag',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Nổi bật trang chủ',
      defaultValue: false,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      label: 'Trạng thái',
      options: [
        { label: 'Xuất bản', value: 'published' },
        { label: 'Nháp', value: 'draft' },
      ],
      defaultValue: 'draft',
    },
  ],
  timestamps: true,
}