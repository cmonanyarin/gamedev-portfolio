# gamedev-portfolio

หน้ารวมผลงานวิชา Computer Game Development — https://cmonanyarin.github.io/gamedev-portfolio/

## แก้ไขหน้าเว็บ

ข้อมูลทั้งหมด (ชื่อ, รหัส, การ์ด Lab/Project) อยู่ใน **`portfolio.js`** ไฟล์เดียว

- **เพิ่มงานใหม่:** copy 1 บรรทัดใน `labs` หรือ `projects` แล้วแก้ `tag`, `title`, `desc`, `href`, `emoji`
- **ยังไม่เสร็จ:** ใส่ `status: "soon"` แล้วการ์ดจะขึ้นป้าย "เร็วๆ นี้"
- **เปลี่ยนสี:** `theme` = indigo, cyan, amber, emerald, violet, orange, fuchsia, slate
- ตัวเลข Labs / Projects / Playable นับให้อัตโนมัติ

หน้าตาการ์ดอยู่ที่ `js/cards.js` ส่วน `index.html` เป็นโครงหน้าและ animation

## ใส่เกมใหม่ (Godot Web export)

1. Godot → Project → Export → Web, ปิด **Thread Support** (GitHub Pages ไม่รองรับ threads)
2. Export เป็น `labNN/index.html` (ไฟล์ `.js`, `.wasm`, `.pck` ต้องชื่อเดียวกับ html)
3. เพิ่มบรรทัดใน `portfolio.js`
4. อัปโหลดด้วย git หรือ GitHub Desktop — **ห้ามอัปผ่านหน้าเว็บ GitHub**
   เพราะหน้าเว็บจำกัดไฟล์ละ 25 MB แต่ `.wasm` ใหญ่ ~38 MB จะหลุดหายไป
   (สาเหตุที่ project01 เคยเปิดไม่ได้)
