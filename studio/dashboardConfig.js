export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2a5e1b860ac2cb20456000',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xwg6jxrf',
                  apiId: 'a31ddf39-9b2c-40c4-9584-f45460e3398c'
                },
                {
                  buildHookId: '5f2a5e1b01316c9e025ccb47',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eotwdufp',
                  apiId: 'b89ffa98-28cc-4b26-aca8-8dd8576f3c52'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pjtf93/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eotwdufp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
