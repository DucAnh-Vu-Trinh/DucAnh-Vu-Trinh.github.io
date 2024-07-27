document.querySelectorAll('.collapsible h2').forEach(function(h2) {
    h2.addEventListener('click', function() {
      var content = this.nextElementSibling;
      var arrow = this.querySelector('.fa-caret-right, .fa-caret-down');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrow.classList.remove('fa-caret-down');
        arrow.classList.add('fa-caret-right');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.classList.remove('fa-caret-right');
        arrow.classList.add('fa-caret-down');
      }
    });
  });
  