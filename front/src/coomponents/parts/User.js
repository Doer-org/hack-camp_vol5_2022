import React from 'react'

const User = (props) => {
  return (
  <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
      <div class="flex ml-2"> <img src={`https://github.com/${props.user.github}.png`} width="50" height="50" class="rounded-full"/>
          <div class="flex flex-col ml-2"> 
            <span class="text-xl font-medium text-gray-700">{props.user.name}</span>
            <span class="text-sm text-gray-400">GitHub : {props.user.github} / Twitter : {props.user.twitter}</span> 
          </div>
      </div>
      <div class="flex flex-col items-center"> <span class="font-bold text-green-500">Ready ✔</span> <i class="fa fa-star text-green-400"></i> </div>
  </li>
  )
}

export default User



