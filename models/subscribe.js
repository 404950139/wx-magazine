class SubscribeModel {
    setMyTagList (value) {
        wx.setStorageSync('markTagList', value);
    }

    getMyTagList() {
        return wx.getStorageSync('markTagList') || [];
    }

    removeMyTagList (tagId) {
        const tagList = this.getMyTagList();
        let tagIndex = 0; 
        tagList.forEach( (ele, index) => {
            if (ele.tagId == tagId) {
                tagIndex = tagId;
                return;
            }
        });
        tagList.splice(tagIndex, 1);
        this.setMyTagList(tagList);
    }

    getMyTagStatus (tagId) {
        const tagList = this.getMyTagList();
        let subscripted = false;
        tagList.forEach( (ele, index) => {
            if (ele.tagId == tagId) {
                subscripted = true;
            }
        });
        return subscripted;
    }
}

export {SubscribeModel}