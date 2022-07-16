// ==UserScript==
// @name        ASIN to Goodreads To-Read List
// @namespace   Violentmonkey Scripts
// @match       https://www.goodreads.com/review/list/*
// @grant       GM_setClipboard
// @require     https://code.jquery.com/jquery-latest.min.js
// @version     1.0.0
// @author      holyspiritomb
// @run-at      document-end
// @icon        https://www.google.com/s2/favicons?domain=goodreads.com
// @description Adds mobi-asin to a more convenient place.
// ==/UserScript==




$('td.field.title').each(function(){
    var theBookRow = $(this).closest('tr');
    var bookAuthor = theBookRow.children('td.author')[0].innerHTML;
    var bookAsin = theBookRow.children('td.asin')[0].innerHTML;
    var bookAuthorElem = $(`<div></div>`);
    bookAuthorElem.html(bookAuthor);
    bookAuthorElem.addClass('injectedAuthor');
    var asinDiv = $(`<div></div>`);
    asinDiv.html(bookAsin);
    asinDiv.addClass('injectedAsin');
    $(this).append(bookAuthorElem);
    $(this).append(asinDiv);
});
