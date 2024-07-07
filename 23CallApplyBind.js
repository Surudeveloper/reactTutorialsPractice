function func (a,b){
    console.log(this.x+a+b)
}

func(10,20) //NaN x is not defined

//--------call----------------------------
//1st arg our own object and then rest parameter with elements to be passed as an argument
func.call({x:10},10,20) 

//--------apply---------------------------
//1st arg our own object 2nd is an array with elements to be passed as an argument
func.apply({x:10},[10,20])

//---------bind---------------------------
//can be called by all 3 methods but 1st argument will be our own object and then rest parameter
func.bind({x:10},10,20)()
func.bind({x:10},10)(20)
func.bind({x:10})(10,20)

//lets create our own bind method so that we can understand it working
Function.prototype.myBind=function(thisArg,...outerParam){
    var f = this
    console.log(1,this);  //this=>func (a,b){ console.log(this.x+a+b) } //OR whatever function u call with myBind method
    return function (...innerParam){
        console.log(2,this);  //this=> window object
        f.call(thisArg,[...outerParam, ...innerParam])
    }
}
func.myBind()