// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },
  lifetimes: {
    attached() {
      this.getVideoInfo()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play() {
      this.togglePlay();
      this.video.play();
    },
    stop() {
      this.togglePlay();
      this.video.seek(0);
      this.video.stop();
    },
    getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    },
    togglePlay() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    onVideoEnd() {
      this.togglePlay();
    }
  }
})
