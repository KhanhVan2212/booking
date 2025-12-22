import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import sharp from "sharp";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    user: "users",
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
      slug: "destinations",
      admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "price", "slug", "status"],
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
          name: "price",
          type: "text",
          required: true,
          label: "Giá vé",
          admin: {
            description: "VD: 1.200.000 VNĐ",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Mô tả ngắn",
        },
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          label: "Ảnh đại diện (Upload)",
          admin: {
            description: "Upload ảnh từ máy tính",
          },
        },
        {
          name: "imageUrl",
          type: "text",
          label: "Hoặc URL ảnh",
          admin: {
            description: "Nhập link ảnh từ internet (nếu không upload)",
          },
        },
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
          name: "content",
          type: "richText",
          editor: lexicalEditor({}),
          label: "Nội dung chi tiết",
        },
        {
          name: "whyVisit",
          type: "array",
          label: "Lý do nên đi",
          fields: [
            {
              name: "reason",
              type: "text",
              required: true,
            },
          ],
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
              required: true,
            },
          ],
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "Nháp", value: "draft" },
            { label: "Xuất bản", value: "published" },
          ],
          defaultValue: "draft",
          label: "Trạng thái",
        },
        {
          name: "featured",
          type: "checkbox",
          label: "Hiển thị ở trang chủ",
          defaultValue: false,
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
    {
      slug: "media",
      upload: {
        staticDir: "media",
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
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(process.cwd(), "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),
  sharp,
});