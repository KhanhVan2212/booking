"use client";

import { useState, useRef } from "react";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUploader({ value, onChange, label = "Image" }: ImageUploaderProps) {
  const [uploadMode, setUploadMode] = useState<"link" | "upload">("link");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        onChange(result.url);
        setError(null);
      } else {
        setError(result.error || "Upload failed");
      }
    } catch (err) {
      setError("Failed to upload image. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-3">
        <button
          type="button"
          onClick={() => setUploadMode("link")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            uploadMode === "link"
              ? "bg-red-600 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          🔗 Dùng Link
        </button>
        <button
          type="button"
          onClick={() => setUploadMode("upload")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            uploadMode === "upload"
              ? "bg-red-600 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          📤 Upload từ máy
        </button>
      </div>

      {/* Link Input */}
      {uploadMode === "link" && (
        <div>
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      )}

      {/* Upload Input */}
      {uploadMode === "upload" && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="image-upload"
          />
          <div className="flex items-center gap-4">
            <label
              htmlFor="image-upload"
              className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition ${
                isUploading
                  ? "bg-slate-400 text-white cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {isUploading ? "Đang upload..." : "Chọn ảnh"}
            </label>
            {value && (
              <span className="text-sm text-slate-600">
                Current: {value.includes("http") ? "Link" : "Uploaded"}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
        </div>
      )}

      {/* Image Preview */}
      {value && (
        <div className="mt-4">
          <p className="text-sm text-slate-600 mb-2">Preview:</p>
          <div className="border border-slate-300 rounded-lg p-2 bg-slate-50">
            <img
              src={value.startsWith("http") ? value : value}
              alt="Preview"
              className="max-w-full h-auto max-h-64 rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage not found%3C/text%3E%3C/svg%3E";
              }}
            />
            <p className="text-xs text-slate-500 mt-2 break-all">{value}</p>
          </div>
        </div>
      )}
    </div>
  );
}
