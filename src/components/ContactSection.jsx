import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { brand } from '../data/siteData';

export default function ContactSection() {
  const brandName = brand?.name || 'Leatherlix';
  const brandEmail = brand?.email || 'info@leatherlix.com';
  const brandPhone = brand?.phone || '+92 300 0000000';
  const brandAddress = brand?.address || 'Multan, Pakistan';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    confirmed: false,
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.confirmed) {
      alert('Please confirm the checkbox before submitting.');
      return;
    }

    try {
      setStatus('sending');
      // Replace with your Express backend endpoint (e.g. /api/contact)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', confirmed: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-stone-900 text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-12">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-stone-800 bg-stone-800/50 p-6">
            <Mail className="text-teal mb-3" size={24} />
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Email</p>
            <a href={`mailto:${brandEmail}`} className="text-base font-semibold text-white hover:text-teal">
              {brandEmail}
            </a>
          </div>

          <div className="rounded-2xl border border-stone-800 bg-stone-800/50 p-6">
            <Phone className="text-teal mb-3" size={24} />
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Phone / WhatsApp</p>
            <a href={`tel:${brandPhone}`} className="text-base font-semibold text-white hover:text-teal">
              {brandPhone}
            </a>
          </div>

          <div className="rounded-2xl border border-stone-800 bg-stone-800/50 p-6">
            <MapPin className="text-teal mb-3" size={24} />
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Location</p>
            <p className="text-base font-semibold text-white">{brandAddress}</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 text-stone-900 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Your Name</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-stone-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-stone-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Inquiry / Requirements</label>
              <textarea
                rows="4"
                required
                placeholder="Mention article, application, thickness, finish, color, quantity..."
                className="w-full rounded-xl border border-stone-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-stone-100 p-4">
              <input
                type="checkbox"
                id="confirm"
                required
                className="mt-1 h-4 w-4 rounded border-stone-300 text-teal focus:ring-teal"
                checked={formData.confirmed}
                onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
              />
              <label htmlFor="confirm" className="text-xs text-stone-600">
                I confirm that the information provided is accurate and may be used to respond to this sourcing enquiry.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-tealDark transition-colors"
            >
              <Send size={15} />
              <span>{status === 'sending' ? 'Sending...' : 'Send Inquiry'}</span>
            </button>

            {status === 'success' && (
              <p className="text-center text-xs font-bold text-teal mt-2">Inquiry submitted successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-center text-xs font-bold text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
