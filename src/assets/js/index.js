import '../scss/index.scss'

// WebFontoader
import WebFont from 'webfontloader';

require('./globals.js')

import { device } from './device'

// Kapla
import { autoLoad } from 'kapla'
import kapla from './app'
import { appear, resize } from './events'

import { DevGrid } from './dev'

import scrollbar from './scrollbar'

import fixVh from './fixVh'
fixVh.updateAll()

new DevGrid()

class Main {
  static start() {
    return new Main()
  }

  constructor() {
    Promise.all([Main.domReady()]).then(this.init.bind(this))
  }

  static domReady() {
    return new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve)
    })
  }

  init() {

    const context = require.context('./components', true, /\.js$/)

    // kapla.use('appear', appear)
    // kapla.use('raf', raf)
    kapla.use('resize', resize)
    kapla.use('scroll', scroll)
    kapla.load(autoLoad(context))

    setTimeout(() => {
      document.documentElement.classList.add('is-ready')
    }, 50)
  }
}

Main.start();
