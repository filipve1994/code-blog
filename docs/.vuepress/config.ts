import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',

    title: 'VuePress',
    description: 'My first VuePress Site',
    base: "/code-blog/",


    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: [
            '/',
            '/get-started',
            {
                text: 'Guide',
                link: '/guide/',
            },
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    collapsible: false,
                    children: [
                        '',
                        'articles.md',
                        'books',
                        'courses',
                        'youtube',
                        'communities',
                        'tools',
                        'who-pay',
                        'open-source',
                        'open-projects.md',
                        'blogs',
                        'interviews',
                        'publication',
                        'job-boards',
                    ]
                }
            ],

        }
    }),

    bundler: viteBundler(),
})
