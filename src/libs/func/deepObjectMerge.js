//本方法已适配echarts，不能单独使用深度合并对象
export const deepObjectMerge = function(FirstOBJ, SecondOBJ) {
    // first : 新的对象
    // second : 父类对象
    // 检查对象SecondOBJ是否具有对象FirstOBJ的属性
    for (var key in SecondOBJ) {
        // 判断该key是否为数组
        if (FirstOBJ[key] && Array.isArray(FirstOBJ[key]) == true) {
            // 如果数组是data，则直接使用新的覆盖旧的整个数组
            if (key != "data") {
                // 处理新对象的属性是数组，父级元素是对象的情况
                if(SecondOBJ[key] && Array.isArray(SecondOBJ[key]) == true){
                    // 遍历数组
                    SecondOBJ[key].forEach((item, index) => {
                        // 如果遍历出来的值为对象，继续遍历
                        if (FirstOBJ[key][index] && FirstOBJ[key][index].toString() === "[object Object]") {
                            FirstOBJ[key][index] = deepObjectMerge(FirstOBJ[key][index],SecondOBJ[key][index])
                        }
                    })
                }
                else if (SecondOBJ[key] && SecondOBJ[key].toString() === "[object Object]"){
                    FirstOBJ[key][0] = deepObjectMerge(FirstOBJ[key][0],SecondOBJ[key])
                }
            }
        }
        // 判断该key是否为对象
        else if (FirstOBJ[key] &&FirstOBJ[key].toString() === "[object Object]") {
            FirstOBJ[key] = deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
        }
        // 如果key不是数组和对象，则不需要遍历，只需要直接赋值
        else {
            if ((FirstOBJ[key] == "" || FirstOBJ[key] == undefined ) && typeof FirstOBJ[key] != "boolean") {
                FirstOBJ[key] = SecondOBJ[key]
            }
        }
    }
    return FirstOBJ
}
