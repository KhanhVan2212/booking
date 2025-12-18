"use client";

import { useState, useEffect } from "react";
import { LandingPageCMSData } from "@/types/landing-page.types";
import ImageUploader from "@/components/admin/ImageUploader";

export default function AdminPage() {
  const [data, setData] = useState<LandingPageCMSData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [jsonText, setJsonText] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/landing-page");
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        setJsonText(JSON.stringify(result.data, null, 2));
      } else {
        setMessage({ type: "error", text: "Không thể tải dữ liệu" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Lỗi khi tải dữ liệu" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const parsed = JSON.parse(jsonText);
      setIsSaving(true);
      setMessage(null);

      const response = await fetch("/api/landing-page", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: parsed }),
      });

      const result = await response.json();

      if (result.success) {
        setData(parsed);
        setMessage({ type: "success", text: "Đã lưu thành công!" });
        setTimeout(() => setMessage(null), 3000);
        setActiveSection(null);
      } else {
        setMessage({ type: "error", text: result.error || "Lỗi khi lưu" });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "JSON không hợp lệ: " + (error as Error).message,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleFieldChange = (path: string[], value: any) => {
    if (!data) return;
    
    const newData = { ...data };
    let current: any = newData;
    
    for (let i = 0; i < path.length - 1; i++) {
      if (Array.isArray(current[path[i]])) {
        current = current[path[i]];
      } else {
        current = current[path[i]] = { ...current[path[i]] };
      }
    }
    
    current[path[path.length - 1]] = value;
    setData(newData);
    setJsonText(JSON.stringify(newData, null, 2));
  };

  const handleArrayItemChange = (path: string[], index: number, field: string, value: any) => {
    if (!data) return;
    
    const newData = { ...data };
    let current: any = newData;
    
    for (const key of path) {
      current = current[key];
    }
    
    const newArray = [...current];
    newArray[index] = { ...newArray[index], [field]: value };
    
    let parent: any = newData;
    for (let i = 0; i < path.length - 1; i++) {
      parent = parent[path[i]];
    }
    parent[path[path.length - 1]] = newArray;
    
    setData(newData);
    setJsonText(JSON.stringify(newData, null, 2));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
        <div className="text-xl">Đang tải...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
        <div className="text-xl text-red-600">Không thể tải dữ liệu</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                CMS Admin - Landing Page
              </h1>
              <p className="text-slate-600 mt-1">
                Chỉnh sửa nội dung landing page trực tiếp
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={loadData}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
              >
                Reload
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? "Đang lưu..." : "💾 Lưu tất cả"}
              </button>
            </div>
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
              <h2 className="font-bold text-lg mb-4">Sections</h2>
              <nav className="space-y-2">
                {[
                  { id: "hero", name: "Hero Section" },
                  { id: "services", name: "Services" },
                  { id: "features", name: "Features" },
                  { id: "destinations", name: "Destinations" },
                  { id: "flashDeals", name: "Flash Deals" },
                  { id: "inspiration", name: "Inspiration" },
                  { id: "airlinePartners", name: "Airline Partners" },
                  { id: "contact", name: "Contact" },
                  { id: "json", name: "JSON Editor" },
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeSection === section.id
                        ? "bg-red-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {section.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === "hero" && (
              <HeroEditor data={data.hero} onChange={(value) => handleFieldChange(["hero"], value)} />
            )}

            {activeSection === "services" && (
              <ServicesEditor
                data={data.services}
                onChange={(value) => handleFieldChange(["services"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "features" && (
              <FeaturesEditor
                data={data.features}
                onChange={(value) => handleFieldChange(["features"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "destinations" && (
              <DestinationsEditor
                data={data.destinations}
                onChange={(value) => handleFieldChange(["destinations"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "flashDeals" && (
              <FlashDealsEditor
                data={data.flashDeals}
                onChange={(value) => handleFieldChange(["flashDeals"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "inspiration" && (
              <InspirationEditor
                data={data.inspiration}
                onChange={(value) => handleFieldChange(["inspiration"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "airlinePartners" && (
              <AirlinePartnersEditor
                data={data.airlinePartners}
                onChange={(value) => handleFieldChange(["airlinePartners"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "contact" && (
              <ContactEditor
                data={data.contact}
                onChange={(value) => handleFieldChange(["contact"], value)}
                onItemChange={handleArrayItemChange}
              />
            )}

            {activeSection === "json" && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">JSON Editor</h2>
                <textarea
                  value={jsonText}
                  onChange={(e) => {
                    setJsonText(e.target.value);
                    try {
                      const parsed = JSON.parse(e.target.value);
                      setData(parsed);
                    } catch (err) {
                      // Invalid JSON, don't update data
                    }
                  }}
                  className="w-full h-[600px] font-mono text-sm p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            )}

            {!activeSection && (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <p className="text-slate-600 text-lg">
                  Chọn một section từ menu bên trái để bắt đầu chỉnh sửa
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Editor Components
function HeroEditor({ data, onChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Hero Section</h2>
      <ImageUploader
        label="Background Image"
        value={data.backgroundImage}
        onChange={(v) => onChange({ ...data, backgroundImage: v })}
      />
      <InputField label="Title" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      <InputField label="Highlighted Text" value={data.highlightedText || ""} onChange={(v) => onChange({ ...data, highlightedText: v })} />
      <TextareaField label="Subtitle" value={data.subtitle} onChange={(v) => onChange({ ...data, subtitle: v })} />
    </div>
  );
}

function ServicesEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold">Services Section</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Header</h3>
        <InputField label="Badge" value={data.header.badge} onChange={(v) => onChange({ ...data, header: { ...data.header, badge: v } })} />
        <TextareaField label="Title" value={data.header.title} onChange={(v) => onChange({ ...data, header: { ...data.header, title: v } })} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Main Services ({data.mainServices.length})</h3>
        {data.mainServices.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">Service {index + 1}</h4>
            <InputField label="Icon" value={item.icon} onChange={(v) => onItemChange(["services", "mainServices"], index, "icon", v)} />
            <InputField label="Title" value={item.title} onChange={(v) => onItemChange(["services", "mainServices"], index, "title", v)} />
            <div>
              <label className="block text-sm font-medium mb-2">Features (mỗi dòng một feature)</label>
              <textarea
                value={item.features.join("\n")}
                onChange={(e) => onItemChange(["services", "mainServices"], index, "features", e.target.value.split("\n").filter(f => f.trim()))}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Features Section</h2>
      <InputField label="Title" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Features ({data.features.length})</h3>
        {data.features.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">Feature {index + 1}</h4>
            <InputField label="Icon" value={item.icon} onChange={(v) => onItemChange(["features", "features"], index, "icon", v)} />
            <InputField label="Title" value={item.title} onChange={(v) => onItemChange(["features", "features"], index, "title", v)} />
            <TextareaField label="Description" value={item.description} onChange={(v) => onItemChange(["features", "features"], index, "description", v)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DestinationsEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Destinations Section</h2>
      <InputField label="Title" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      <InputField label="Description" value={data.description} onChange={(v) => onChange({ ...data, description: v })} />
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Destinations ({data.destinations.length})</h3>
        {data.destinations.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">Destination {index + 1}</h4>
            <InputField label="Name" value={item.name} onChange={(v) => onItemChange(["destinations", "destinations"], index, "name", v)} />
            <InputField label="Price" value={item.price} onChange={(v) => onItemChange(["destinations", "destinations"], index, "price", v)} />
            <ImageUploader
              label="Image"
              value={item.imageUrl}
              onChange={(v) => onItemChange(["destinations", "destinations"], index, "imageUrl", v)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FlashDealsEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Flash Deals Section</h2>
      <InputField label="Title" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      <InputField label="Description" value={data.description} onChange={(v) => onChange({ ...data, description: v })} />
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Deals ({data.deals.length})</h3>
        {data.deals.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">Deal {index + 1}</h4>
            <InputField label="From" value={item.from} onChange={(v) => onItemChange(["flashDeals", "deals"], index, "from", v)} />
            <InputField label="To" value={item.to} onChange={(v) => onItemChange(["flashDeals", "deals"], index, "to", v)} />
            <InputField label="Price" value={item.price} onChange={(v) => onItemChange(["flashDeals", "deals"], index, "price", v)} />
            <InputField label="Old Price" value={item.oldPrice} onChange={(v) => onItemChange(["flashDeals", "deals"], index, "oldPrice", v)} />
            <InputField label="Time Left" value={item.timeLeft} onChange={(v) => onItemChange(["flashDeals", "deals"], index, "timeLeft", v)} />
            <ImageUploader
              label="Image"
              value={item.image}
              onChange={(v) => onItemChange(["flashDeals", "deals"], index, "image", v)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function InspirationEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Inspiration Section</h2>
      <InputField label="Title" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      <InputField label="Description" value={data.description} onChange={(v) => onChange({ ...data, description: v })} />
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Blogs ({data.blogs.length})</h3>
        {data.blogs.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">Blog {index + 1}</h4>
            <InputField label="Title" value={item.title} onChange={(v) => onItemChange(["inspiration", "blogs"], index, "title", v)} />
            <InputField label="Category" value={item.category} onChange={(v) => onItemChange(["inspiration", "blogs"], index, "category", v)} />
            <ImageUploader
              label="Image"
              value={item.image}
              onChange={(v) => onItemChange(["inspiration", "blogs"], index, "image", v)}
            />
            <InputField label="Date" value={item.date} onChange={(v) => onItemChange(["inspiration", "blogs"], index, "date", v)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AirlinePartnersEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Airline Partners Section</h2>
      <InputField label="Badge" value={data.badge} onChange={(v) => onChange({ ...data, badge: v })} />
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Airlines ({data.airlines.length})</h3>
        {data.airlines.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">Airline {index + 1}</h4>
            <InputField label="Name" value={item.name} onChange={(v) => onItemChange(["airlinePartners", "airlines"], index, "name", v)} />
            <ImageUploader
              label="Logo"
              value={item.logo}
              onChange={(v) => onItemChange(["airlinePartners", "airlines"], index, "logo", v)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactEditor({ data, onChange, onItemChange }: any) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Contact Section</h2>
      <InputField label="Badge" value={data.badge} onChange={(v) => onChange({ ...data, badge: v })} />
      <InputField label="Title" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
      <TextareaField label="Description" value={data.description} onChange={(v) => onChange({ ...data, description: v })} />
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Info ({data.contactInfo.length})</h3>
        {data.contactInfo.map((item: any, index: number) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 mb-4">
            <h4 className="font-bold mb-2">{item.type}</h4>
            <InputField label="Title" value={item.title} onChange={(v) => onItemChange(["contact", "contactInfo"], index, "title", v)} />
            <InputField label="Value" value={item.value} onChange={(v) => onItemChange(["contact", "contactInfo"], index, "value", v)} />
            <InputField label="Subtitle" value={item.subtitle || ""} onChange={(v) => onItemChange(["contact", "contactInfo"], index, "subtitle", v)} />
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Form</h3>
        <InputField label="Form Title" value={data.form.title} onChange={(v) => onChange({ ...data, form: { ...data.form, title: v } })} />
        <InputField label="Name Field" value={data.form.fields.name} onChange={(v) => onChange({ ...data, form: { ...data.form, fields: { ...data.form.fields, name: v } } })} />
        <InputField label="Phone Field" value={data.form.fields.phone} onChange={(v) => onChange({ ...data, form: { ...data.form, fields: { ...data.form.fields, phone: v } } })} />
        <InputField label="Email Field" value={data.form.fields.email} onChange={(v) => onChange({ ...data, form: { ...data.form, fields: { ...data.form.fields, email: v } } })} />
        <InputField label="Message Field" value={data.form.fields.message} onChange={(v) => onChange({ ...data, form: { ...data.form, fields: { ...data.form.fields, message: v } } })} />
        <InputField label="Submit Button" value={data.form.submitButton} onChange={(v) => onChange({ ...data, form: { ...data.form, submitButton: v } })} />
      </div>
    </div>
  );
}

// Helper Components
function InputField({ label, value, onChange }: any) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
    </div>
  );
}

function TextareaField({ label, value, onChange }: any) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
    </div>
  );
}
