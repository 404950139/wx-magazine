// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArray:Array,
    mainTitle: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const array = this.properties.imgArray;
      const index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls: array,
        current: array[index]
      })
    }
  }
})
