import React from 'react';
import { Link } from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from 'chart.js'
ChartJS.register(Tooltip,ArcElement,Legend);



const Box = ({ value, title }) => {
  return (
    <div>
           <p>{title}</p>
      <h3>{value}</h3>
   
    </div>
  );
};

const Dashboard = () => {
    const data={
          labels:["preparing ","Shipped","Delivered"],
        datasets :[{
            label:"# of order ",
            data:[2,3,4],
            backgroundColor:["rgba(159,63,176,0.1)","rgba(78,63,176,0.1)","rgba(156,0,60,0.2)"],
            borderColor:["rgb(159,63,176)","rgb(78,63,176)","rgb(156,0,60)"],
            borderwidth:1
    
        }]
    
    }
  return (
    <section className='dashboard'>
      <main>
        <article>
          <Box title="Users" value={213} />
          <Box title="Order" value={213} />
          <Box title="Income" value={213} />
        </article>
        <section>
          <div>
            <Link to="/admin/orders">View Orders</Link>
            <Link to="/admin/user">view Users</Link>
          </div>
          <aside>

            <Doughnut data={data}/>
          </aside>
        </section>
      </main>
    </section>
  );
};

export default Dashboard;
