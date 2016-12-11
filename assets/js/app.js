/* APP.JS: USE TO OVERRIDE AFTER EVERYTHING ELSE */
Prefetch.init({
  // containers: ['.js-nav-link', '.js-prefetch-post-title'],
  containers: ['html'],
  // exclusions: [],        //An array of partial links passed as strings--if the potential prefetch link contains any of these partial links, it will be ignored
  hoverDelay: 100,           //The number of miliseconds after which a sustained hover triggers a link prefetch
  enableTouch: true,        //Whether to prefetch on touchstart and therefore on mobile
  waitForMousedown: false   //Whether to prefetch on mousedown instead of on hover
})