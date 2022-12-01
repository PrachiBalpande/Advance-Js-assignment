class Book {
    BOOK_No; book_title;
    PRICE;
    INPUT() {
        this.BOOK_No =prompt("Enter the book no. ");
        this.book_title =prompt("Enter the book title");
        this.PRICE = parseInt(prompt("Enter the this Price :"))
    

    }

    TOTAL_COST(n){
        let tcost;
        tcost = this.PRICE * this.n;
        document.write("Total Cost :"+tcost)
    }

    PURCHASE() {
        this.n =parseInt(prompt("Enter the no. of copy to purches:"));
        this.TOTAL_COST(this.n);
    }
}

let ob = new Book();
ob.INPUT();
ob.PURCHASE();