"use client"
import React, { useState } from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa6';

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition-all ${
        copied
          ? "border-green-200 bg-green-50 text-green-600"
          : "border-slate-200 bg-slate-100 text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
      }`}
    >
      {copied ? (
        <>
          <FaCheck /> Đã sao chép
        </>
      ) : (
        <>
          <FaCopy /> {code}
        </>
      )}
    </button>
  );
};

export default CopyButton