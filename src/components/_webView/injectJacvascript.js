/**@flow*/
export const js = `
window.webviewBridgecallRN = {
    call: function (type, params, callBack = null) {
      window.postMessage(JSON.stringify({
        name: 'call',
        type: type,
        params: params,
        callBack: callBack
      }, function (key, val) {
        if (typeof val === 'function') {
          return val + '';
        }
        return val;
      }))
    },
    request: function (url, params, callBack = null) {
      window.postMessage(JSON.stringify({
        name: 'request',
        url: url,
        params: params,
        callBack: callBack
      }, function (key, val) {
        if (typeof val === 'function') {
          return val + '';
        }
        return val;
      }))
    }
  }
`

/*
 webviewBridgecallRN.call('openNewView',
      {
        url: 'https://www.baidu.com'
      }, function (a) {
        console.log(a)
      });
* */

export function resolveMessage (data: Object, navigation: Object) {
  if (data.name === 'call') {
    const type = data.type;
    if (type === 'openNewView') {
			navigation.push('WebView', {
				url: data.params.url,
				callBack: data.callBack || null
			})
			// navigation.popToTop()
    }

    if (type === 'scanCode') {
      navigation.navigate('ScanCode', {
        callBack: data.callBack || null
      })
    }
  }

  if (data.name === 'request') {

  }
}