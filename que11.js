class FruitJuice {
    pCode=1234;
    PType="x1x";
    pSize=123;
    pPrice=1234;
    flavour="choco";

input() {
    let a=prompt("Enterb the product code : ");
    this.pCode=parseInt(a);
    this.flavour=prompt("Enter the flavour (Orange/Apple,etc) ");
    this.pType=prompt("Enter the pack type (TetraPack/Bottal etc : ");
    let b=prompt("Enter the product price : ")
    this.pSize=parseInt(b);
    let c=prompt("Enter the Product Price :")
    this.pPrice=parseInt(c);
}


discount() {
    this.pPrice-=10;

}

display() {
    document.write("product Code :"+this.pCode+"<br>");
    document.write("flavour :"+this.flavour+"<br>");
    document.write("pack Type :"+this.pType+"<br>");
    document.write("Pack Size:"+this.Psize+"<br>")
    document.write("Product price:"+this.pPrice+"<br>")
}
}





let fruitJuice = new FruitJuice();
fruitJuice.input();
fruitJuice.discount();
fruitJuice.display();

