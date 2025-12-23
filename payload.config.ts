import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import sharp from "sharp";

export default buildConfig({
  // ✅ FIX: Sử dụng đúng biến env
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",

  admin: {
    user: "users",
  },

  // ✅ FIX: Thêm routes để enable API
  routes: {
    api: '/api',
    admin: '/admin',
  },

  collections: [
    {
      slug: "users",
      auth: true,
      admin: {
        useAsTitle: "email",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "select",
          options: [
            { label: "Admin", value: "admin" },
            { label: "Editor", value: "editor" },
            { label: "User", value: "user" },
          ],
          defaultValue: "user",
          required: true,
        },
      ],
    },
    {
      slug: "media",
      upload: {
        staticDir: "media",
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "centre",
          },
          {
            name: "card",
            width: 800,
            height: 600,
            position: "centre",
          },
          {
            name: "hero",
            width: 2000,
            height: 1200,
            position: "centre",
          },
        ],
        mimeTypes: ["image/*"],
      },
      fields: [
        {
          name: "alt",
          type: "text",
          label: "Mô tả ảnh (Alt text)",
        },
      ],
    },
    {
      slug: "destinations",
      admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "slug", "region", "status", "featured"],
      },
      access: {
        read: () => true,
        create: ({ req: { user } }) => !!user,
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => !!user,
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Tên điểm đến",
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          label: "Đường dẫn (URL)",
          admin: {
            description: "VD: da-nang, hoi-an, phu-quoc",
          },
        },
        {
          name: "region",
          type: "select",
          required: true,
          options: [
            { label: "Trong nước", value: "domestic" },
            { label: "Quốc tế", value: "international" },
          ],
          defaultValue: "domestic",
          label: "Khu vực",
        },
        {
          name: "description",
          type: "text",
          label: "Mô tả ngắn",
          admin: {
            description: "Hiển thị ở danh sách và card (1-2 câu ngắn)",
          },
        },
        {
          name: "price",
          type: "text",
          required: true,
          label: "Giá vé",
          admin: {
            description: "VD: Từ 1.200.000 VNĐ",
          },
        },
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          label: "Ảnh đại diện (Upload)",
          admin: {
            description: "Upload ảnh từ máy tính (ưu tiên hiển thị)",
          },
        },
        {
          name: "imageUrl",
          type: "text",
          label: "Hoặc URL ảnh đại diện",
          admin: {
            description: "Nhập link ảnh từ internet (nếu không upload)",
          },
        },
        {
          name: "featured",
          type: "checkbox",
          label: "Hiển thị nổi bật ở trang chủ",
          defaultValue: false,
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "Nháp", value: "draft" },
            { label: "Xuất bản", value: "published" },
          ],
          defaultValue: "draft",
          required: true,
          label: "Trạng thái",
        },
        {
          name: "detailInfo",
          type: "group",
          label: "Thông tin chi tiết",
          fields: [
            {
              name: "bestTime",
              type: "text",
              label: "Thời gian lý tưởng",
              defaultValue: "Tháng 3 - Tháng 8",
            },
            {
              name: "flightTime",
              type: "text",
              label: "Thời gian bay",
              defaultValue: "1 giờ 15 phút",
            },
            {
              name: "location",
              type: "text",
              label: "Vị trí",
            },
          ],
        },
        {
          name: "content",
          type: "richText",
          editor: lexicalEditor({}),
          label: "Nội dung chi tiết",
          admin: {
            description: "Nội dung đầy đủ hiển thị ở trang detail",
          },
        },
        {
          name: "reasons",
          type: "array",
          label: "Lý do nên đi du lịch",
          fields: [
            {
              name: "reason",
              type: "text",
              required: true,
              label: "Lý do",
            },
          ],
        },
        {
          name: "tips",
          type: "textarea",
          label: "Mẹo du lịch",
          admin: {
            description: "Các lời khuyên hữu ích cho du khách",
          },
        },
        {
          name: "gallery",
          type: "array",
          label: "Thư viện ảnh",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Upload ảnh",
            },
            {
              name: "imageUrl",
              type: "text",
              label: "Hoặc URL ảnh",
            },
            {
              name: "caption",
              type: "text",
              label: "Chú thích ảnh",
            },
          ],
        },
      ],
    },
    {
      slug: "pages",
      admin: {
        useAsTitle: "title",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
        },
        {
          name: "content",
          type: "richText",
          editor: lexicalEditor({}),
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
        },
      ],
    },
    {
      slug: "posts",
      admin: {
        useAsTitle: "title",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
        },
        {
          name: "excerpt",
          type: "textarea",
        },
        {
          name: "content",
          type: "richText",
          editor: lexicalEditor({}),
        },
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
        },
        {
          name: "publishedDate",
          type: "date",
        },
      ],
    },
  ],

  editor: lexicalEditor({}),

  // ✅ FIX: Đảm bảo có secret
  secret: process.env.PAYLOAD_SECRET || "",

  typescript: {
    outputFile: path.resolve(process.cwd(), "payload-types.ts"),
  },

  // ✅ FIX: Đảm bảo MongoDB URL đúng
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),

  sharp,
});