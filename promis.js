function sr48() {
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("hello raina1");
        },500);
    });
   
}
function ms() {
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                resolve("hello MS1");
            },500);
        });
}

function jaddu()
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                resolve("hello jaddu1");
            },500);
        });
}

sr48().then(value=>{console.log(value); return ms()})
      .then(value=>{console.log(value); return jaddu()})
      .then(value=>{console.log(value)});

