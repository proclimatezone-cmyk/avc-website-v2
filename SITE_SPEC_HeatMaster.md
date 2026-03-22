# 🎬 Визуальная Спецификация Сайта — HeatMaster
> Источник: `site_example.mp4`  
> Разрешение видео: **1350 × 602 px** (широкоформатный viewport ~1350px)  
> Длительность: **38 секунд**  
> FPS: 30  
> Тип сайта: **Одностраничный сервисный лендинг** (HVAC / отопление)

---

## 📐 ОБЩАЯ СТРУКТУРА

Длинная вертикальная single-page страница с **8 основными секциями**. Каждая секция занимает ~100vh. Контент чередует белый, светло-бежевый и тёмно-серый фоны. Страница использует **горизонтальный split-layout** для product-секций (фото слева / текст справа или наоборот), чередующийся при каждой следующей секции. Между некоторыми секциями — крупные декоративные текстовые заголовки на всю ширину (типографические "якоря").

---

## 🎨 ЦВЕТОВАЯ СИСТЕМА

### Основная палитра

| Роль | Описание | Примерный HEX |
|------|----------|---------------|
| Фон Hero / белый | Чистый белый | `#FFFFFF` |
| Фон секции Furnace | Светлый тёплый бежево-розовый | `#F0ECEA` |
| Фон секции Heat Pump | Светлый тёплый серо-бежевый | `#E8E6E2` |
| Фон секции Boiler | Светлый холодный серый | `#E6E8EA` |
| Фон секции Radiant | Тёплый кремово-бежевый | `#EDE9E4` |
| Фон Reviews | Белый | `#FFFFFF` |
| Фон Reviews карточек | Почти чёрный (угольный) | `#1A1A1A` |
| Фон Why Choose | Белый | `#FFFFFF` |
| Фон Awards | Белый | `#FFFFFF` |
| Фон Brands | Светлый нейтральный серый | `#EBEBEB` |
| Фон Contact form | Светло-серый | `#EBEBEB` |
| Фон Footer | Очень тёмный (почти чёрный) | `#1C1C1C` |
| Текст основной | Почти чёрный | `#111111` / `#0D0D0D` |
| Текст на тёмном фоне | Белый | `#FFFFFF` |
| Текст ссылок в футере Services | Синеватый / нейтральный | `#A8B0BC` |
| Линия-разделитель навбара | Тёмно-серая тонкая полоска | `#2A2A2A` |

### Важные замечания
- **Никаких акцентных цветов** (нет синего, зелёного, красного у бренда). Всё — чёрное, белое, нейтральные оттенки.
- Фоны product-секций **попарно чередуются** по температуре: тёплый → холодный → тёплый → холодный.
- Нет box-shadow у карточек-логотипов, нет градиентов в бренде. Чистый минимализм.

---

## 🔤 ТИПОГРАФИКА

### Шрифты
- **Все тексты** — sans-serif гарнитура с геометрическими формами (очень похоже на **Inter**, **Neue Haas Grotesk** или **DM Sans**).
- **Логотип «HeatMaster»** — bold sans-serif, возможно другой шрифт, чуть более плотный.
- **Кнопки / CTA** — monospace-подобный шрифт с увеличенным letter-spacing: выглядит как **Courier New** или кастомный моноспейс. Все буквы UPPERCASE.
- **Счётчики рейтинга** (GOOGLE-4.9/395, ANGI-5/245) — явный моноспейс uppercase.

### Иерархия размеров

| Элемент | Текст (пример) | Размер | Вес | Особенности |
|---------|---------------|--------|-----|-------------|
| Декоративный H1 Hero | `HeatMaster` | ~220–240px | 900 Black | Занимает 100% ширины страницы, overflow hidden |
| Декоративный H (секции) | `Awards`, `Contact` | ~200px | 800–900 | Полноэкранный типографический заголовок |
| Лого в навбаре | `HeatMaster` | ~18px | 700 Bold | Верхний левый угол |
| Навигация пункты | `1. Furnace`, `2. Heat Pump`… | ~14px | 400 Regular | Центр навбара, letter-spacing нормальный |
| CTA кнопка навбар | `{ GET A FREE ESTIMATE }` | ~13px | 400–500 | Моноспейс, uppercase, обёрнуто в `{ }` скобки |
| Scroll hint | `{ SCROLL DOWN }` | ~12px | 400 | Правый нижний угол hero, моноспейс |
| Надпись локации | `FAIRBANKS, AK, USA` | ~12px | 500 | Letter-spacing wide, uppercase |
| Секционный номер | `01`, `02`, `03`, `04` | ~14px | 400 | Слева сверху в каждой секции, моноспейс |
| H2 секции (заголовок) | `Furnace Installation, Repair, Maintenance` | ~48–52px | 700 | Двустрочный, line-height ~1.1 |
| Body текст | `At HeatMaster, we're always ready…` | ~16px | 400 | Line-height ~1.6, max-width ~520px |
| Кнопки-ссылки | `{ LEARN MORE }`, `{ FREE ESTIMATE }` | ~13px | 400 | Моноспейс, uppercase, фигурные скобки |
| Why Choose H2 | `Why Choose HeatMaster for Your Heating Solutions?` | ~48px | 700 | Левый столбец |
| Why Choose подзаголовки | `Fast, Reliable, and Expert Service` | ~22px | 700 | 3 колонки |
| Why Choose body | `Our team delivers quick…` | ~15px | 400 | 3 колонки |
| Рейтинги | `GOOGLE-4.9/395   ANGI-5/245` | ~14px | 500 | Моноспейс, uppercase, с разделителем пробелами |
| Отзыв текст | `"The radiant floor heating system…"` | ~16px | 400 | Белый текст на тёмной карточке |
| Отзыв имя | `Emily Davis` | ~16px | 700 | Bold, белый |
| Бренды H2 | `HeatMaster Partners with the Best Brands…` | ~42px | 700 | Три строки текста |
| Footer колонки заголовки | `Quick Links`, `Services`, `Address:`, `Contact`, `Follow us:` | ~16px | 700 | Белый |
| Footer ссылки | `Home`, `About`, `Furnace`… | ~15px | 400 | Белый или слегка приглушённый |
| Footer подвал | `Copyright HeatMaster 2024` | ~13px | 400 | Левый нижний |
| Footer credit | `built with ♥ ROOTOVER AGENCY` | ~13px | 400 | Правый нижний, моноспейс |

---

## 📦 LAYOUT И РАЗМЕРЫ

### Глобальные параметры
- **Viewport при записи**: ~1350px широкий
- **Max-width контейнера**: примерно 1350px (нет заметных боковых отступов — контент edge-to-edge)
- **Навбар**: `position: fixed` (sticky), высота ~60px, фон белый с тонкой тёмной полосой сверху (~3px), `z-index` поверх всего контента
- **Секции**: `min-height: 100vh`, каждая занимает полный экран

### Структура product-секций (01–04)
```
[Левая колонка ~50% ширины]         [Правая колонка ~50% ширины]
 Номер секции (01)                   Фото продукта (PNG без фона)
 H2 заголовок
 Параграф описания
 CTA кнопки
```
При чётных секциях (02, 04) — **зеркальное расположение** (фото слева, текст справа).

### Фото продуктов
- Позиционированы абсолютно / с overflow, **выходят за правый край** viewport при первом появлении
- Занимают ~55–60% высоты viewport
- Без фона (PNG с прозрачностью или вырезанные)
- Лёгкая 3D-перспектива у каждого изображения (угол ~15–25°)

### Секция Why Choose
- Верхняя часть: фото техника (~860px широкое, высота ~400px), выровнено вправо, от края до края правой части
- Нижняя часть: **3 равных колонки** текстовых блока, gap ~40px

### Reviews карточки
- 2 карточки в ряд, каждая ~50% ширины
- Фон `#1A1A1A`, padding ~32px, border-radius ~8px или прямоугольные

### Логотипы Brands
- 6 плашек в ряд (+ скролл вправо — анимируются как бегущая строка)
- Каждая плашка: белый фон, border-radius ~12px, padding ~20px, высота ~90px

### Contact форма
- Горизонтальная строка: 3 инпута + кнопка SUBMIT в ряд
- Инпуты: подчёркнутый стиль (только bottom border), без рамки кругом
- SUBMIT: outlined-кнопка (border `1px solid #111`, фон прозрачный → чёрный)

---

## 🧩 КОМПОНЕНТЫ

### Навигация (Navbar)
```
[Тонкая тёмная полоска 3px top]
[HeatMaster]  [1.Furnace · 2.Heat Pump · 3.Boiler · 4.Radient · 5.Reviews · 6.Awards]  [{ GET A FREE ESTIMATE }]
```
- Фон: белый `#FFFFFF`
- Позиция: fixed top, full-width
- Верхняя полоска: ~3px тёмно-серый/чёрный `#222`
- Логотип: bold, левый край, ~20px отступ
- Меню: по центру, numbered items (1. Furnace, 2. Heat Pump…), separator — просто пробел
- CTA: правый угол, `{ GET A FREE ESTIMATE }`, monospace, uppercase, без фона

### CTA Кнопки (Ghost / bracket-style)
- Формат: `{ LABEL }` — фигурные скобки как часть текста
- Font: monospace uppercase
- Нет рамки, нет фона — чисто типографический элемент
- Hover: предположительно underline или opacity change (не видно в видео)

### SUBMIT кнопка (Contact)
- Outlined: `border: 1px solid #111111`, фон прозрачный
- Текст: `SUBMIT` uppercase monospace
- Ширина ~280px, высота ~50px
- Предположительно hover: инверсия (чёрный фон, белый текст)

### Карточки отзывов
- Фон: `#1A1A1A` (почти чёрный)
- Текст: белый
- Padding: ~32–40px
- Нет border-radius (или минимальный ~4px)
- Нет тени
- Имя автора: **bold**

### Карточки-логотипы (Brands)
- Фон: белый `#FFFFFF`
- Border-radius: ~12px
- Padding: ~20px 30px
- Высота: ~90px
- Тень: лёгкая `box-shadow: 0 2px 8px rgba(0,0,0,0.07)` или без тени
- Логотип внутри: object-fit contain

### Инпуты Contact формы
- Стиль: **underline only** — только `border-bottom: 1px solid #999`
- Фон: прозрачный (на сером фоне формы)
- Placeholder: тёмный текст `Your Name`, `Your Email`, `Your Phone Number`
- Нет border-radius, нет рамки кругом

---

## ✨ АНИМАЦИИ (ПОДРОБНО)

### 🎬 A. Hero — Intro (0:00–0:02)

**Слой 1 — Фото техника:**
- Начало: вне viewport справа (translateX ~+100%)
- Финал: позиция справа вверху, занимает ~50% ширины
- Тип: slide-in справа
- Длительность: ~1.5–2s
- Easing: ease-out (плавное торможение)

**Слой 2 — Текст HeatMaster (огромный):**
- Появляется снизу (translateY +100%)
- Движется вверх до финального положения
- Длительность: ~1s
- Начинается немного после фото (stagger ~0.3s)

**Слой 3 — `FAIRBANKS, AK, USA`, телефон, описание:**
- Fade-in + slight slide-up
- Stagger ~0.2s между элементами

**Слой 4 — `{ SCROLL DOWN }` (правый низ):**
- Появляется последним, fade-in
- После полной загрузки секции

---

### 🎬 B. Van Section — Parallax Scroll (0:02–0:05)

**Ключевая анимация — VAN двигается при скролле:**
- Фургон Mercedes-Benz HeatMaster с **branding** на борту
- Тёмно-серый/антрацитовый цвет кузова
- Фон секции: **тёмный** (~`#2A2A2A`) с диагональными полосами (дорога?)
- При скролле вниз: **фургон движется горизонтально влево** (parallax x-movement)
- Скорость движения фургона: примерно в 1.5–2× быстрее скорости скролла
- Направление: фургон "приезжает" справа и "уезжает" влево при прокрутке
- Текст наезда: белый, bold, слева, fade-in при входе в viewport
- Логотип на фургоне: `HeatMaster` крупно на борту + `+1 907-015-2126` под ним

**Диагональные полосы фона:** секция разрезана по диагонали — правый верхний угол светло-серый (`#D0CEC9`), левый нижний — тёмный (`#2A2A2A`)

---

### 🎬 C. Product Sections 01–04 — Scroll Reveal (0:05–0:17)

Каждая из 4 product-секций имеет **идентичный паттерн анимации:**

**Фото продукта:**
- Начальное состояние: вне экрана (справа или слева в зависимости от раскладки) + `scale(0.85)`
- Конечное состояние: в позиции + `scale(1.0)`
- Тип: **slide-in + scale-up** одновременно
- Триггер: когда секция входит в viewport на ~20%
- Длительность: ~0.8–1.2s
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out-quart ощущение)

**Номер секции (01, 02…):**
- fade-in
- Stagger: первым появляется номер

**H2 заголовок:**
- Slide-up из `translateY(40px)` + fade-in
- Stagger ~0.15s после номера

**Параграф:**
- То же, stagger +0.15s

**CTA кнопки:**
- То же, stagger +0.15s

**Переход между секциями:**
- Нет hard-cut, просто обычный scroll с плавными появлениями
- Фоновый цвет следующей секции начинается сразу под предыдущей (нет перекрытий)

---

### 🎬 D. Reviews Section (0:17–0:19)

- Рейтинги `GOOGLE-4.9/395` и `ANGI-5/245` — появляются через fade-in
- Заголовок `Hear from Our Satisfied Customers in Fairbanks` — slide-up
- Карточки отзывов (2 штуки): fade-in + slight slide-up
- Навигация `{ PREV }` `{ NEXT }` в правом верхнем углу блока карточек

---

### 🎬 E. Awards Section — ГЛАВНАЯ АНИМАЦИЯ (0:21–0:26)

**⭐ Это самая эффектная анимация сайта:**

**Шаг 1 (0:21–0:22):** Текст `Awards` занимает ~50% экрана, центрирован
**Шаг 2 (0:22–0:23):** Текст `Awards` начинает **увеличиваться (zoom-in)**
**Шаг 3 (0:23–0:24):** Текст растёт до ~200–250% от исходного размера, буквы выходят за пределы viewport — **заполняют весь экран чёрным**
**Шаг 4 (0:24–0:25):** Скролл продолжается — чёрный "экран" (буквы Awards) исчезает, открывая следующую секцию

**Параллельно — Badges (награды) вылетают из-за типографики:**
- Badge 1: `2023 PRESIDENTS AWARD (Carrier)` — вылетает из правой стороны буквы "s", движется справа-сверху → финальная позиция
- Badge 2: `Angi 2021 Super Service Award` (красный щит) — вылетает снизу-слева из буквы "A"  
- Badge 3: `American Standard 2023 Award` (синяя круглая печать) — снизу по центру
- Badge 4: `Angi 2022 Super Service Award` (сине-красный щит) — снизу-слева
- Все badges: **scale от 0 до 1** + **translate из-за буквы** во viewport
- Каждый badge на белой карточке с лёгкой тенью/blur эффектом фона
- Stagger между badges: ~0.3–0.5s
- Easing: `spring` / bounce (bounce в конце траектории)

**Техническая реализация вероятно:** 
`font-size` от ~200px → `scale(6)` + `overflow: hidden` на контейнере → badges позиционированы абсолютно относительно текста

---

### 🎬 F. Brands Marquee / Logo Scroll (0:28–0:32)

**Бегущая строка логотипов:**
- Ряд из 6+ логотипов движется горизонтально влево при скролле вниз
- Движение: **горизонтальный auto-scroll (marquee)** или **scroll-linked translation**
- Скорость: медленная, примерно 1px за 2px скролла
- Логотипы: Carrier, Bradford White, Navien, Mitsubishi Electric, Bosch, American Standard, York, Rheem, Weil-McLain, Viessmann
- При скролле первые логотипы уходят влево, новые появляются справа

---

### 🎬 G. Contact / Footer (0:32–0:38)

- Текст `Contact` — то же масштабирование что и `Awards` (zoom-in при скролле)
- Форма появляется снизу fade-in
- Footer появляется стандартно без анимации

---

## 🖼️ МЕДИА И ИЗОБРАЖЕНИЯ

| Изображение | Описание | Размер | Особенности |
|-------------|----------|--------|-------------|
| Техник в комнате | Мужчина в синей рубашке работает с HVAC системой, трубы, металлические воздуховоды | ~540×480px | Фото без фона (crop), верхний правый hero |
| Фургон Mercedes Sprinter | Тёмно-серый/антрацит, брендинг HeatMaster на боку, реалистичная 3D-render или retouched фото | Full-width секции | Parallax движение при скролле |
| Furnace (Rootover) | Серый вертикальный промышленный котёл с трубами, синий дисплей | ~460×540px | PNG без фона, угол ~20° |
| Heat Pump (Rootover) | Серый внешний блок кондиционера/теплового насоса | ~420×460px | PNG без фона, угол ~15° |
| Boiler (Rootover) | Серо-синий настенный котёл с трубами-коллектором, Roootover brand | ~420×500px | PNG без фона, угол ~20° |
| Radiant Floor | 3D cross-section напольного отопления: паркет + бетон + оранжевые трубы + теплоизоляция | ~480×380px | 3D рендер, изометрический угол |
| Техник на улице | Мужчина средних лет в чёрной рабочей рубашке идёт по пригороду, солнечный день | ~860×400px | Фото, object-fit cover |
| Award badges | Carrier 2023 Presidents Award, Angi 2021/2022 Super Service, American Standard 2023 | ~120–150px | PNG с прозрачным фоном, positioned absolutely |
| Brand logos | Carrier, Bradford White, Navien, Mitsubishi Electric, Bosch, American Standard, York, Rheem, Weil-McLain, Viessmann | ~120px wide | Оригинальные логотипы на белых карточках |

---

## 📍 СЕКЦИИ САЙТА (по порядку)

### Секция 0: Navbar (fixed, 0:00–0:38)
- **Фон:** белый, тонкая тёмная полоска сверху
- **Высота:** ~60px
- **Элементы:** `HeatMaster` logo | пункты меню с номерами | `{ GET A FREE ESTIMATE }`

---

### Секция 1: Hero (0:00–0:02)
- **Фон:** белый
- **Layout:** текст слева-снизу, фото техника справа-сверху, огромный `HeatMaster` typography поверх
- **Тексты:**
  - `FAIRBANKS, AK, USA` (uppercase, спейсинг, ~12px)
  - `HeatMaster` (~220px, weight 900, перекрывает всё)
  - `We are just a phone call away-` + `+1 907-015-2126` (bold)
  - Параграф описания справа (~16px, 5 строк)
  - `{ SCROLL DOWN }` правый низ

---

### Секция 2: Van / About (0:02–0:06)
- **Фон:** диагональный split — светлый сверху-справа / тёмный снизу-слева
- **Layout:** Фургон доминирует в центре (parallax), текст слева
- **Тексты:**
  - `At HeatMaster, we're always ready to deliver fast, reliable heating solutions when you need them most. Our team is dedicated to providing homeowners with top-quality service, combining decades of experience with a focus on efficiency and customer satisfaction. No matter the season, we're here to keep your home comfortable.`
  - `{ LEARN MORE }` `{ FREE ESTIMATE }`
- **Анимация:** фургон двигается при скролле влево

---

### Секция 3: Furnace Installation (0:06–0:08)
- **Фон:** `#F0ECEA` тёплый розово-бежевый
- **Layout:** текст слева, котёл справа
- **Тексты:**
  - `01`
  - `Furnace Installation, Repair, Maintenance`
  - Параграф описания
- **Медиа:** Серый промышленный котёл Rootover

---

### Секция 4: Heat Pump (0:08–0:10)
- **Фон:** `#E8E6E2` серо-бежевый
- **Layout:** котёл слева, текст справа
- **Тексты:**
  - `02`
  - `Expert Heat Pump Services in Fairbanks`
  - Параграф описания
- **Медиа:** Внешний блок теплового насоса Rootover

---

### Секция 5: Boiler (0:10–0:13)
- **Фон:** `#E6E8EA` холодный серый
- **Layout:** текст слева, котёл справа
- **Тексты:**
  - `03`
  - `Boiler Installation, Repair, Maintenance`
  - Параграф описания
- **Медиа:** Настенный котёл Roootover с трубами

---

### Секция 6: Radiant Floor (0:13–0:17)
- **Фон:** `#EDE9E4` кремово-бежевый
- **Layout:** 3D рендер слева (появляется справа), текст слева
- **Тексты:**
  - `04`
  - `Radiant Floor Heating Design and Installation`
  - Параграф описания
  - `{ SCHEDULE NOW }`
- **Медиа:** 3D cross-section изометрия напольного отопления

---

### Секция 7: Reviews (0:17–0:20)
- **Фон:** белый
- **Тексты:**
  - `GOOGLE-4.9/395    ANGI-5/245` (uppercase monospace, ~14px)
  - `Hear from Our Satisfied Customers in Fairbanks` (~48px bold)
  - `{ PREV }` `{ NEXT }` (навигация карточек, правый верх)
- **Карточки (2 шт):**
  - Тёмный фон `#1A1A1A`, белый текст
  - Отзыв 1: `"The radiant floor heating system installed by HeatMaster has been a game changer for my family. The team was knowledgeable and attentive, making sure everything was perfect."` — **Emily Davis**
  - Отзыв 2: `"HeatMaster transformed with their exceptional furnace installation service. The team was truly knew their stuff. I can enjoy a warm and cozy winter without any worries!"` — **Michael Johnson**

---

### Секция 8: Why Choose (0:19–0:22)
- **Фон:** белый
- **Layout:** H2 слева + фото техника справа (верхняя часть), 3 колонки текста (нижняя часть)
- **Тексты:**
  - `Why Choose HeatMaster for Your Heating Solutions?` (~48px bold)
  - Колонка 1: `Fast, Reliable, and Expert Service` + `Our team delivers quick, dependable heating services with honest, expert advice every step of the way.`
  - Колонка 2: `Heating-Focused Solutions, Anytime` + `We specialize exclusively in heating, providing tailored solutions whenever you need them, no matter the season.`
  - Колонка 3: `100% Satisfaction Guarantee` + `If you're not completely happy with our work, you don't pay—your satisfaction is our top priority.`

---

### Секция 9: Awards (0:21–0:26)
- **Фон:** белый
- **ГЛАВНАЯ ФИШКА:** Слово `Awards` zoom-in от ~200px до full-screen (буквы размером с весь viewport)
- **Badges вылетают** поверх типографики (4 штуки):
  - `2023 Presidents Award` (Carrier) — правый угол
  - `Angi Super Service Award 2021` — левый низ
  - `American Standard 2023 Award` — центр низ
  - `Angi Super Service Award 2022` — левый низ

---

### Секция 10: Brands (0:28–0:32)
- **Фон:** `#EBEBEB` светло-серый
- **Layout:** Заголовок вверху слева + горизонтальный marquee логотипов
- **Тексты:**
  - `HeatMaster Partners with the Best Brands to Deliver Top-Quality Heating Solutions for Fairbanks Homes and Businesses` (~42px bold, 3 строки)
- **Логотипы:** Carrier · Bradford White · Navien · Mitsubishi Electric · Bosch · American Standard · York · Rheem · Weil-McLain · Viessmann
- **Анимация:** бегущая строка влево при скролле

---

### Секция 11: Contact + Footer (0:32–0:38)
- **Фон заголовка:** белый
- **`Contact`** zoom-in аналогично `Awards`
- **Форма:** `#EBEBEB` фон, 3 инпута в ряд + SUBMIT
  - `Your Name` | `Your Email` | `Your Phone Number` | `SUBMIT`
- **Footer фон:** `#1C1C1C` тёмный
- **Footer колонки (5 шт):**
  - Quick Links: Home · About · Reviews · Awards · Brands · Contact
  - Services: Furnace · Heat Pump · Boiler · Radiant Floor Heating
  - Address: `2441 Hill Rd Suite C, Fairbanks, AK 99709, United States` + `See on Google Map`
  - Office Hours: `Sun-Fri ( 8AM-6PM )`
  - Contact: `+1 907-015-2126` · `hi@heatmaster.com` · `WhatsApp`
  - Follow us: Facebook · Instagram · LinkedIn · TikTok
- **Нижняя строка:** `Copyright HeatMaster 2024` | `built with ♥ ROOTOVER AGENCY`

---

## 🔁 СВОДКА АНИМАЦИЙ

| # | Секция | Тип анимации | Элемент | Триггер | Продолжительность |
|---|--------|-------------|---------|---------|-------------------|
| 1 | Hero | slide-in-right | Фото техника | page load | ~1.5s |
| 2 | Hero | slide-up | Текст HeatMaster огромный | page load +0.3s | ~1s |
| 3 | Hero | fade+slide-up stagger | Телефон, описание | page load +0.5s | ~0.8s |
| 4 | Van | parallax-x horizontal | Фургон | scroll | continuous |
| 5 | Furnace | slide-in+scale | Котёл PNG | scroll viewport | ~1s |
| 6 | Furnace | fade+slide-up stagger | 01, H2, body, CTA | scroll viewport | ~0.8s |
| 7 | Heat Pump | slide-in+scale | Котёл PNG | scroll viewport | ~1s |
| 8 | Heat Pump | fade+slide-up stagger | 02, H2, body | scroll viewport | ~0.8s |
| 9 | Boiler | slide-in+scale | Котёл PNG | scroll viewport | ~1s |
| 10 | Boiler | fade+slide-up stagger | 03, H2, body | scroll viewport | ~0.8s |
| 11 | Radiant | slide-in+scale | 3D floor PNG | scroll viewport | ~1s |
| 12 | Radiant | fade+slide-up stagger | 04, H2, body, CTA | scroll viewport | ~0.8s |
| 13 | Reviews | fade-in | Рейтинги, H2 | scroll viewport | ~0.6s |
| 14 | Reviews | fade+slide-up | 2 карточки | scroll viewport | ~0.8s |
| 15 | **Awards** ⭐ | **zoom-in scale text** | **"Awards" typography** | **scroll** | **~2–3s continuous** |
| 16 | **Awards** ⭐ | **fly-in from text + bounce** | **Badge cards (4 шт)** | **scroll stagger** | **~0.5s каждый** |
| 17 | Brands | marquee-left | Ряд логотипов | scroll | continuous |
| 18 | Contact | **zoom-in scale text** | **"Contact" typography** | **scroll** | **~1.5s** |

---

## 🤖 ПРОМТ ДЛЯ ВОСПРОИЗВЕДЕНИЯ

Используй этот промт напрямую в другой ИИ:

```
Создай одностраничный HVAC/отопительный лендинг в стиле HeatMaster (Fairbanks, Alaska).

ОБЩИЙ СТИЛЬ:
- Минималистичный, высококонтрастный (чёрно-белый + нейтральные бежево-серые тона)
- Акцентный цвет: НЕТ. Только оттенки от #FFFFFF до #111111
- Типографика: геометрический sans-serif (Inter/DM Sans) + monospace для кнопок/CTA

ЦВЕТА СЕКЦИЙ (сверху вниз):
#FFFFFF → #2A2A2A (van) → #F0ECEA → #E8E6E2 → #E6E8EA → #EDE9E4 → #FFFFFF (reviews/why) → #FFFFFF (awards) → #EBEBEB (brands) → #FFFFFF+#EBEBEB (contact) → #1C1C1C (footer)

TYPOGRAPHY-СИСТЕМА:
- Декоративные заголовки секций (Awards, Contact): font-size: clamp(150px, 18vw, 250px), font-weight: 900
- H1 Hero "HeatMaster": font-size: clamp(120px, 15vw, 220px), weight 900
- H2 секций: ~48-52px, weight 700
- Body: 16px, weight 400, line-height 1.6
- CTA кнопки: monospace, 13px, UPPERCASE, обёрнуты в фигурные скобки { LABEL }
- Лейблы/метки: uppercase monospace, letter-spacing: 0.1em

КЛЮЧЕВЫЕ АНИМАЦИИ (обязательно реализовать):
1. Hero: фото техника влетает справа, огромный текст HeatMaster появляется снизу
2. Van section: parallax - фургон движется горизонтально при скролле
3. Product sections (4 шт): PNG изображения продуктов влетают со стороны + scale-up при scroll
4. AWARDS SECTION: слово "Awards" zoom-in от обычного размера до full-viewport при скролле (буквы заполняют весь экран), одновременно award-badge карточки вылетают из-за букв с bounce-эффектом
5. Brands: горизонтальная бегущая строка логотипов

NAVBAR: fixed, белый, тонкая тёмная полоска сверху, лого слева, numbered menu в центре, CTA справа

СЕКЦИИ:
1. Hero: огромная типографика, фото техника, телефон +1 907-015-2126
2. Van: parallax фургон Mercedes Sprinter с брендингом
3-6. 4 продукта (Furnace/Heat Pump/Boiler/Radiant): split layout, PNG без фона, номера 01-04
7. Reviews: тёмные карточки на белом фоне, рейтинги GOOGLE/ANGI
8. Why Choose: фото + 3 колонки преимуществ
9. Awards: zoom-in typography + flying badges
10. Brands: marquee логотипов
11. Contact: форма в строку (3 инпута + submit)
12. Footer: 5-колоночный тёмный footer
```

---

*Документ создан автоматически с помощью site-video-extractor skill. Точность: высокая. Источник: 38-секундная screen-запись, 77 кадров проанализировано.*
