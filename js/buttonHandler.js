$('.card').mouseenter(function() {
    let delButton=document.getElementById(this.id).children[0].children[0];
    delButton.style.display="inline-block";
});
$('.card').mouseleave(function() {
    let delButton=document.getElementById(this.id).children[0].children[0];
    delButton.style.display="none";
});