var beijiashu = ''
var jiashu = ''
var fuhao = ''
var result = '' // 保存结果值

// 屏幕显示的函数
function showScreen() {
    document.getElementById("showScreen").value = beijiashu + fuhao + jiashu
}

// 点击退格
function clickBack() {
    if (jiashu.length > 0) {
        // 退加数
        jiashu = jiashu.substring(0, jiashu.length - 1)
    } else if (fuhao.length > 0) {
        // 退符号
        fuhao = fuhao.substring(0, fuhao.length - 1)
    } else if (beijiashu.length > 0) {
        // 退被加数
        beijiashu = beijiashu.substring(0, beijiashu.length - 1)
    }
    showScreen()
}

// 点击AC清空屏幕
function clickAC() {
    beijiashu = ''
    jiashu = ''
    fuhao = ''
    result = ''
    showScreen()
}

// 点击数字时的处理函数
function chickShuzi(num) {
    if (fuhao == '') {
        if (beijiashu.length < 1 && num == '0') {
            alert('不允许0开头')
        } else {
            beijiashu += num
        }
    } else {
        if (jiashu.length < 1 && num == '0') {
            alert('不允许0开头')
        } else {
            jiashu += num
        }

    }
    showScreen()
}

// 点击符号
function clickFuhao(f) {
    if (fuhao == '' && (beijiashu != '' || result != '')) {
        fuhao = f
        if (result != '' && beijiashu == '') {
            beijiashu = result
            result = '' // 重置result存结果
        }
        showScreen()
    }
}

// 点击等号
function clickDeng() {
    if (beijiashu !== '' && jiashu !== '') {
        var x = parseFloat(beijiashu)
        var y = parseFloat(jiashu)
        if (fuhao == '+') {
            result = x + y + ""
        } else if (fuhao == '-') {
            result = x - y + ""
        } else if (fuhao == '×') {
            result = x * y + ""
        } else if (fuhao == '÷') {
            result = x / y + ""
        }
        // console.log(result);
        document.getElementById("showScreen").value = result
        // 清理清理工作
        beijiashu = ''  //数值型转换为字符串
        fuhao = ''
        jiashu = ''
    } else {
        alert('请输入两个需要运算的数')
    }
}

// 点击小数 单独处理
function clickDian() {
    if (fuhao == '') {
        if (beijiashu.length > 0 && beijiashu.indexOf(".") == -1) {
            beijiashu += '.'
        }
    } else {
        if (jiashu.length > 0 && jiashu.indexOf(".") == -1) {
            jiashu += '.'
        }
    }
    showScreen()
}
