function hello(params) {

    var x = [] ;
    var z = 0 ;
    var s = 0 ;
    
    for (let i = 1; i <= 10 ; i++) {
        x.push(i);
        
        if (i % 2 == 1 ){
           z= z + i  ;
        } else {s = s +i}
        
        console.log(x, z, s);
    }
    
    
}
hello();