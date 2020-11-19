
    function Osszead1()
{
var b=parseInt(document.getElementById("b").value);
var c=parseInt(document.getElementById("c").value);
var d=parseInt(document.getElementById("d").value);
var e=parseInt(document.getElementById("e").value);
var f=parseInt(document.getElementById("f").value);
var g=parseInt(document.getElementById("g").value);
var h=parseInt(document.getElementById("h").value);
var osszeg=(b+c+d+e+f+g+h);
document.getElementById("eredmeny").innerText=osszeg;
}

function Osszead2()
{
var i, j , k ,l , m, n ,o;
j=parseInt(document.getElementById("j").value);
i=parseInt(document.getElementById("i").value);
k=parseInt(document.getElementById("k").value);
l=parseInt(document.getElementById("l").value);
m=parseInt(document.getElementById("m").value);
n=parseInt(document.getElementById("n").value);
o=parseInt(document.getElementById("o").value);
var mes=i+j+k+l+m+n+o;
document.getElementById("eredm").innerText=mes;
}

function Osszead3()
{
var p=parseInt(document.getElementById("p").value);
var q=parseInt(document.getElementById("q").value);
var r=parseInt(document.getElementById("r").value);
var s=parseInt(document.getElementById("s").value);
var t=parseInt(document.getElementById("t").value);
var u=parseInt(document.getElementById("u").value);
var v=parseInt(document.getElementById("v").value);
var w=parseInt(document.getElementById("w").value);
var x=parseInt(document.getElementById("x").value);
var y=parseInt(document.getElementById("y").value);
var ossz=p+q+r+s+t+u+v+w+x+y;
document.getElementById("ered").innerText=ossz;
}

function Osszead4()
{
var z=parseInt(document.getElementById("z").value);
var a=parseInt(document.getElementById("a").value);
var ab=parseInt(document.getElementById("ab").value);
var ac=parseInt(document.getElementById("ac").value);
var ad=parseInt(document.getElementById("ad").value);
var ae=parseInt(document.getElementById("ae").value);
var af=parseInt(document.getElementById("af").value);
var ag=parseInt(document.getElementById("ag").value);
var ah=parseInt(document.getElementById("ah").value);
var oss=z+a+ab+ac+ad+ae+af+ag+ah;
document.getElementById("er").innerText=oss;
}

function Vegso()
{
    var osszeg=parseInt(document.getElementById("eredmeny").value);
    var ossz=parseInt(document.getElementById("ered").value);
    var oss=parseInt(document.getElementById("er").value);
    var mes=parseInt(document.getElementById("eredm").value);
    var vegso=osszeg+mes+ossz+oss;
    document.getElementById("veg").innerText=vegso;
}