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
// @description Adds mobi-asin to individual book pages and copies it to the clipboard when clicked. On desktop, clicking "mobi-asin:" will copy the asin to the clipboard with "mobi-asin:" as a prefix for easy pasting into Calibre ebook library software. Works on book pages that have a button to buy from the Kindle Store or are listed under the book details as a Kindle edition.
// ==/UserScript==

// inspired by CH Amazon ASIN Adder by clickhappier https://greasyfork.org/en/scripts/6862-ch-amazon-asin-adder



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

$('div.injectedAsin').on('click',function(){
        asin = $(this).children('div.value')[0].innerText;
        GM_setClipboard(asin);
        $(this).append("\u2713");
    });
