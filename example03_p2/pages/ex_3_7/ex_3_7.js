Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(2)
    context.strokeRect(0, 0, 200, 200)
    context.stroke()//下面对画笔进行重置，所以要调这个


    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    //context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)// 外层脸形

    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)

    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)

    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)

    context.stroke()
    context.draw()


  }
})
