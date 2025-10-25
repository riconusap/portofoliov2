# Layout System - Default Layout Architecture

## Overview
Project ini sekarang menggunakan **Default Layout Pattern** untuk struktur halaman yang lebih modular dan maintainable.

## Folder Structure

```
src/
├── layouts/
│   └── DefaultLayout.vue       # Layout wrapper dengan Header & Footer
├── views/
│   ├── HomePage.vue            # Halaman utama (/)
│   └── AllProjects.vue         # Halaman semua project (/projects)
├── components/
│   ├── Header.vue              # Navigation bar
│   ├── Footer.vue              # Footer
│   ├── Hero.vue                # Hero section
│   ├── Skills.vue              # Skills section
│   ├── Experience.vue          # Experience section
│   ├── About.vue               # About section
│   ├── Projects.vue            # Projects section (3 latest)
│   ├── Testimonials.vue        # Testimonials carousel
│   └── Contact.vue             # Contact form
├── data/
│   └── projects.ts             # Centralized project data (10 projects)
├── router.ts                   # Vue Router configuration
└── App.vue                     # Root component (router-view only)
```

## Architecture Pattern

### 1. **App.vue** - Root Component
```vue
<template>
  <router-view />
</template>
```
- Hanya berisi `<router-view>` untuk render route components
- Tidak ada logic atau styling
- Clean separation of concerns

### 2. **DefaultLayout.vue** - Layout Wrapper
```vue
<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <slot />  <!-- Page content here -->
    </main>
    <Footer />
  </div>
</template>
```
- Shared layout untuk semua halaman
- Header dan Footer otomatis muncul di setiap page
- Content di-inject via `<slot>`

### 3. **Views** - Page Components

#### HomePage.vue
```vue
<template>
  <DefaultLayout>
    <Hero />
    <Skills />
    <Experience />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
  </DefaultLayout>
</template>
```
- Route: `/`
- Menampilkan all sections
- Projects: 3 terbaru saja (berdasarkan year)

#### AllProjects.vue
```vue
<template>
  <DefaultLayout>
    <section class="py-16 bg-black text-white min-h-screen">
      <!-- 10 projects, sorted by year -->
    </section>
  </DefaultLayout>
</template>
```
- Route: `/projects`
- Menampilkan semua 10 projects
- Grid layout (responsive)

### 4. **Router Configuration**
```typescript
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomePage.vue'),
  },
  {
    path: '/projects',
    name: 'AllProjects',
    component: () => import('./views/AllProjects.vue'),
  },
]
```
- Lazy loading dengan dynamic imports
- Named routes untuk easy navigation
- Clean URL structure

## Benefits

### ✅ **Separation of Concerns**
- Layout logic terpisah dari page content
- Header/Footer tidak perlu import di setiap page
- Easy to maintain

### ✅ **Code Reusability**
- DefaultLayout bisa digunakan untuk semua pages
- Bisa buat layout lain (AdminLayout, AuthLayout, etc) jika perlu
- DRY principle

### ✅ **Scalability**
- Mudah tambah page baru
- Tinggal wrap dengan DefaultLayout
- Routing management yang clean

### ✅ **Performance**
- Lazy loading pages
- Code splitting automatic
- Faster initial load

### ✅ **Developer Experience**
- Clear folder structure
- Easy to navigate codebase
- Intuitive component hierarchy

## Data Flow

### Projects Data
```
src/data/projects.ts (10 projects)
        ↓
    ┌───┴───┐
    ↓       ↓
HomePage    AllProjects
(3 latest)  (all 10)
```

- **Single Source of Truth**: `src/data/projects.ts`
- **HomePage**: Filter top 3 by year
- **AllProjects**: Show all, sorted by year
- **Easy Maintenance**: Edit once, reflected everywhere

## Navigation Flow

```
HomePage (/)
    ↓
Section: Projects
    ↓
Button: "View More"
    ↓
AllProjects (/projects)
```

User journey:
1. Land on home page
2. See 3 featured projects
3. Click "View More" button
4. Navigate to `/projects`
5. See all 10 projects in grid

## Future Enhancements

### Additional Layouts
```typescript
// src/layouts/
├── DefaultLayout.vue      // Current
├── AdminLayout.vue        // Admin panel
├── AuthLayout.vue         // Login/Register
└── BlankLayout.vue        // No header/footer
```

### Meta Information
```typescript
{
  path: '/projects',
  name: 'AllProjects',
  component: () => import('./views/AllProjects.vue'),
  meta: {
    title: 'All Projects',
    layout: 'default'
  }
}
```

### Layout Switching
```vue
<component :is="layout">
  <router-view />
</component>
```

## Usage Example

### Creating New Page

1. **Create View Component**
```vue
<!-- src/views/AboutPage.vue -->
<template>
  <DefaultLayout>
    <section class="py-16">
      <!-- Your content -->
    </section>
  </DefaultLayout>
</template>
```

2. **Add Route**
```typescript
{
  path: '/about',
  name: 'About',
  component: () => import('./views/AboutPage.vue'),
}
```

3. **Done!** Header & Footer automatic!

## Best Practices

### ✅ DO
- Use DefaultLayout for all standard pages
- Keep page-specific logic in view components
- Use semantic HTML in layouts
- Leverage slots for flexibility

### ❌ DON'T
- Don't duplicate Header/Footer in views
- Don't put page content in layouts
- Don't mix routing logic in components
- Don't hardcode data in views

## Testing

### Development
```bash
npm run dev
```
- Visit: `http://localhost:5174/`
- Test navigation: Home → Projects
- Check responsive layout

### Production Build
```bash
npm run build
npm run preview
```

---

*Architecture Pattern: Default Layout*
*Vue 3 Composition API + Vue Router 4*
*Last Updated: October 2025*
