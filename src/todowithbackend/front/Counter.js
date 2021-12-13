import React,{useState} from 'react'


const Counter = (creat,exp) =>{

  // let created = String(creat)
  // let expire = String(exp)
  // console.log('string created',created,exp)
  
let created = '2021-11-06T18:27:27.712Z'
let expire = '2021-12-06T22:27'

let cYear = created.substr(0, 4)
let cMonth = created.substr(5, 2)
let cDay = created.substr(8, 2)
let cHour = created.substr(11, 2)
let cMin = created.substr(14, 2)
let cSec = 0

let eYear = expire.substr(0, 4)
let eMonth = expire.substr(5, 2)
let eDay = expire.substr(8, 2)
let eHour = expire.substr(11, 2)
let eMin = expire.substr(14, 2)
let eSec = 0


let creationTime = new Date(`${cMonth} ${cDay},${cYear} ${cHour}:${cMin}:${cSec}`)
let expireTime = new Date(`${eMonth} ${eDay},${eYear} ${eHour}:${eMin}:${eSec}`)

let remaining = expireTime - creationTime;
console.log("remaining", remaining)
var od = Math.floor(remaining / (1000 * 60 * 60 * 24));
var oh = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var om = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
var os = Math.floor((remaining % (1000 * 60)) / 1000);

// let remaining1 = `${od}d ${oh}h ${om}mins ${os}s `
// console.log('remaining1', remaining1)


let [d,setD] = useState(od)
let [h,setH] = useState(oh)
let [m,setM] = useState(om)
let [s,setS] = useState(os)

const timer = setInterval(() => {
  // console.log(`${d}d ${h}h ${m}mins ${s}s `)



  // ==========================================>1
  if (d === 0 && h === 0) {              //1    
    if (m === 0 && s === 0) {     //1.1     //  0d 0h 0m 0s
      console.log("no time remaining")
      clearInterval(timer)
    }
    if (m === 0 && s > 0) {     //1.2       //  0d 0h 0m 6s
      setS(s -= 1)
      if (s === 0) {
        console.log("reached zero")
        clearInterval(timer)
      }
    }
    if (m > 0 && s === 0) {   //1.3       //  0d 0h 5m 0s
      setM(m -= 1)
      setS(s = 60)
      setS(s -= 1)
      if (s === 0) {
        setM(m -= 1)
        if (m === 0) {
          clearInterval("time reached ")
        }
      }
    }
    if (m > 0 && s > 0) {   //1.4       //  0d 0h 5m 6s
      setS(s -= 1)
      if (s === 0) {
        setS(s = 60)
        setM(m -= 1)
        if (m === 0) {
          clearInterval(timer)
        }
      }
    }
  }

  // ===============================================> 2
  if (d === 0 && h > 0) {                       //2
    if (m === 0 && s === 0) { //2.1         //  0d 1h 0m 0s 
      setH(h -= 1)
      setS(s = 60)
      setM(m = 59)
      setS(s -= 1)
      if (s === 0) {
        setM(m -= 1)
        if (m === 0) {
          setH(h-=1)
          if (h === 0) {
            clearInterval(timer)
          }
        }
      }
    }
    if (m === 0 && s > 0) { //2.2       //  0d 1h 0m 7s 
      setS(s -= 1)
      if (s === 0) {
        setH(h -= 1)
        setM(m = 59)
        setM(m -= 1)
        if (m === 0) {
          setH(h -= 1)
          if (h === 0) {
            clearInterval(timer)
            console.log('time reached')
          }
        }
      }
    }
    if (m > 0 && s === 0) {      //2.3    //  0d 1h 5m 0s 
      setM(m-=1)
      setS(s = 60)
      setS(s -= 1)
      if (s === 0) {
        setM(m -= 1)
        if (m === 0) {
          setM(m=59)
          setM(m-=1)
          setH(h -= 1)
          if (h === 0) {
            clearInterval(timer)
            console.log('time reached')
          }
        }
      }
    }
    if (m > 0 && s > 0) {     //2.4   //  0d 1h 5m 5s 
      setS(s -= 1)
      if (s === 0) {
        setS(s = 60)
        setM(m -= 1)
        if (m === 0) {
          setH(h -= 1)
          setM(m=59)
          setS(s=60)
          setS(s-=1)
          setM(m-=1)
          if(s===0){
            setM(m-=1)
            if(m===0){
              setH(h-=1)
              if(h===0){
                clearInterval(timer)
              }
            }
          }
        }
      }
    }
  }

  // =================================================>3
  if (d > 0 && h === 0) {   //3
    if (m === 0 && s === 0) {     //3.1 4d 0h 0m 0s 
      setD(d -= 1)
      setH(h = 23)
      setS(s = 60)
      setM(m = 59)
      setS(s -= 1)
      if (s === 0) {
        setM(m -= 1)
        if (m === 0) {
          setH(h -= 1)
          if (h === 0) {
            setD(d -= 1)
            setH(h=23)
            setM(m=59)
            setS(s=60)
            setS(s-=1)
            if(s===0){
              setM(m-=1)
              if(m===0){
                setH(h-=1)
                if(h===0){
                  setD(d-=1)
                  if(d===0){
                    clearInterval(timer)
                  }
                }
              }
            }
          }
        }
      }
    }
    if(m>0 && s===0){  //3.2   4d 0h 5m 0s    
      setM(m-=1)
      setS(s=60)
      setS(s-=1)
      if(s===0){
        setM(m-=1)
        if(m===0){
          setD(d-=1)
          setH(h=23)
          setM(m=59)
          setS(s=60)
          setS(s-=1)
          if(s===0){
            setM(m-=1)
            if(m===0){
              setH(h-=1)
                if(h===0){
                  setD(d-=1)
                  if(d===0){
                    clearInterval(timer)
                  }
                }
            }
          }
        }
      }
    }
    if(m===0 && s>0){ //3.3  4d 0h 0m 6s
      setS(s-=1)
      if(s===0){
        setS(s=60)
        setM(m=59)
        setH(h=23)
        setD(d-=1)
        setS(s-=1)
        if(s===0){
          setM(m-=1)
          if(m===0){
            setH(h-=1)
            if(h===0){
              setD(d-=1)
              setH(h=23)
              setM(m=59)
              setS(s=60)
              setS(s-=1)
              if(s===0){
                setM(m-=1)
                if(m===0){
                  setH(h-=1)
                  if(h===0){
                    setD(d-=1)
                    if(d===0){
                      clearTimeout(timer)
                    }
                  }
                }
              }
            }
          }
        }
      }
    } 
    if(m>0 && s>0){ //3.4  4d 0h 4m 5s
      setS(s-=1)
      if(s===0){
        setM(m-=1)
        if(m===0){
          setD(d-=1)
          setH(h=23)
          setM(m=59)
          setS(s=60)
          setS(s-=1)
          if(s===0){
            setM(m-=1)
            if(m===0){
              setH(h-=1)
              if(h===0){
                setD(d-=1)
                setH(h=23)
                setM(m=59)
                setS(s=60)
                setS(s-=1)
                if(s===0){
                  setM(m-=1)
                  if(m===0){
                    setH(h-=1)
                    if(h===0){
                      setD(d-=1)
                      if(d===0){
                        clearInterval(timer)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

//  =======================================> 4
  if(d>0 && h>0){ //4
    if(m===0 && s===0){   //4.1 3d 3h 0m 0s
      setH(h-=1)
      setM(m=59)
      setS(s=60)
      setS(s-=1)
      if(s===0){
        setM(m-=1)
        if(m===0){
          setH(h-=1)
          if(h===0){
            setD(d-=1)
            setH(h=23)
            setM(m=59)
            setS(s=60)
            setS(s-=1)
            if(s===0){
              setM(m-=1)
              if(m===0){
                setH(h-=1)
                if(h===0){
                  setD(d-=1)
                  if(d===0){
                    clearInterval(timer)
                  }
                }
              }
            }
          }
        }
      }
    }
    if(m>0 && s===0){ //4.2 3d 3h 5m 0s
      setM(m-=1)
      setS(s=60)
      setS(s-=1)
      if(s===0){
        setM(m-=1)
        if(m===0){
          setH(h-=1)
          if(h===0){
            setD(d-=1)
            setH(h=23)
            setM(m=59)
            setS(s=60)
            setS(s-=1)
            if(s===0){
              setM(m-=1)
              if(m===0){
                setH(h-=1)
                if(h===0){
                  setD(d-=1)
                  if(d===0){
                    clearInterval(timer)
                  }
                }
              }
            }
          }
        }
      } 
    }
    if(m===0 && s>0){ //4.3 3d 3h 0m 5s
      setS(s-=1)
      if(s===0){
        setS(s=60)
        setM(m=59)
        setH(h-=1)
        setD(d-=1)
        setS(s-=1)
        if(s===0){
          setM(m-=1)
          if(m===0){
            setH(h-=1)
            if(h===0){
              setH(h=23)
              setD(d-=1)
              setM(m=59)
              setS(s=60)
              setS(s-=1)
              if(s===0){
                setM(m-=1)
                if(m===0){
                  setH(h-=1)
                  if(h===0){
                    setD(d-=1)
                    if(d===0){
                      clearInterval(timer)
                    }
                  }
                }
              }
            }
          }
        }

      }
    }
    if(m>0 && s>0){   //4.4 3d 3h 5m 6s
      setS(s-=1)
      if(s===0){
        setM(m-=1)
        if(m===0){
          setH(h-=1)
          setM(m=59)
          setS(s=60)
          setS(s-=1)
          if(h===0){
            setD(d-=1)
            setH(h=23)
            setM(m=59)
            setS(s=60)
            setS(s-=1)
            if(s===0){
              setM(m-=1)
              if(m===0){
                setH(h-=1)
                if(h===0){
                  setD(d-=1)
                  if(d===0){
                    clearInterval(timer)
                  }
                }
              }
            }
          }
        }
      }
    }

  }

  

}, 1000)


return(
  <>
    Remaining time is {d}d {h}h {m}m {s}s
  </>
)

}





export default Counter;