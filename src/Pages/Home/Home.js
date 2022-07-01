import React from 'react';
import AllTasks from '../../components/ALLTasks/AllTasks';
import Task from '../../components/Task/Task';

const Home = () => {
  return (
    <>
     {/* task section */}
     <section>
      <Task />
     </section>
     <section>
      <AllTasks/>
     </section>
    </>
  );
};

export default Home;