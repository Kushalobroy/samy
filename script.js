let currentPage = -2;
const pages = document.querySelectorAll('.paper');

function openSurprise() {
  document.getElementById('entry').style.display = 'none';
  document.getElementById('bookContainer').style.display = 'flex';
  nextPage();
}

function showPages(index) {
  pages.forEach((page, i) => {
    page.style.transform = i <= index ? 'rotateY(-180deg)' : 'rotateY(0deg)';
    page.style.zIndex = pages.length - i;
    
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPages(currentPage);
     document.getElementById('cover-front').style.display = 'none';
  }
 
}

function prevPage() {
  if (currentPage > -1) {
    currentPage--;
    showPages(currentPage);
    if (currentPage === -1) {
      document.getElementById('bookContainer').style.display = 'none';
      document.getElementById('entry').style.display = 'flex';
    }
    document.getElementById('cover-front').style.display = 'none';
  }
}
