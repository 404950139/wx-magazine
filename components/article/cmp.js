// components/article/cmp.js
import {LikeModel} from "../../models/like.js"
const likeModel = new LikeModel;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    like: false
  },
  attached() {
    const article = this.data.articleList;
    const articleId = article.artId;
    const like = likeModel.getLikeStatus(articleId);
    this.setData({
      like: like
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSetLike(e) {
      const like = e.detail;
      const article = this.data.articleList;
      const articleId = article.artId;
      const liked = likeModel.getLikeList();
      const likeList = liked || [];
      if (like) {
        likeModel.addLikeList(article);
      } else {
        likeModel.removeLikeList(articleId);
      }
    }
  }
})
