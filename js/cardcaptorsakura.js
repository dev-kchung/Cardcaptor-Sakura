// JavaScript Document

$(document).ready(function()
{
	$("#btnCreateanAccount").click(function() {
	  $(".create, .sign-in").toggle();
	});
});

$(function() {
    $('.toggle-nav').click(function() {
        $('.outer-wrap').toggleClass('nav-active');
    });
});