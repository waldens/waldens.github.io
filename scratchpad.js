// ==UserScript==
// @name        My - test
// @namespace   bootinds
// @include     *
// @version     1
// @grant       none
// @run-at      document-idle
// @require     https://rawgit.com/waldens/waldens.github.io/master/Material-Design-Dropdown-Menu-Plugin-For-jQuery-menu-js/dist/menu.min.js
// @require     https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

// 引入css文件
$("head").append (
    '<link '
  + 'href="https://rawgit.com/waldens/waldens.github.io/master/Material-Design-Dropdown-Menu-Plugin-For-jQuery-menu-js/dist/menu.min.css" '
  + 'rel="stylesheet" type="text/css">'
  + '<link rel="stylesheet" href="http://fonts.css.network/icon?family=Material+Icons" type="text/css">'
  + '<link rel="stylesheet" href="https://rawgit.com/waldens/waldens.github.io/master/111.css" type="text/css">'
);
console.log("CSS加载完成");
// 菜单按钮
var button = '<a href="javascript:;" class="toggle" id="menu-toggle1"><i class="material-icons">more_vert</i></a>';
var menulistUp = '<ul class="menu" data-menu data-menu-toggle="#menu-toggle1, #menu-toggle2">';
var menulistDown = '</ul>';
console.log("准备匹配网址");
var url1 = /^https?:\/\/.*(v2ex|huginn|cichlid-forum).*/i;
if ( window.location.href.search( url1 ) != -1 ) {
    console.log("网址匹配成功");
    var innerList = '<li><a href="http://' + window.location.host + '/scenarios/2/export.json">导出 All_Backup</a></li>' + 
                    '<li class="menu-separator"></li>' + 
                    '<li><a href="http://' + window.location.host + '/scenarios/2/edit">编辑 All_Backup</a></li>';
    
    $('body').append(button);
    $('body').append(menulistUp + innerList + menulistDown);
    window.setTimeout(function() { $('[data-menu]').menu(); },6200);  
}

