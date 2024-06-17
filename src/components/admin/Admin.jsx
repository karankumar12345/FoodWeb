import React from 'react'
// import {Link} from 'react-router-dom'
// import {AiOutlineEye} from "react-icons/ai"
function Admin() {
    const arr=[1,2,3]
  return (
   <section className='table'>

<main>
        <table>

            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>
            <tbody>
                {
                   arr.map(i=>(
                    <tr key={i} >
                    
                    <td>#fdfdfdsdfs</td>
                    <td>karan</td>
                    <td>

                        <img  src="https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH" alt="" height={50} />
                    </td>
                    <td>Admin</td>
                    <td>{"24-03-2005"}</td>
                  

                </tr>
                   ))
                }
            </tbody>
        </table>
    </main>
   </section>
  )
}

export default Admin

