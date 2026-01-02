# 🇵🇸 تلك القضية | The Cause

An interactive timeline documenting Palestinian history from 1917 to the present day.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ahmedfawzyjr/Telka-Qadeya)

![Hero Screenshot](./docs/hero.png)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌍 **Bilingual** | Arabic & English with RTL/LTR support |
| 🌓 **Dark/Light Mode** | Theme toggle with system preference detection |
| 🎨 **3D Graphics** | Three.js particle effects in hero section |
| ⚡ **Animations** | Framer Motion scroll-triggered animations |
| 📱 **Responsive** | Mobile-first design for all screen sizes |
| 🎯 **Premium UX** | Smooth transitions and interactive elements |

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Typography**: Inter (EN) + Tajawal (AR)

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/ahmedfawzyjr/Telka-Qadeya.git

# Navigate to project
cd Telka-Qadeya/tilka-alqadiya

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com/new)
3. Set the root directory to `tilka-alqadiya`
4. Deploy!

Or use the button above for one-click deployment.

## 📁 Project Structure

```
tilka-alqadiya/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with i18n & theme
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── 3d/             # Three.js components
│   │   ├── ui/             # UI components (toggles, nav)
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   ├── Statistics.tsx
│   │   └── Pillars.tsx
│   ├── lib/
│   │   └── data.ts         # Timeline events data
│   └── i18n/
│       └── request.ts      # i18n config
├── messages/
│   ├── ar.json             # Arabic translations
│   └── en.json             # English translations
└── package.json
```

## 📖 Historical Events Covered

- **1917**: Balfour Declaration
- **1948**: The Nakba
- **1967**: The Naksa
- **1982**: Sabra & Shatila Massacre
- **1987**: First Intifada
- **2000**: Second Intifada
- **2008-2023**: Gaza Wars
- **2023-Present**: Ongoing Genocide

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for educational purposes.

---

<div align="center">

**لن ننسى. لن نسامح. سنعود.**

*We will never forget. We will never forgive. We will return.*

🇵🇸

</div>
