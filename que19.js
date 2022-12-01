class Electricbill
{
    n;untill;bill;
    main()

{
    this.accept()
    this.calculator()
    this.print()
}
accept()
{
    this.n=prompt("enter your name")
    this.units=parseInt(prompt("enter the units consumed"))
}
calculate()
{
    if(this.units<=100)
    {
        this.rate=2
        this.bill=this.units*this.rate
    }
    else if (this,units>101 && this.rate)
{
    this.rate=5;
    this.bill=5*this.units+this.charge
}
else{
    this.charge=this.units*(2.5/100)
    this.bill=5*this.units.charge
}
}
print()
{
    document.write("Name of customer :"+this.n+"<br>");
    document.write("No. of unit consumed :"+this.n+"<br>");
    document.write("Bill amount:"+this.bill);

}
}
let e1=new Electricbill()
e1.main()