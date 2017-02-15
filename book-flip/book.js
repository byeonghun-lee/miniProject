var book_flip = document.getElementsByClassName('book-flip');
// console.log(book_flip);
var first_book_flip=book_flip[0];
// console.log(book_flip);
for (var i=0; i < book_flip.length; i++) {
  var book = book_flip[i];
  var flip_name = book.children[0];
  var flip_cover  = book.children[book.children.length - 1];
  flip_name.onclick = function() {
    this.parentNode.style.cssText = 'transform: rotateY(90deg) translateX(100%)';
  };
  flip_cover.onclick = function() {
    this.parentNode.style.cssText = '';
  };
}
