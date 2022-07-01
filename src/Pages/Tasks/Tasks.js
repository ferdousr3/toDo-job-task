import AllTasks from '../../components/ALLTasks/AllTasks';
import PageTitle from '../../components/PageTitle/PageTitle';
import Task from '../../components/Task/Task';

const Tasks = () => {
  return (
    <>
    <PageTitle title='All Task' />
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

export default Tasks;