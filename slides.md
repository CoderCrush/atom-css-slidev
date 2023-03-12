---
transition: fade-out
---
### [UnoCSS](https://uno.antfu.me/) ###
2021-10
<br>

- 具有高性能且极具灵活性的即时原子化 CSS 引擎。
- **UnoCSS** 是一个引擎，而非一款框架，因为它并未提供核心工具类，所有功能可以通过预设和内联配置提供。
- 没有解析，没有 AST，没有扫描，它是**即时**的（比 Windi CSS 或 Tailwind JIT 快 5 倍）。

<br>

### [Fower](https://fower.vercel.app) ###
2020-10
<br>

- Fower 是一个高效开发 UI 的样式工具库，目标是让写 CSS 不再痛苦。Fower 的核心特点是**原子化**(Atomic/utility-first)、**[类型安全](https://fower.vercel.app/zh-cn/docs/typescript)**(Type Safe)、**CSS in JS**，它非常注重开发体验，让用户快速且开心的开发界面。
- 不依赖任何框架，可与React，Vue，React native，小程序等框架一起使用

---
transition: slide-up
---

## 原子化CSS的使用

我们将以 `Unocss` 为例，实现一个 [Twitter](https://twitter.com/home) 首页布局效果，在基础上添加更换主题、暗夜模式功能

技术栈：`Vite`、 `nuxt` 、`unocss`

1、初始化一个nuxt项目

```node
npm init nuxt-app atom-css
```

2、引入`Unocss`

```node
npm i -D @unocss/nuxt
```

```js
// nuxt.config.js
export default {
  ...
  modules: [
    '@unocss/nuxt',
  ],
  ...
}
```

---
transition: slide-up
---

3、配置unocss

```js
// unocss.config.js
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [ // 预设
    presetUno(), // unocss预设
    presetAttributify(), // 支持属性写法
  ],
  transformers: [ // 预处理
    transformerDirectives(), // 可以把css写成js文件并且可以直接获取到css
    transformerVariantGroup(),
  ],
})

```

添加`Tailwind CSS IntelliSense`、`unocss`vscode插件

---
transition: slide-up
---

4、初始化页面布局

```html
// layouts/default.vue
<template>
  <div h-full>
    <main flex w-full mxa max-w-80rem>
      <!-- 左侧边栏 -->
      <aside flex justify-end relative>
        <div sticky top-0 w-20 h-screen flex="~ col">
          Aside Left
        </div>
      </aside>
      <div w-full min-h-screen border-base>
        <div min-h="[calc(100vh-3.5rem)]" min-w-500px>
          <slot />
        </div>
      </div>
      <!-- 右侧边栏 -->
      <aside>
        <div sticky top-0 h-screen w-600px>
          Aside Right
        </div>
      </aside>
    </main>
  </div>
</template>
```

---
transition: slide-up
---

5、添加响应式效果并抽离组件

```html
<template>
  <div h-full>
    <main flex w-full mxa lg:max-w-80rem>
      <!-- 侧边栏 -->
      <aside hidden lg:block class="w-1/8 md:w-1/6 lg:w-1/5 xl:w-1/4 zen-hide" sm:flex justify-end xl:me-4 native:me-0 relative>
        <div sticky top-0 w-20 xl:w-100 h-screen flex="~ col" lt-xl-items-center>
          <div flex="~ col" overflow-y-auto justify-between h-full max-w-full overflow-x-hidden>
            <NavTitle />
            <NavSide />
          </div>
        </div>
      </aside>
      <div w-full min-h-screen border-base>
        <div min-h="[calc(100vh-3.5rem)]" sm:min-h-screen min-w-500px>
          <slot />
        </div>
      </div>
      <!-- 右侧边栏 -->
      <aside class="native:w-full">
        <div sticky top-0 h-screen min-w-300px>
          <ThemeSetting />
        </div>
      </aside>
    </main>
  </div>
</template>
```

---
transition: slide-up
---

```html
<!-- components/NavTitle.vue -->
<template>
  <div flex justify-between sticky top-0 bg-white z-1 py-4 native:py-7 data-tauri-drag-region>
    Twitter
  </div>
</template>
```

```html
<!-- components/NavSide.vue -->
<template>
  <nav sm:px3 flex="~ col gap2" shrink text-size-base leading-normal md:text-lg h-full mt-1>
    <template v-for="i in 40" :key="i">
      <NavSideItem>
        NavSideItem{{ i }}
      </NavSideItem>
    </template>
  </nav>
</template>
```

```html
<!-- components/ThemeSetting.vue -->
<template>
  <div>
    ThemeSetting
  </div>
</template>
```

---
transition: slide-up
---

```html
<!-- components/NavSideItem.vue -->
<template>
  <div
    flex items-center gap4
    w-fit rounded-3
    px2 py2 mx3 sm:mxa
    xl="ml0 mr5 px5 w-auto"
    transition-100
  >
    <div hidden sm:block>
      logo
    </div>
    <slot />
  </div>
</template>
```

---
transition: slide-up
---

6、添加主题切换功能

```ts
// nuxt.config.ts
...
css: [
  ...
  '~/styles/theme.css'
]
...
```

```css
/* styles/global.css */
html,
body,
#__nuxt {
  height: 100vh;
  color: var(--c-primary);
  border-color: var(--c-border);
}
```

```css
/* styles/theme.css */
:root {
  --c-border: #eee;
  --c-primary: black;
}
```

---
transition: slide-up
---

```ts
<script lang="ts" setup>
// components/ThemeSetting.vue
const colors = ['black', 'green', 'blue', 'red']
const handleToggleTheme = (c: string) => {
  ['--c-primary', '--c-border'].forEach((key) => {
    document.documentElement.style.setProperty(key, c)
  })
}
</script>
```

```html
<template>
  <!-- components/ThemeSetting.vue -->
  <div>
    <div border="~ 5
      ThemeSetting
    </div>
    <div class="flex space-x-2">
      <div v-for="(c, i) in colors" :key="i" w-6 h-6 rounded-full cursor-pointer :style="{ background: c }" @click="handleToggleTheme(c)" />
    </div>
  </div>
</template>
```

---
transition: slide-up
---

若遇到border-color这种无法继承的属性，可配置shortcuts处理主题效果

```ts
// unocss.config.ts
{
  shortcuts: [
    {
      'bg-border': 'border-$c-border',
    },
  ]
}
```

```ts
// nuxt.config.ts
{
  css:[
    ...
    '~/styles/var.css' // 添加var.css
  ]
}
```

```css
/* styles/var.css */
:root {
  --c-border: #eee;
}
```

---
transition: slide-up
---

7、添加暗夜模式

```html
<!-- ThemeSetting.vue -->
<template>
  <!-- ... -->
    <div cursor-pointer @click="handleToggleDark">
    {{ isDark ? 'light' : 'dark' }}
    </div>
  </div>
</template>
```

```ts
<script>
const isDark = ref(false)
const handleToggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.className = isDark.value ? 'dark' : ''
}
// ...
</script>
```

```html
<!-- layouts/default.vue -->
<template>
  <div class="dark:color-white dark:bg-black" h-full>
    <!-- ... -->
</template>
```