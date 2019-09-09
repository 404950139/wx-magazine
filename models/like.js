class LikeModel {
    setLikeList (value) {
        wx.setStorageSync('like', value);
    }

    getLikeList () {
        return wx.getStorageSync('like') || [];
    }
    
    addLikeList (articleDetail) {
        const likeList = this.getLikeList();
        likeList.unshift(articleDetail);
        this.setLikeList(likeList);
    }

    removeLikeList (artId) {
        const likeList = this.getLikeList();
        let myIndex = 0;
        likeList.forEach( (ele, index) => {
          if (ele.artId == artId) {
            myIndex = index;
            return
          }
        });
        likeList.splice(myIndex, 1);
        this.setLikeList(likeList);
    }

    getLikeStatus (artId) {
        const likeList = this.getLikeList();
        let likeStatus = false;
        likeList.forEach( (ele, index) => {
            if (ele.artId == artId) {
                likeStatus = true
            }
        });
        return likeStatus;
    }
}

export {LikeModel}