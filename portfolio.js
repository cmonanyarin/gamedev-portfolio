/* =====================================================================
   ข้อมูลหน้า Portfolio — แก้ไฟล์นี้ไฟล์เดียวพอ
   ---------------------------------------------------------------------
   เพิ่มงานใหม่: copy 1 บรรทัดใน labs หรือ projects แล้วแก้ค่า
     tag    ป้ายเล็กด้านบน เช่น "LAB 07"
     title  หัวข้อการ์ด
     desc   คำอธิบายสั้นๆ (เว้นว่าง "" ได้)
     href   ลิงก์ไปหน้าเกม เช่น "lab07/index.html"
     emoji  ไอคอนบนการ์ด
     theme  สีการ์ด: indigo, cyan, amber, emerald, violet, orange, fuchsia, slate
     status "live" = เล่นได้, "soon" = เร็วๆ นี้ (ยังไม่มีเกม)
     image  (ไม่บังคับ) รูปหน้าปก เช่น "project01/index.png"
     button (ไม่บังคับ) ข้อความปุ่ม
   ตัวเลข Labs / Projects / Playable ด้านบนนับให้อัตโนมัติ
   ===================================================================== */
window.PORTFOLIO = {
  owner: {
    name: "อชิรวิทย์ ศรีชา",
    studentId: "673380353-1",
  },

  labs: [
    { tag: "LAB 01", title: "แบบฝึกหัดที่ 1", desc: "สร้างฉากแนะนำตนเอง ด้วย Godot", href: "lab01/index.html", emoji: "👋", theme: "indigo", status: "live", tilt: "-rotate-6" },
    { tag: "LAB 02", title: "แบบฝึกหัดที่ 2", desc: "Your First 2D Game 2.1 / 2.2", href: "lab02/index.html", emoji: "🔮", theme: "cyan", status: "live", tilt: "rotate-12" },
    { tag: "LAB 03", title: "แบบฝึกหัดที่ 3", desc: "", href: "lab03/index.html", emoji: "🦴", theme: "amber", status: "live", tilt: "-rotate-6" },
    { tag: "LAB 04", title: "แบบฝึกหัดที่ 4", desc: "", href: "lab04/index.html", emoji: "👹", theme: "emerald", status: "live", tilt: "-rotate-6" },
    { tag: "LAB 05", title: "แบบฝึกหัดที่ 5", desc: "แบบฝึกหัดพัฒนาเกมด้วย Godot Engine", href: "lab05/index.html", emoji: "🎮", theme: "violet", status: "live" },
    { tag: "LAB 06", title: "แบบฝึกหัดที่ 6", desc: "Animation Showcase: ตัวละคร Roblox ที่ rig ด้วย Mixamo + 307 clips จาก Melee / Shooter Libraries และท่าขี่สกู๊ตเตอร์ Giorno", href: "lab06/index.html", emoji: "🛵", theme: "orange", status: "live" },
    { tag: "LAB 07", title: "แบบฝึกหัดที่ 7", desc: "อยู่ระหว่างพัฒนา", href: "lab07/index.html", emoji: "🚧", theme: "slate", status: "soon" },
  ],

  projects: [
    { tag: "PROJECT 01", title: "Project 01", desc: "เกมที่พัฒนาด้วย Godot Engine", href: "project01/index.html", emoji: "🎮", theme: "fuchsia", status: "live", image: "project01/index.png", button: "▶ เล่นเกม" },
  ],
};
