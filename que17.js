class ParkingLot
{
    vno; hour; bill;
    Input()
    {
        this.vno=prompt('enter your vehical number');
        this.hours=parseInt(prompt('enter the nmo. of hours the vehicle is parked in parking'))
    }


    calculate()
    {
        if(this.hours==1)
        {
            this.bill=this.hours*3
        }

        else{
            this.bill=this.hours*1.50+1.5
        }
    }
    display()
    {
        document.write("vehicle No.:-",this.vno,"<br>","Parking hours:-",this.hours,"<br>","Bill:-",this.bill)
    }
}
let parking=new ParkingLot();
parking.Input();
parking.calculate();
parking.display();
