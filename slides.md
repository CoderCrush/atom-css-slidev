---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

<style>

.dashed {
  @apply inline-block w-full mx-10 translate-y-1/2 border-t border-gray-200 border-dashed;
}


</style>

# Atomic CSS

<div class="abs-tl m-6">
前端技术分享
</div>

<div class="abs-tr m-6">
  <a href="https://cn.sli.dev/" target="_blank">Slidev</a>
</div>


原子化 CSS

<div class="pt-1">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Next <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  Crush
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# 目录
<br>
<v-clicks>
  <div mb-3 text-5>
    <span>一、什么是原子化 CSS?</span>
  </div>
  <div mb-3 text-5>
    <span>二、原子化CSS在各大网站中的应用</span>
  </div>
  <div mb-3 text-5>
    <span>三、原子化CSS的使用</span>
  </div>
  <div mb-3 text-5>
    <span>四、原子化CSS的利与弊</span>
  </div>
  <div mb-3 text-5>
    <span>五、原子化CSS的实现</span>
  </div>
</v-clicks>

---
transition: slide-up
---

# 一、什么是原子化 CSS?
<br>


John Polacek 在 文章  <a href="https://css-tricks.com/lets-define-exactly-atomic-css/" target="_blank">Let’s Define Exactly What Atomic CSS is</a> 中写道：

> Atomic CSS is the approach to CSS architecture that favors small, single-purpose classes with names based on visual function.

译文：原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。

<p class="text-2">
CSS 本身就是一个不强调逻辑，而更侧重表现的一门所见即所得的语言。
当样式写多了，就会发现常用样式的来来去去也就那几个，无非就是调整一下他们的排列组合。
每次写这些重复的样式代码就感觉自己是在重复造轮子，自然而然就产生了想要缩写的需求，
而 `原子化 CSS` 做的一些事情很平常，无非就是把 `CSS` 属性写成一个独立的类名。
</p>

<div class="text-4">有些人可能会称其为函数式 CSS，或者 CSS 实用工具。本质上，你可以将原子化的 CSS 框架理解为这类 CSS 的统称：</div>

```css
.m-0 {
  margin: 0;
}
.text-red {
  color: red;
}
```

<br>
<br>

---
transition: slide-up
---

<section class="text-4">  
类似 “原子化css” 的概念其实很早之前就有，比如 Bootstrap 的 css 工具类已经非常接近现在的 原子化css 框架提供的功能。
</section>

<br>

```html
// html
...
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
...
<div class="d-flex mb-3">
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
</div>
...
```

```css
/* css  */
.d-flex {
  display: flex !important;
}
.mb-3{
  margin-bottom: 1rem !important;
}
.p-2{
  padding: .5rem !important;
}
```

---
transition: slide-up
---

<section class="text-4 leading-5">

类似 “原子化CSS” 的几大痛点：

1. 随UI框架自带，作为UI框架的补充，不适合单独使用；
2. 覆盖的范围不够全面，不支持自定义拓展；
3. 不支持动态生成css，打包后文件过大

而现在的“原子化”实际上也并不是只对应单条的css属性，更像是一种功能上的原子化：
</section>

<br>

```html
// html
<div class="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s hover:text-red">
  原子化 CSS
</div>
```

下面让我们看一下上诉代码所呈现的效果：

<br>

<div v-click class="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s hover:text-red">
  原子化 CSS
</div>

---
transition: slide-up
---

# 二、各大网站中原子化CSS的应用

[GitHub](https://github.com/)

![GitHub](/img/github.png)

---
transition: slide-up
---

[Twitter](https://twitter.com/)

![Twitter](/img/twitter.png)

---
transition: fade-out
---

[FaceBook](https://www.facebook.com/)

[顺便提一下，Facebook首页采用原子化CSS重构减少了80%的代码体积](https://engineering.fb.com/2020/05/08/web/facebook-redesign/)
![Facebook](/img/facebook.png)

---
transition: slide-up
---

## 相关CSS框架

<br>

<div flex items-center>
  <a mr-10 href="https://tailwindcss.com/" class="text-xl" target="_blank">1、Tailwind CSS</a>
  <div flex h-4 items-start>
    <a mr-3 class="border-none!" href="https://github.com/tailwindlabs/tailwindcss" target="_blank"><pajamas:github w-4 h-4 class="align-revert" /></a>
    <img h-4 translate-y-4px src="https://img.shields.io/github/stars/tailwindlabs/tailwindcss">
  </div>
</div>

<p class="text-sm">
Tailwind CSS 是一个基于原子类的 CSS 框架，它允许你通过一系列预定义的类来快速构建自定义的用户界面。Tailwind CSS 的设计理念是将常见的样式组合成简单的类，从而提高代码的可读性和可维护性，并减少样式冗余。

使用 Tailwind CSS 可以减少你手写 CSS 的工作量，因为你不需要编写样式，而只需要在 HTML 元素中添加相应的类即可。Tailwind CSS 提供了一系列类，涵盖了排版、颜色、背景、边框、尺寸、间距、阴影、动画等方面的样式，而这些类可以根据自己的需要组合使用，创建自定义的样式。

另外，Tailwind CSS 还提供了一些有用的工具类，例如响应式类、hover 类、focus 类等，可以帮助你轻松地创建出各种不同的样式和效果。

Tailwind CSS 可以与各种前端框架和工具一起使用，包括 React、Vue、Angular、Next.js、Gatsby 等。它还提供了强大的自定义功能，可以让你根据自己的需求修改或扩展默认的样式配置。
</p>

如今tailwind已经迭代到3.2.7版本，发展的已经非常成熟了，文档非常完善，社区支持也非常强大。

以下将简单介绍一下tailwind的发展史：

---

1. 2017年11月，Adam Wathan 首次发布了 Tailwind CSS 的 0.1.0 版本，这是一个基于原子类的 CSS 样式框架，旨在提供一种更快、更灵活的开发方式。
2. 2019年4月，Tailwind CSS 1.0.0 版本发布, 增加了更多的预定义类名、引入了响应式设计、改进了插件系统。
3. 2021年2月，Tailwind CSS 2.0.0 版本发布。
   - 支持 Dark Mode、新的 Plugin API、新的 Extend API。
   - 在v2.1.0版本加入JIT（Just-In-Time）根据实际使用情况动态生成 CSS 类，而不是在编译时生成所有可能的类。
   - JIT 模式还允许使用更灵活的语法来生成样式，比如使用变量作为类名的一部分、支持动态响应式和支持 Dark Mode 等。
4. 2022年8月，Tailwind CSS 3.0.0 版本发布。
   - 加入了对动态类名的支持，这意味着可以在类名中使用动态的 JavaScript 表达式，使得 Tailwind 更加灵活，同时也提高了性能，因为它只会编译您实际使用的类名。
   - 发挥 CDN 的作用，新的 JIT 引擎被集成到 CDN 脚本中，直接在浏览器中运行。
   - 新的主题功能、新的调色板和颜色函数、更丰富的动画功能、更好的布局支持。

---
transition: slide-up
---

<div flex items-center>
  <a mr-10 href="https://windicss.org/" class="text-xl" target="_blank">2、Windi CSS</a>
  <div flex h-4 items-start>
    <a mr-3 class="border-none!" href="https://github.com/windicss/windicss" target="_blank"><pajamas:github w-4 h-4 class="align-revert" /></a>
    <img h-4 translate-y-4px mr-5 src="https://img.shields.io/github/stars/windicss/windicss">
    <a href="https://windicss.org/play.html?html=DwEwlgbgfAUABHUk4GMA2BDAzlgvAIgBcBTAD0IFoBWUtOAMwHcBGABlbgwDswBbDEhQBGAewCuXFMU49%2BglOK6UwXeirAkZfAcQogxAJwFgRXCqwB0AZixwAFiIjEDALm7bBWAA4r8sBAiA%2BcqACtqAaMpwAMIAylHwiAD04NAwwImQUEA&css=AIawpgngZgTghgWzAZwAQCMD2BXAdgYzFQG8AoVVABgFIAaVARkppPItQBd5dkpMYEALk7dkAGzgcwATQAUAWgBMAVmoBKANxsKcXAEsEkvZlzyOBvbgDm8qHnzmTw-NnR7889GABeesDFlKADoADnpKegZIzTYAXzZlFjJ2EV1efiFUngkpOUoYlN0DIxMzC2tbe0dcZ1d3Tx8-AIiqcKDFaK0KeNigA" target="_blank">play</a>
  </div>
</div>
<br>

<p class="text-sm">
Windi CSS 是一个类似于 Tailwind CSS 的库，但它更加轻量级和快速，并且可以与 Vue.js 框架无缝集成。

提供了类似于 Tailwind CSS 的原子类式 API，但它只包含了大约 200 个类，相比于 Tailwind CSS 的数千个类要少得多。这使得 Windi CSS 更加轻量级和快速，同时可以减少你在编写 CSS 时的选择犹豫。

另外，Windi CSS 还支持根据项目需求进行自定义配置。你可以通过简单地修改 Windi CSS 的配置文件，轻松地增加或删除类别和类，或者根据项目需求添加自己的类别和类。

与 Tailwind CSS 不同的是，Windi CSS 专注于与 Vue.js 框架集成。它提供了一个可选的 Vue.js 插件，可以让你在 Vue.js 组件中轻松地使用 Windi CSS，同时还提供了一些有用的 Vue.js 相关的工具类。
</p>

发展历程：

  1. Windi CSS 1.x：
     - Windi CSS 的第一个版本发布于 2020 年 2 月。这个版本主要关注基础样式和类似于 Tailwind CSS 的设计模式，例如边框、圆角和字体等。它也引入了一些新的实用类，例如 gap 和 place-items 等。另外，Windi CSS 1.x 还提供了一些内置的插件，如  @apply、@screen 和 @variants 等。

---

  2. Windi CSS 2.x：
     - Windi CSS 2.x 在 2020 年 8 月发布。主要改进了编译器和插件系统。编译器的重构使得编译速度更快，同时提供了更好的错误处理。
  3. Windi CSS 3.x：
     - Windi CSS 3.x 是目前最新的版本，于 2021 年 4 月发布。它引入了 JIT（Just-In-Time）编译模式，这种编译方式可以显著提升编译速度。

<br>

>   那么，我认为现在应该谈谈我为什么正在做这个项目。—— Windi CSS 作者 satireven<br><br>
使用 Tailwind 进行前端开发的体验一直很好。我尝试过其他前端框架，但我遇到 Tailwind 之后，我便没再换过它。Tailwind 的组件化是最吸引我的部分。你可以轻松实现 HTML 组件，并与其他组件共享，你懂的。<br><br>
但是当我把 sapper 和 Tailwind 一起使用时， 问题出现了，首先，是关于速度的问题。当我的项目变得很大并且有若干组件时，初始编译速度接近 3s，并且热更新的速度也超过了 1s。这对开发的体验非常不友好。当你作出了改动但实际上有延迟的时候，我相信你会和我一样抓狂。<br><br>
在那之后，我在 reddit 上创作了一篇文章，发现有人对同样的事情感兴趣，于是项目就这么开始了。 碰巧，我那天晚上刚好学了 TypeScript ，所以我决定采用它。现在我一想到它，还是觉得很难以置信。这是我完成的第一个 TypeScript 项目。这真令人惊奇。<br>

---
transition: slide-up
---

<div flex items-center>
  <a mr-10 href="https://windicss.org/" class="text-xl" target="_blank">3、UnoCSS</a>
  <div flex h-4 items-start>
    <a mr-3 class="border-none!" href="https://github.com/unocss/unocss" target="_blank"><pajamas:github w-4 h-4 class="align-revert" /></a>
    <img h-4 translate-y-4px src="https://img.shields.io/github/stars/unocss/unocss">
  </div>
</div>
<br>

- 具有**高性能**且**极具灵活性**的即时原子化 CSS 引擎。
- **UnoCSS** 是一个引擎，而非一款框架，因为它并未提供核心工具类，所有功能可以通过预设和内联配置提供。
- **UnoCSS** 的主要目标是直观性和可定制性。它可以让你在数十秒内，定义你自己的 CSS 工具。
- 没有解析，没有 AST，没有扫描，它是**即时**的（比 Windi CSS 或 Tailwind JIT 快 5 倍）。

<br>

> UnoCSS 仍处于实验阶段，但由于其精简的设计，生成的结果已经非常可靠了。 —— Unocss 作者 Anthony Fu <br><br>
> 需要注意的一点是，API 还没有最终定案，虽然我们会遵循 semver 的进行版本发布，但是还请为破坏性改动做好准备。
> <br><br>
> 它并非被设计成 Windi CSS 或 Tailwind 的替代品（考虑等待 Windi CSS v4）。我们不建议将现有项目完全迁移到 UnoCSS。你可以在新的项目中试用它，或者将它作为你现有 CSS 框架的补充（例如，禁用默认预设，只使用纯 CSS 图标的预设，或者自定义你的规则）。
>

值得一提的是，本ppt也是采用的unocss作为css引擎。

<br>

下面将说一下三者的对比情况：

---
transition: fade-out
---

| 功能/特点   | Tailwind CSS               | Windi CSS              | Unocss                    |
| ----------- | ------------------------- | ----------------------| -------------------------|
| GitHub Stars | <img h-4 translate-y-4px src="https://img.shields.io/github/stars/tailwindlabs/tailwindcss"> | <img h-4 translate-y-4px src="https://img.shields.io/github/stars/windicss/windicss"> | <img h-4 translate-y-4px src="https://img.shields.io/github/stars/unocss/unocss"> |
| 第一个版本发布时间 | 2017 年 11 月 | 2020 年 2 月 | 2021 年 3 月 |
| 自定义程度   | 低                        | 中等                  | 高                        |
| JIT编译     | 从 3.0 版本开始支持         | 从 2.0 版本开始支持    | 支持                     |
| 文档        | 详细                      | 较详细                  | 简单                     |
| 社区        | 社区庞大                 | 社区比较小              | 社区比较小              |
| 可扩展性    | 中等                      | 高                    | 高                       |

---
transition: slide-up
---

# 三、原子化CSS的使用

我们将以 `Unocss` 为例，实现一个 [Twitter](https://twitter.com/home) 首页布局效果，在基础上添加更换主题、暗夜模式功能

技术栈：`Vite`、 `nuxt` 、`unocss`

1、初始化一个nuxt项目

```js
npm init nuxt-app twitter-demo
```

2、引入`Unocss`

```js
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
  <div flex="~ justify-between" sticky top-0 bg-white dark:bg-black z-1 py-4>
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
    <div border="~ 5">
      ThemeSetting
    </div>
    <div class=" flex space-x-2">
      <div
        v-for="(c, i) in colors" :key="i" w-6 h-6 rounded-full cursor-pointer :style="{ background: c }"
        @click="handleToggleTheme(c)"
      />
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

---
transition: fade-out
---

# 四、使用原子化CSS的利与弊

<br>

好处：

- 使用传统方法，每次添加新功能时，CSS 文件都会变大。而使用了原子化CSS之后，一切都是可重用的，因此很少需要编写新的 CSS，一套样式全局通用。
- 按需生成，只会生成我们使用过的，从而减少打包体积。
- 永远不用担心命名冲突，永远不用担心样式覆盖。
- 不需要再为class取个什么名字而苦恼。

劣处：

- 由于一个元素可能有多个class，这样会增加css代码的嵌套，使得css文件变得复杂难以维护。
- 有一定的学习成本，但是这一条我觉得并不算缺点，绝大部分的css类都是很符合直觉的，比如background需要记住是以bg开头。

---

关于维护方面：

1. 使用组合类：使用多个类名组合在一起，定义一个特定的元素或组件，可以更清晰地表达其作用，例如:
  ```html
  <div class="button primary large"></div>
  ```
  或者：
  ```html
  <div
    border="1 red dashed"
    text="10 green"
  ></div>
  ```

2. 利用注释：在 HTML 或 CSS 中添加注释来解释样式的作用，可以让代码更加易读和易于维护。
3. 使用工具：一些工具可以帮助你更好地管理原子化 CSS，例如可以使用 PostCSS 插件来生成有意义的类名，也可以使用类似于 Tailwind CSS 的类名缩写系统来减少样式的数量。
4. 遵循规范：制定样式书写规范，例如 BEM（块、元素、修饰符）或 Atomic Design 等，可以帮助你更好地组织样式并提高代码的可维护性。

---
transition: fade-out
---

# 五、原子化CSS的实现

接下来我们将简单介绍一下如何实现一个简单版的原子化CSS，并支持以下功能：`按需生成`、`HMR`、`可配置预设`、`支持hover等工具类`。

使用方法：

```ts
// vite.config.ts
import { acss } from "@acss/core";
export default defineConfig({
  plugins: [
    ...
    acss({ 
      //presets: [] 
    })
  ]
})
```

```ts
// main.ts
import 'a.css';
```

下面将简单说一下实现原理：

---
class: 'code-fragment'
transition: slide-up
---

```ts {all|1|3|22-24|13-15|16-21|7-12|all}
let server: ViteDevServer; // 定义一个全局变量接收viteDevServer
export function acss({ presets }: { presets: PresetsRules[][] }) {
  const context = new Context(presets);
  return {
    name: "acss",
    enforce: "pre", // 在编译之前运行插件
    transform(code, id) {
      // 在编译之前对代码进行处理, 热更新时也会进入此钩子，并不会加载load
      if (!/.vue$/.test(id)) return;
      context.code = code;
      update();
    },
    resolveId(i) {
      return i === 'a.css' && i;  // 解析导入的模块路径并将返回值传给load
    },
    load(i) {
      if (i !== 'a.css') return;
      // 将传入的acss类名转化成css文件写入虚拟模块中
      return server ? context.parseCode(context.code) // 同步解析
        : context._waitAndParseCode(); // 异步解析
    },
    configureServer(_server: ViteDevServer) {
      server = _server;
    },
  } as PluginOption;
}
```

---

```ts
function update() {
  // 监听到vue文件变动，手动触发虚拟模块的全量更新
  if (!server) return;
  const { moduleGraph, ws } = server;
  const module = moduleGraph.getModuleById(path);
  if (module) {
    moduleGraph.invalidateModule(module); // 无效化模块，用于热更新
    if (ws) {
      ws.send({
        type: "full-reload", // 全量更新，这样就可以触发a.css的load
        path: "a.css",
      });
    }
  }
}
```

剩下的实现就是`Context`构造函数里的核心内容啦，无非就是利用正则解析`dom`中的属性，通过传入的预设生成对应css写入到虚拟模块中去，鉴于完整实现篇幅过长，移至实现源码中分析。