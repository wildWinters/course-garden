# Архітектура проєкту Course Garden

## Загальний огляд

**Course Garden** — це веб-додаток для створення та управління міні-курсами за допомогою AI. Проєкт побудований на **Next.js 15** з використанням **React 19**, **TypeScript**, **TailwindCSS** та **Zustand** для управління станом.

## Технологічний стек

### Frontend
- **Framework**: Next.js 15.5.2 (App Router)
- **UI Library**: React 19.1.0
- **TypeScript**: 5.9.2
- **Styling**: TailwindCSS 4, shadcn/ui компоненти
- **State Management**: Zustand 5.0.8
- **Forms**: React Hook Form + Zod валідація
- **HTTP Client**: ky 1.10.0
- **Internationalization**: i18next, react-i18next
- **Icons**: Lucide React
- **Authentication**: JWT (jsonwebtoken, jwt-decode)

### Backend
- **Runtime**: Node.js
- **Database**: Prisma ORM
- **Authentication**: bcrypt, JWT

### DevOps
- **Containerization**: Docker, Docker Compose
- **Testing**: Jest + React Testing Library
- **Code Quality**: Biome (linter + formatter)
- **Build Tool**: Turbopack

---

## Структура проєкту

```
course-garden/
├── app/                          # Next.js App Router (сторінки)
├── modules/                      # Feature-based модулі (бізнес-логіка)
├── shared/                       # Спільні ресурси
├── backend/                      # Backend API
├── public/                       # Статичні файли
├── example-page/                 # Приклад структури модуля
└── [config files]                # Конфігураційні файли
```

---

## Детальний опис структури

### 1. `/app` — Сторінки додатку (Next.js App Router)

Директорія містить маршрути додатку згідно з Next.js App Router:

```
app/
├── admin-page/                  # Адмін-панель управління курсами
├── my-courses-edit-user-admin-page/  # Редагування курсів користувача
├── home-screen-redesign-page/         # Редизайн головної сторінки
├── we-are-sorry-page/            # Сторінка помилки
├── layout.tsx                    # Головний layout з Header
├── page.tsx                      # Головна сторінка
├── providers.tsx                 # React Providers (Zustand, Context)
└── globals.css                   # Глобальні стилі
```

**Принцип роботи**:
- Кожна директорія в `app/` — це маршрут
- `layout.tsx` — спільний layout для всіх сторінок (Header, Footer)
- `page.tsx` — компонент самої сторінки
- `providers.tsx` — обгортає додаток провайдерами (Context, Store)

---

### 2. `/modules` — Feature-based модулі

**Feature-Sliced Design**: кожна функціональність винесена в окремий модуль.

#### Структура модуля (приклад `edit-course-admin-page/`):

```
modules/
├── edit-course-admin-page/
│   ├── _/                        # Експорт модуля (index.ts)
│   ├── headings/                 # Заголовки і навігація
│   │   ├── components/           # React компоненти
│   │   ├── constant/             # Константи
│   │   └── mock/                 # Мок-дані
│   ├── edit-course-card/         # Картка редагування курсу
│   │   ├── components/           # React компоненти
│   │   ├── mock/                 # Мок-дані
│   │   └── edit-course-card-wrapper.tsx  # Обгортка модуля
│   └── ...
├── global/                       # Глобальні модулі (хуки, стор)
│   ├── components/               # Загальні компоненти
│   ├── hooks/                    # Кастомні хуки
│   └── store/                    # Zustand стори
├── main-page/                    # Модуль головної сторінки
│   ├── modal-form-sign-in-or-up/ # Модалка авторизації
│   ├── modal-forgot-password/    # Модалка відновлення паролю
│   └── ...
├── my-courses-admin-page/        # Модуль "Мої курси"
└── not-found-page/               # Сторінка 404
```

**Принципи організації модулів**:
- Кожен модуль — це окрема feature (функціональність)
- Модуль містить: `components/`, `hooks/`, `store/`, `mock/`, `constants/`
- `_/` директорія — для експорту (index файлів)
- Обгортка модуля (`*-wrapper.tsx`) — головний компонент
w
---

### 3. `/shared` — Спільні ресурси

Спільні компоненти, утиліти, типи, які використовуються в усьому додатку.

```
shared/
├── constants/                    # Глобальні константи
├── i18n/                         # Інтернаціоналізація (переклади)
├── lib/                          # Утиліти та хелпери
├── mock/                         # Мок-дані
├── shad-cn/                      # shadcn/ui компоненти
│   └── ui/                       # Button, Input, Dialog, тощо
├── store/                        # Глобальні Zustand стори
├── types/                        # TypeScript типи та інтерфейси
├── ui/                           # Кастомні UI компоненти
├── utils/                        # Утиліти (cn, форматери)
└── widgets/                      # Великі переісні компоненти
    ├── aside-panel/              # Бокова панель
    ├── custom-modal/             # Кастомна модалка
    ├── header/                   # Шапка сайту
    ├── pagination/               # Пагінація
    └── table/                    # Таблиця
```
**Widgets vs Components**:
- **Widgets** — великі складні компоненти (Header, Modal, Sidebar)
- **Components** — маленькі переісні компоненти (Button, Input)

---

### 4. `/backend` — Backend API

```
backend/
├── src/
│   ├── routes/                   # API маршрути
│   ├── controllers/              # Контролери
│   ├── services/                 # Бізнес-логіка
│   └── prisma/                   # Prisma схема та міграції
├── Dockerfile                    # Docker для бекенду
├── package.json                  # Залежності Node.js
└── tsconfig.json                 # TypeScript конфігурація
```

---

## Архітектурні принципи

### 1. **Feature-Sliced Design**

Кожна функціональність — окремий модуль в `/modules`:
- ✅ **Ізоляція**: модулі не залежать один від одного
- ✅ **Масштабованість**: легко додавати нові features
- ✅ **Читабельність**: зрозуміла структура проєкту

### 2. **Composition над Inheritance**

Компоненти складаються з маленьких блоків:
```tsx
<DesktopHeader>
  <HeaderLogo />
  <HeaderLinks />
  <HeaderUserRightPanel />
</DesktopHeader>
```

### 3. **Single Responsibility Principle**

Кожен компонент / функція має **одну відповідальність**:
- `HeaderLogo` — тільки логотип
- `HeaderLinks` — тільки навігація
- `HeaderUserRightPanel` — тільки панель користувача

### 4. **Props drilling та Children pattern**

Використовуємо `children` для композиції:
```tsx
export function EditCourseHeading({ children, className }: IBaseProps) {
  return (
    <div className={cn("w-full flex justify-between", className)}>
      <div>...</div>
      {children}
    </div>
  );
}
```

---

## Стандарти коду (code-style.txt)

### Компоненти
1. **Function Components** (не FC)
   ```tsx
   export function MyComponent({ prop }: Props) { }
   ```

2. **Arrow functions** для handlers/utils (не для компонентів)
   ```tsx
   const handlerClick = () => { }
   ```

3. **Не використовувати**: `FC`, `forwardRef`

### Іменування
- **Handlers**: починаються з `handler` (`handlerSubmit`, `handlerClick`)
- **Types**: `TName` (наприклад, `TUser`)
- **Interfaces**: `IName` (наприклад, `IBaseProps`)
- **Props**: `Props` для компонентів (наприклад, `EditCourseHeadingProps`)

### State Management
- **Zustand** — для бізнес-логіки та локального стану
- **Context** — для глобального стану (теми, auth)

### Валідація
- **Zod** + **React Hook Form** для форм

### Принципи
1. **Single Responsibility Principle**
2. **Open/Closed Principle**
3. **Малі інтерфейси** (не більше 5 ключів)
4. **Не писати значення напряму** — виносити в константи

---

## State Management

### Zustand (Local State)

Використовується для локального стану модулів:

```tsx
// modules/my-courses-admin-page/store/useMyCourseStore.ts
import { create } from 'zustand';

export const useMyCourseStore = create((set) => ({
  courses: [],
  loading: false,
  fetchCourses: async () => {
    set({ loading: true });
    // fetch logic
    set({ courses: data, loading: false });
  },
}));
```

### Context (Global State)

Використовується для глобального стану (auth, theme):

```tsx
// app/providers.tsx
<Providers>
  <AuthProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </AuthProvider>
</Providers>
```

---

## Routing

### Next.js App Router

- Файловий роутинг: `app/admin/page.tsx` → `/admin`
- Динамічні маршрути: `app/course/[id]/page.tsx` → `/course/123`
- Layouts: спільний layout для груп сторінок

---

## Стилізація

### TailwindCSS + shadcn/ui

- **Utility-first CSS**: `className="flex items-center gap-4"`
- **shadcn/ui**: готові компоненти (Button, Input, Dialog)
- **cn() helper**: умовне об'єднання класів
  ```tsx
  import { cn } from "@/shared/lib/utils";
  
  <div className={cn("base-class", isActive && "active-class")} />
  ```

---

## API та HTTP

### ky (HTTP Client)

```tsx
import ky from 'ky';

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

const courses = await api.get('courses').json();
```

---

## Інтернаціоналізація (i18n)

### i18next + react-i18next

```tsx
import { useTranslation } from 'react-i18next';

export function Component() {
  const { t } = useTranslation();
  
  return <h1>{t('welcome.title')}</h1>;
}
```

Переклади знаходяться в `shared/i18n/`.

---

## Тестування

### Jest + React Testing Library

```tsx
// __tests__/example.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

**Команди**:
- `npm test` — запустити тести
- `npm run test:watch` — watch режим
- `npm run test:coverage` — покриття коду

---

## Docker та Deployment

### Docker Compose

```yaml
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
  
  backend:
    build: ./backend
    ports:
      - "4000:4000"
```

**Команди**:
- `docker-compose up` — запуск всього стека
- `docker-compose up frontend` — тільки frontend

---

## Найкращі практики

### 1. Організація файлів
```
feature/
├── components/     # UI компоненти
├── hooks/          # Кастомні хуки
├── store/          # Zustand стори
├── constants/      # Константи
├── mock/           # Мок-дані
├── types/          # TypeScript типи
└── index.ts        # Експорт модуля
```

### 2. Іменування файлів
- **Компоненти**: `PascalCase.tsx` (`HeaderLogo.tsx`)
- **Хуки**: `camelCase.ts` (`useAuth.ts`)
- **Утиліти**: `camelCase.ts` (`formatDate.ts`)
- **Константи**: `UPPER_SNAKE_CASE` в `kebab-case.ts` файлах (`con-links.ts`)

### 3. Imports
```tsx
// Спочатку зовнішні залежності
import React from 'react';
import { Button } from '@/shared/shad-cn/ui/button';

// Потім внутрішні модулі
import { useAuth } from '@/modules/auth';

// Потім локальні файли
import { MyComponent } from './MyComponent';
```

### 4. TypeScript
- Завжди типізувати Props
- Використовувати `interface` для об'єктів
- Використовувати `type` для unions та primitives

### 5. Performance
- Використовувати `React.memo()` для важких компонентів
- Lazy loading для великих модулів
- Dynamic imports для модалок та не критичних компонентів

---

## Workflow розробки

### 1. Створення нового модуля

```bash
modules/
└── new-feature/
    ├── _/
    │   └── index.ts
    ├── components/
    │   └── NewFeatureComponent.tsx
    ├── hooks/
    │   └── useNewFeature.ts
    ├── store/
    │   └── useNewFeatureStore.ts
    └── new-feature-wrapper.tsx
```

### 2. Додавання нової сторінки

```bash
app/
└── new-page/
    ├── page.tsx
    └── layout.tsx (опціонально)
```

### 3. Додавання нового API endpoint

```bash
backend/src/
└── routes/
    └── newRoute.ts
```

---

## Troubleshooting

### Поширені проблеми

1. **Module not found**
   - Перевірте `tsconfig.json` paths
   - Перевірте правильність імпортів (`@/`)

2. **Hydration errors**
   - Перевірте, чи немає різниці між SSR та CSR
   - Використовуйте `'use client'` для клієнтських компонентів

3. **Zustand not updating**
   - Перевірте, чи правильно використовується `set()`
   - Не мутуйте стан напряму

---

## Корисні команди

```bash
# Розробка
npm run dev              # Запуск dev сервера

# Тестування
npm test                 # Запуск тестів
npm run test:watch       # Watch режим
npm run test:coverage    # Покриття коду

# Code Quality
npm run lint             # Biome lint
npm run format           # Biome format

# Build
npm run build            # Production build
npm start                # Запуск production
```

---

## Додаткові ресурси

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Zustand Docs**: https://zustand-demo.pmnd.rs
- **shadcn/ui**: https://ui.shadcn.com
- **TailwindCSS**: https://tailwindcss.com

---

## Контакти та підтримка

Для питань щодо архітектури або розробки зверніться до команди розробників.
ostapkreminets225@gmail.com
---

**Версія документації**: 1.0  
**Дата оновлення**: 2024  
**Автор**: Course Garden Team
