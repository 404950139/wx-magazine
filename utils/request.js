class Request {
    baseUrl= 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'

    getData({url, method='GET', data={}}) {
        return new Promise( (resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                method: method,
                data: data,
                success: res => {
                    if (res.data.code == 0) {
                        resolve(res.data.data)
                    } else { 
                        this._showError();
                    }
                },
                fail: err => {
                    reject(err)
                    this._showError();
                }
            })
        })
    }
    _showError() {
        wx.showToast({
            title: "请求错误",
            icon: "none"
        })
    }
}

export {Request};


// var baseUrl = 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine';
// function request(url, success, method='GET', data={}) {
//     wx.request({
//         url: baseUrl + url,
//         method: method,
//         data: data,
//         success: function (res) {
//             if (res.data.code == 0 || res.statusCode == 200) {
//                 success(res.data)
//             } else {
//                 showError();
//             }
//         },
//         fail: function () {
//             showError();
//         }
//     })
// }

// function showError() {
//     wx.showToast({
//         title: "请求错误",
//         icon: "none"
//     })
// }


// module.exports = request;
