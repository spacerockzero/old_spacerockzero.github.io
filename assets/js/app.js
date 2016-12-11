/* APP.JS: USE TO OVERRIDE AFTER EVERYTHING ELSE */
Prefetch.init({
  containers: ['html'],
  hoverDelay: 100,          //The number of miliseconds after which a sustained hover triggers a link prefetch
  enableTouch: true,        //Whether to prefetch on touchstart and therefore on mobile
  waitForMousedown: false   //Whether to prefetch on mousedown instead of on hover
})