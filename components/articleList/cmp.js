// components/articleList/cmp.js
import {IndexModel} from "../../models/index.js"
import {SearchModel} from "../../models/search.js"
const indexModel = new IndexModel();
const searchModel = new SearchModel();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() {

      }
    },
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magazineId: {
      type: Number,
      value: [],
      observer: 'changeNoData'
    },
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: '',
  },
  attached() {
    const curPages = getCurrentPages();
    const index = curPages.length - 1;
    let type = ''
    if (curPages[index].route === "pages/search/search") {
      this.setData({
        type: 'search'
      })
    } else {
      this.setData({
        type: 'index'
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeNoData() {
      this.setData({
        noMoreData: false
      });
    },
    loadMore() {
      this.getMoreData();
    },
    getMoreData() {
      const nowId = this.data.articleList.length;
      if (this._isLock() || this.data.noMoreData) {
        return
      }
      this._loadLock();
      let getMore = null;
      if (this.data.type == 'search') {
        const word = this.data.word;
        getMore = searchModel.getSearchArticleList(word, nowId);
      } else {
        const magazineId = this.data.magazineId;
        getMore = indexModel.getArticleList(magazineId, nowId);
      }
      getMore.then(res => {
        this._setMoreData(res);
        this._unloadLock();
      })
    },

    _isLock() {
      return this.data.loading
    },
    _loadLock() {
      this.setData({
        loading:true
      })
    },
    _unloadLock() {
      this.setData({
        loading:false
      })
    },
    _setMoreData(list) {
      const combineList = this.data.articleList.concat(list);
      if (combineList.length == this.data.articleList.length) {
        this.setData({
          noMoreData: true
        })
      }

      this.setData({
        articleList: combineList,
      })
    }
  }
})
