function sr48() {
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("hello raina1");
        },100);
    });
   
}
function ms() {
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                resolve("hello MS1");
            },3000);
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

async function caller()
{
    const sr47result=await sr48();
    console.log(sr47result);
    const msresult=await ms();
    console.log(msresult);
    const jadduresult=await jaddu();
    console.log(jadduresult);
}
caller();