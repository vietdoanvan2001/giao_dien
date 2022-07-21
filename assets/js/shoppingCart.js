var products = document.querySelectorAll('.row');

function sol(){
    var sum=0;
    products.forEach(function(product,index){
        var gia = product.querySelector('.gia').innerHTML;
        var sl = product.querySelector('.amount').value;
        if(sl==0){
            product.style.display = "none";
        }
        console.log( Number(gia)*Number(sl))
        product.querySelector('.tamTinh').innerHTML = ( Number(gia)*Number(sl));
        sum+=Number(gia)*Number(sl)
    })
    document.querySelector('.total').innerHTML = "Total: "+sum+" VNĐ";
}


var edit = document.querySelectorAll('.edit');
edit.forEach(function(btn){
    btn.onclick = function(){
        sol();
    }
})

var del = document.querySelectorAll('.delete');
del.forEach(function(btn){
    btn.onclick = function(){
        var parent = (btn.parentElement).parentElement;
        parent.querySelector('.amount').value = 0;
        sol();
    }
})


var back = document.querySelector('.back');
back.onclick = function() {
    window.location.href = "index.html";
}

var next = document.querySelector('.next');
next.onclick = function() {
    window.location.href = "bill.html";
}



