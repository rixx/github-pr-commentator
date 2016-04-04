// ==UserScript==
// @name         pullrequests
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*/pull/*
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $(function(){
    var comments = $('.commit-comment');
    var datastore = {};
    var sidebarContainer = $('<div id="rixx-sidebar"><div class="timeline-comment-header"></div> <div class="comment-content"></div></div>');
    $('body').append(sidebarContainer);

    var drawSidebar = function() {
        
    };

    var onMonsterChange = function(event) {
        datastore[$(event.target).parent().id].checked = event.target.checked;
        drawSidebar();
    };


    var stylish = ".rixx-monstercheckbox {position: absolute; top: 0.2rem; left: -4rem; transform: scale(1.5)}";
    stylish += "#rixx-sidebar {position: fixed; top: 3rem; right: 5rem;}";
    GM_addStyle(stylish);

    comments.each(function() {
        var comment = $(this);
        comment.append('<div class="rixx-monstercheckbox"><input type="checkbox" /></div>');
        comment.find('input').on('change', onMonsterChange);
        datastore[comment.id] = {checked: false};
    });
    drawSidebar();
});
})();
