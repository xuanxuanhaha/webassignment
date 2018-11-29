/*
* @Author: Marte
* @Date:   2018-05-26 21:32:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-26 21:33:18
*/

'use strict';

var image = document.getElementById("testImg"),
    button = document.getElementById("testBtn");

if (image.classList && image && button) {
    button.onclick = function() {
        if (this.value == '暂停') {
            image.classList.add('stop');
            this.value = '播放';
        } else {
            image.classList.remove('stop');
            this.value = '暂停';
        }
    };
}