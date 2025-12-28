'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaLink } from 'react-icons/fa';
import { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <div className="flex gap-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          aria-label="Share on Twitter"
        >
          <FaTwitter size={16} />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn size={16} />
        </a>
        <a
          href={shareLinks.email}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
          aria-label="Share via email"
        >
          <FaEnvelope size={16} />
        </a>
        <button
          onClick={handleCopyLink}
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
            copied ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label="Copy link"
          title={copied ? 'Copied!' : 'Copy link'}
        >
          <FaLink size={16} />
        </button>
      </div>
    </div>
  );
}
