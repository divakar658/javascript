function sr48(callback) {
        console.log("hello raina");
        callback();
  }
  
  function ms(callback) {
    console.log("hello ms");
    callback();
  }

  function jaddu()
  {
    console.log("welcome jaddu");
    
  }
  
sr48(()=>
{
    ms(()=>
    {
        jaddu();
    });
});
//call back hell