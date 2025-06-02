import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const datas=[
  {name:'judit',
    avatar:'https://i.pravatar.cc/48',
    id:1
  },
  {
    name:'karoly',
    avatar:'https://i.pravatar.cc/48',
    id:2
  },
    {name:'Nora',
    avatar:'https://i.pravatar.cc/48',
    id:3
  },
    {name:'Aron',
    avatar:'https://i.pravatar.cc/48',
    id:4
  },
    {name:'Liliana',
    avatar:'https://i.pravatar.cc/48',
    id:5
  },
]

function App() {
  datas.map(data=>console.log(data))

  return (
    <>
      <div className='grid grid-cols-2 gap-4 m-4'>
          <div className=' min-h-[100px] mb-4'>

              <ul className='bg-pink-100 rounded-2xl shadow-2xl py-0.5'>
                {datas.map(data=>(
                  
                  <li className={`rounded-2xl place-items-center grid grid-cols-12 gap-4 m-5 ${data.id%2!==0?'bg-red-400':'bg-orange-400'}`} key={data.name}>
                    <img className='col-span-2 rounded-3xl ' src={data.avatar} alt="avatar" />

                    <div className='mr-2 col-span-7'>
                      <div className='text-2xl'>{data.name}</div>
                      <div className='text-lg'>judit owes you nothing</div>
                    </div>
                    <button className='mr-4 float-right bg-red-600 text-amber-300 col-span-3'>selecta</button>
              
                  </li>
                ))}
              </ul>











                
              

              <div className='grid h-[244px] bg-pink-200 shadow-2xl rounded-2xl gap-4 text-2x mt-3'>
                
                  <div className='text-4xl ml-6 mt-4 font-bold'>Adding a Friend</div>
                
                  <div className='flex justify-between'>
                    <div className='ml-6'>Friend Name?</div>
                    <input className='bg-blue-100 mr-5' type="text" name="bill" id="bill" />
                  </div>

                  <div className='flex justify-between'>
                    <div className='ml-6'>Image URL</div>
                    <input className='bg-blue-100 mr-5' type="text" name="bill" id="bill" value={'https://i.pravatar.cc/48'}/>
                  </div>

                  <div className='flex justify-between'>
                    <div>
                      <button type='button' className='float-right ml-5 bg-blue-300 hover:bg-blue-500 text-blue-950 font-bold rounded w-[153px]'>Close</button>
                    </div>
                    <div>
                      <button type='button' className='float-right mr-5 bg-blue-300 hover:bg-blue-500 text-blue-950 font-bold rounded w-[153px]'>Add Friend</button>
                    </div>
                  </div>

              </div>
              
          </div>
      






          <div className='grid h-[344px] bg-blue-300 shadow-2xl rounded-2xl gap-4 text-2x'>
          
            <div className='text-4xl ml-6 mt-4 font-bold'>Splitting with Judit</div>
          
            <div className='flex justify-between'>
              <div className='ml-6'>How much was the Bill?</div>
              <input className='bg-blue-100 w-[153px] mr-5' type="text" name="bill" id="bill" />
            </div>

            <div className='flex justify-between'>
              <div className='ml-6'>How much did u pay?</div>
              <input className='bg-blue-100 mr-5 w-[153px]' type="text" name="bill" id="bill" />
            </div>

            <div className='flex justify-between'>
              <div className='ml-6'>How much did Judit pay?</div>
              <input disabled className='bg-blue-300 mr-5 read-only w-[153px]' type="text" name="bill" id="bill" />
            </div>
            
            <div className='flex justify-between'>
              <div className='ml-6'>🤑who is paying the Bill?</div>
              <select className='bg-blue-100 mr-5 w-[153px]'  name="bill" id="bill">
                  <option value="me">me</option>
                  <option value="judit">judit</option>

              </select>
            </div>

            <div>
            <button type='button' className='float-right mr-5 bg-blue-300 hover:bg-blue-500 text-blue-950 font-bold rounded w-[153px]'>split bill</button>
            </div>


          </div>
      </div>
     
    </>
  )
}

export default App

