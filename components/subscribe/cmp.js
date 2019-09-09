// components/subscribe/cmp.js
import {SubscribeModel} from "../../models/subscribe.js"
const subscribeModel = new SubscribeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    subscription: false,
  },

  attached() {
    this.setTag();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      let subscription = this.data.subscription
      const markListNow = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }
      if (subscription) {
        subscribeModel.removeMyTagList(this.properties.tag);
      } else {
        const markTagList = subscribeModel.getMyTagList();
        markTagList.push(markListNow);
        subscribeModel.setMyTagList(markTagList);
      }
      this.toggleClass(subscription);
      this.triggerEvent('tap');
    },
    toggleClass(subscription) {
      if (!subscription) {
        this.setData({
          subscription:!subscription
        })
      } else {
        this.setData({
          subscription:!subscription
        })
      }
    },
    setTag() {
      const tagId = this.data.tagId;
      const subscripted = subscribeModel.getMyTagStatus(tagId);
      if (subscripted) {
        this.setData({
          subscription: true
        })
      }
    }
  }
})
