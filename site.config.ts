import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '187311c20ffc4380b702af86e2c5e65e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Gosesummer-page',
  domain: 'gosesummer.eu.org',
  author: 'Gosesummer',

  // open graph metadata (optional)
  description: 'A hub where you can enjoin my ideas!',

  // social usernames (optional)
  twitter: 'gosesummer',
  github: 'suneao',
  linkedin: 'nope',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '💩',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.7,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  //pageUrlOverrides: {
  //  '/nope': '067dd719a912471ea9a3ac10710e7fdf',
  //  '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  //},
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {title: 'HOME',pageId: '187311c20ffc4380b702af86e2c5e65e'},
    {title: 'About',pageId: '504ed4c9fb3b46c4ad7fb62b53fe3cde'},
    {title: 'Contact',pageId: 'cc184efb1e414c30be541a79f3ca1bc5'}
   ]
})
