class BookFair
{
    bname;price;
    main()
    {
        this.input()
        this.calculate()
        this.display()

    }

    input()
    {
        this.name=prompt("Enter your name of book")
        this.price=parsent(prompt("Enter the price of book"))
    }

    calculate()
    {
        if(this.price<=1000)
        {
            this.dis=2
            this.dispri=(this.price -this.dispri)
        }
        else if(this.price>100 && this.price<3000)
        {
            this.dis=10
            this.dispri=(this.price/100)*this.dis
            this.price=this.price-this.dispri

        }

        else if(this.price>3000)
        {
            this.dis=15;
            this.dispri=(this.price/100)*this.dis
            this.price=this.price-this.dispri
        }
    }
    display()
    {
        document.write("Book name:"+this.name+"<br>")
        document.write("Price of book after discount:"+this.price+"<br>")
    }
}
let p=new BookFair()
p.main()