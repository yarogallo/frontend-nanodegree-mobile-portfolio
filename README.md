## Website Performance Optimization portfolio project


#### Part 1: Optimize PageSpeed Insights score for index.html

## Getting started:

1. Check out the repository [https://github.com/yarogallo/frontend-nanodegree-mobile-portfolio.git](https://github.com/yarogallo/frontend-nanodegree-mobile-portfolio.git)
1. To inspect the site install Live Server.
1. To verify that Node.js is installed, run ```node -v``` if it is not, follow the instructions [here](https://nodejs.org/en/)
1. To confirm that npm is installed, run ```npm -v```
1. Install live-server, follow the intructions [here](https://gist.github.com/donmccurdy/20fb112949324c92c5e8)

```bash
  $> npm install -g live-server
  $> cd /path/to/your/project-folder
  $> live-server
```
1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of the project directory to make the local server accessible remotely.

``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
```

1. Copy the public URL from ngrok and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

## Check the PageSpeed sugestion for improve performance.

1. Analize critical resources, css and javasript files that can delay the initial page render.
1. Mark javascript files as async, in order to avoid parser blocking
1. Use media types in print.css file, inline critical css, and [rel=preload](https://github.com/filamentgroup/loadCSS/blob/master/README.md) load stylesheets asynchronously.
1. Use grunt to optimize images with grunt-contrib-imagemin, instructions [here](https://www.npmjs.com/package/grunt-contrib-imagemin) 
1. Render images depending on screen resolution using srcset attribute, instructions [here](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)


#### Part 2: Optimize Frames per Second in pizza.html

## Getting started:

1. Open Developers Tools, Performance tap and record while doing an animation to measure performance.
1. Analize the animation behavior(main, frames) to see where are the problems.

## Resize pizza in pizza.html

1. Asign a percent value to a variable, depending on the pizza size that the user chose.
1. Change all pizza container width based on the size that was chosen. 

## Achieve 60fps in pizza.html 

1. Generate pizzas depending on the screen size, 200 is a big number for generating pizza images. 
1. Use ```window.requestAnimationFrame(callback)``` for performing the animation.
1. Try doing the least work inside the callback function, make it as simple as possible by doing all the work possible before call ```requestAnimationFrame```.
1. Use a variable to be sure that the previous animation has finished before start a new one. 
1. There is no need to move all the pizzas during the scrolling event, move only the images that are visible in that moment, depending on the viewport height.


You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

#### Part 3: Version compressed and minified.

1. The compressed and minified version of the project is inside of ```dist``` directory.
1. The source code is inside ```src``` directory.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
