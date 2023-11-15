import React from "react"
import { useState,useCallback,useEffect } from "react";
function App() {
  const [length,setLength]=useState(8);
  const [numbers,setNumbers]=useState(false);
  const [specialChar,setSpecialChar]=useState(false);
  const [password,setPassword]=useState("");
  useEffect(() => {
    const createPassword=()=>{
      var string="qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ";
      var spec="@#$&^*";
      var num="1234567890";
      var pass="";
      if (specialChar) string +=spec;
      if (numbers) string +=num;
      for (let index = 0; index < length; index++) {
        pass += string.charAt(Math.floor(Math.random(string.length)*100))
      }
      setPassword(pass)
    }
    createPassword()
  }, [length,numbers,specialChar])
  
  return (
    <>
      <h1 className="text-zinc-700 text-3xl font-bold text-center mt-20">Password Genrator</h1>
      <div className="flex justify-center pt-4">
        <input type="text" name="pass" readOnly value={password} className="border-2 text-2xl w-1/3 h-16 border-black rounded-l-xl p-2 shadow-lg" />
        <button className="p-2 bg-blue-400 rounded-r-xl border-2 border-black shadow-lg hover:bg-blue-500"><span className="text-white">Copy</span></button>
      </div>
      <div className=" flex justify-center">
      <div>
          <input type="range" min={8} max={100} onChange={(e)=>setLength(e.target.value)} defaultValue={8} id="radioinput1" className="mx-2"/>
          <label htmlFor="radioinput1" className=""><span className="text-lg">Special Chracters</span></label>
        </div>
        <div>
          <input type="checkbox" id="radioinput2" onClick={()=>setNumbers(!numbers)} className="mx-2 ml-5" />
          <label htmlFor="radioinput2"  className=""><span className="text-lg">Numbers</span></label>
        </div>
        <div>
          <input type="checkbox" id="radioinput3" onClick={()=>setSpecialChar(!specialChar)} className="mx-2 ml-5"/>
          <label htmlFor="radioinput3" className=""><span className="text-lg">Special Chracters</span></label>
        </div>
      </div>
        <div>
          <h1 className="text-center text-3xl text-black pt-5">Password length: <span className="bg-white p-3 border-2 border-black rounded-lg shadow-lg shadow-black">{length}</span></h1>
        </div>
    </>
  )
}

export default App
