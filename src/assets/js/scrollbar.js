import LocomotiveScroll from 'locomotive-scroll';
// import { gsap, ScrollTrigger } from '/gsap/all'
// gsap.registerPlugin(ScrollTrigger)

// let hasScrolled = false
// const hasScrolledTreshold = 70

class Scrollbar {
  constructor() {

    const scrollbar = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      getDirection: true,
      getSpeed: true,
      smooth: 1,
      // resetNativeScroll: false,
    });

    scrollbar.isSmooth = document.documentElement.classList.contains(scrollbar.smoothClass);
    scrollbar.isActive = true;
    scrollbar._update = scrollbar.update;
    scrollbar._start = scrollbar.start;
    scrollbar._stop = scrollbar.stop;

    scrollbar.resetScroll = () => {
      window.scrollTo(0,0);
      scrollbar.scrollTo(0, {duration: 0, disableLerp: true});

      scrollbar.scroll.instance.scroll.y = 0;
    }

    scrollbar.stop = () => {
      scrollbar.isActive = false;
      scrollbar._stop();
    }

    scrollbar.start = () => {
      scrollbar.isActive = true;
      scrollbar._start();
    }

    scrollbar.update = () => {
      if(scrollbar.isActive) {
        scrollbar._update();
      }
    }

    scrollbar.clearElements = () => {
      for (let i in scrollbar.scroll.currentElements) {
        delete scrollbar.scroll.currentElements[i];
      }
    }



    // setup ScrollTrigger

    // if(scrollbar.isSmooth) {
    //   // set scrollerProxy only if the scrollbar is smooth otherwise weird bugs appear
    //   ScrollTrigger.scrollerProxy(scrollbar.el, {
    //     scrollTop: function(value) {
    //       return arguments.length ? scrollbar.scrollTo(value, 0, 0) : scrollbar.scroll.instance.scroll.y;
    //     },
    //     getBoundingClientRect: function() {
    //       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //     },
    //     pinType: scrollbar.el.style.transform ? "transform" : "fixed"
    //   });
    //   // used in every ScrollTrigger istance in plugins (default is undefined)
    //   ScrollTrigger.scroller = scrollbar.el;
    // }

    // ScrollTrigger.addEventListener('refresh', () => {
    // // update scrollbar at every refresh because scroll trigger may change the height of the content
    //   scrollbar.update();
    // })

    // useful for video recording
    window.scrollbar = scrollbar;

    scrollbar.on('scroll', this.onScroll.bind(scrollbar));

    return scrollbar;
  }

  onScroll(obj) {
    // if(this.isSmooth) {
    //   ScrollTrigger.update();
    // }

    // if (obj) {
    //   if(obj.scroll.y >= hasScrolledTreshold && !hasScrolled) {
    //     hasScrolled = true;
    //     document.documentElement.classList.add('has-scrolled');
    //   } else if(obj.scroll.y < hasScrolledTreshold && hasScrolled) {
    //     hasScrolled = false;
    //     document.documentElement.classList.remove('has-scrolled');
    //   }
    // }
  }
}

const instance = new Scrollbar();

export default instance;
