# Swiim Nano - Digital Receipts & Loyalty Prototype

A beautiful, production-looking frontend prototype for Swiim's digital receipt and loyalty system.

**Note:** The interface is entirely in French for French clients.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

2. **Run the development server:**
   ```bash
   yarn dev -p 3001
   # or
   npm run dev -- -p 3001
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3001/swiim-nano](http://localhost:3001/swiim-nano)

## 📋 Features

- **Mobile-first responsive design** - Perfect on all devices
- **Clean, modern UI** inspired by Apple/Linear
- **Receipt preview** with realistic placeholder data
- **Customer data capture form** with email, amount, and preferences
- **Google Form integration placeholder** for prototype backend
- **Smooth interactions** and micro-animations

## 🎨 Design System

- **Accent color:** `#C7FF06` (swiim-accent)
- **Background:** Light gray (`bg-gray-50`)
- **Typography:** System sans-serif with clear hierarchy
- **Spacing:** Generous padding and gaps
- **Borders:** Rounded corners (`rounded-2xl`)
- **Shadows:** Soft elevation (`shadow-lg`, `shadow-md`)

## 🔧 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## 📝 Next Steps

To complete the prototype:

1. Create a Google Form with fields for:
   - Email address
   - Purchase amount
   - Receive offers checkbox
   - Loyalty points checkbox

2. Get the embed code from Google Forms (Share → Embed)

3. Paste the `<iframe>` code in the placeholder section in `/app/swiim-nano/page.tsx`

## 🎯 Key Routes

- `/` - Landing page with link to prototype
- `/swiim-nano` - Main prototype page

## 💡 Notes

This is a concierge MVP - no backend or API calls are implemented. All data capture happens through the Google Form, which connects to a Google Sheet for manual processing.

