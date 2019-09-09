// components/imgBtn/cmp.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    opentype: String
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
    onUserInfo(e) {
      this.triggerEvent("onUserInfo", e.detail.userInfo, {})
    }
  }
})
