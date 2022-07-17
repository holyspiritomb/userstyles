// ==UserScript==
// @name        ASIN to Goodreads To-Read List
// @namespace   Violentmonkey Scripts
// @match       https://www.goodreads.com/review/list/*
// @grant       GM_setClipboard
// @require     https://code.jquery.com/jquery-latest.min.js
// @version     1.0.1
// @author      holyspiritomb
// @run-at      document-end
// @icon        https://www.google.com/s2/favicons?domain=goodreads.com
// @description Rearranges some information on the to-read book list and makes the ASIN copy to clipboard when clicked.
// ==/UserScript==


$('td.field.title').each(function() {
    var bookRow = $(this).closest('tr');
    var bookAuthor = bookRow.children('td.author')[0].innerHTML;
    var bookAsin = bookRow.children('td.asin')[0].innerHTML;
    var authorElem = $(`<div></div>`);
    authorElem.html(bookAuthor);
    authorElem.css('margin-top','10px');
    authorElem.addClass('injectedAuthor');
    var asinElem = $(`<div></div>`);
    asinElem.html(bookAsin);
    asinElem.css('margin-top','10px');
    asinElem.addClass('injectedAsin');
    $(this).append(authorElem);
    $(this).append(asinElem);
});

$('div.injectedAsin').on('click', function() {
    asin = $(this).children('div.value')[0].innerText;
    var copiedSpan = $(`<span></span>`);
    copiedSpan.text('\u2713');
    copiedSpan.css('color','limegreen');
    GM_setClipboard(asin);
    $(this).append(copiedSpan);
});
