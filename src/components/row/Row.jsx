import React from 'react'

export const Row = () => {
  return (
    <tr>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">Hart Hagerty</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </div>
    </td>
    <td>
      Zemlak, Daniel and Leannon
      <br />
      <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
    </td>
    <td>
    <button className="btn btn-active btn-accent" style={{color:'white'}}>Edit</button>
    </td>
    <th>
    <button className="btn btn-error" style={{color:'white'}}>Delete</button>
    </th>
  </tr>
  )
}
