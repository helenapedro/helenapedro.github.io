class Pagination {
     constructor(totalItems, itemsPerPage, currentPage = 1) {
          this.totalItems = totalItems;
          this.itemsPerPage = itemsPerPage;
          this.currentPage = currentPage;
     }

     getTotalPages() {
          return Math.ceil(this.totalItems / this.itemsPerPage);
     }

     getCurrentPage() {
          return this.currentPage;
     }

     setCurrentPage(page) {
          if (page < 1) {
               this.currentPage = 1;
          } else if (page > this.getTotalPages()) {
               this.currentPage = this.getTotalPages();
          } else {
               this.currentPage = page;
          }
     }

     getPageItems(items) {
          const start = (this.currentPage - 1) * this.itemsPerPage;
          const end = start + this.itemsPerPage;
          return items.slice(start, end);
     }

     nextPage() {
          this.setCurrentPage(this.currentPage + 1);
     }

     prevPage() {
          this.setCurrentPage(this.currentPage - 1);
     }
}

// Example usage:
const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const pagination = new Pagination(items.length, 10);

console.log(`Total Pages: ${pagination.getTotalPages()}`);
console.log(`Current Page: ${pagination.getCurrentPage()}`);
console.log(`Items on Current Page: ${pagination.getPageItems(items)}`);
          
pagination.nextPage();
console.log(`Current Page after next: ${pagination.getCurrentPage()}`);
console.log(`Items on Current Page: ${pagination.getPageItems(items)}`);

pagination.prevPage();
console.log(`Current Page after prev: ${pagination.getCurrentPage()}`);
console.log(`Items on Current Page: ${pagination.getPageItems(items)}`);