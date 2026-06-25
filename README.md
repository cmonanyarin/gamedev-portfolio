# Computer Game Development Portfolio

เว็บพอร์ตโฟลิโอแสดงผลงานแล็บวิชาพัฒนาเกมด้วย **Godot Engine**

**ผู้จัดทำ:** นาย อชิรวิทย์ ศรีชา · รหัสนักศึกษา 673380353-1

🔗 **เว็บไซต์:** https://USERNAME.github.io/REPO/ _(แก้เป็นลิงก์จริงหลัง deploy)_

---

## ✨ ฟีเจอร์

- หน้า Hub แสดงผลงานแบบ responsive (คอม/มือถือ) ธีมมืดโมเดิร์น
- พื้นหลังเอฟเฟกต์: aurora glow, starfield, cyber particles คาวบอยขี่ม้า
- Sticky navbar + scrollspy + back-to-top + scroll reveal animation
- ฟอนต์ LINE Seed Sans TH
- **Lab 01:** เกม Godot เล่นได้จริงบนเว็บ (ฉากแนะนำตนเอง)

## 📁 โครงสร้าง

```
webgame1/
├─ index.html          # หน้า Portfolio Hub
├─ rider.png           # รูป particle คาวบอยขี่ม้า
├─ 404.html            # หน้า Not Found
├─ lab01/              # เกม Godot (ฉากแนะนำตนเอง) — เล่นได้
│  ├─ index.html
│  └─ cowboy.*         # ไฟล์ export จาก Godot (js/pck/wasm/png)
├─ lab02 … lab07/      # Coming Soon (พร้อมวาง export)
└─ project01 … 03/     # Coming Soon
```

## 🚀 รันในเครื่อง

เกม Godot ต้องเปิดผ่าน web server (เปิดไฟล์ตรงๆ ไม่ได้):

```bash
# Python
python -m http.server 8000
# หรือ Node
npx serve
```

แล้วเปิด http://localhost:8000

## 🌐 Deploy (GitHub Pages)

1. push โค้ดขึ้น repo
2. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `/ (root)`
3. รอสักครู่ เว็บจะอยู่ที่ `https://USERNAME.github.io/REPO/`

> มีไฟล์ `.nojekyll` แล้ว เพื่อให้ GitHub Pages ไม่ตัดไฟล์เกม

## 🛠️ เทคโนโลยี

HTML · Tailwind CSS (CDN) · Vanilla JavaScript · Godot Engine 4 (Web export)
