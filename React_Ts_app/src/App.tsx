import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

type AppProps = {
  tasks: Task[];
};

function App({ tasks }: AppProps) {
  const taskList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));

  const filterNames = ["All", "Active", "Completed"];
  const filterList = filterNames.map((name) => (
    <FilterButton key={name} name={name} isPressed={name === "All"} />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TO DO APK</h1>
      <Form />
      
      <div className="filters btn-group stack-exception">
      {filterList}

      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list" //
        // The role attribute helps assistive technology explain what kind of element a tag represents
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {/* Assestive technology , so that user can understand the purpose of list  */}
      {taskList}
      
      </ul>
      {/* <h1 hidden></h1> */}
    </div>
  );
}

export default App;
