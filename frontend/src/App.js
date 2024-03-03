import logo from './logo.svg';
import './App.css';

function MenuItem({name,tasks}){
    return (
        <div className="MenuItem">
            <div className="MenuItem-row">
                <div className="MenuItem-tasks-count">
                    {tasks.length}
                </div>
            </div>
            <div className="MenuItem-row">
                <div className="MenuItem-name">
                    {name}
                </div>
            </div>
        </div>
    )
}

function SearchBar(){
    return (
        <input type="text" placeholder="Search" className="SearchBar"></input>
    );
}

function Menu({categories, tasks}){
    const menuItems = [];
    categories.forEach((category)=>{
        menuItems.push({name: category,tasks: tasks});
    });
    for(let i = 0; i < menuItems.length; i++){
        let item = menuItems[i];
        menuItems[i] = <MenuItem name={item.name} tasks={item.tasks}/>;
    }
    return (
        <div className="Menu">
            {menuItems}
        </div>
    );
}

function SideBar({categories,tasks}){
    return (
        <div className="SideBar">
            <SearchBar/>
            <Menu categories={categories} tasks={tasks}/>
        </div>
    )
}

function Heading({name}){
    return (
        <>
            <div className="Heading">
                <div className="Heading-add-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="rgb(153,153,154)" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
                <div className="Heading-name">
                    {name}
                </div>
            </div>
            <div className="Inform-completed-task">
                <div className="inform-text">
                    There are 269 tasks done &#8729;&nbsp;
                </div>
                <div className="delete-completed-tasks">
                    Delete
                </div>
                <div className="show-completed-tasks">
                    Show
                </div>
            </div>
        </>
    )
}

function Task({task}){
    return (
        <></>
    )
}

function TaskTableAllList({listName, tasks}){
    return (
        <>
        </>
    )
}

function TaskTableAll({tasks}){
    let tasksOfLists = {}
    tasks.forEach((task)=>{
        if(!tasksOfLists.hasOwnProperty(task.taskList)){
            tasksOfLists[task.taskList] = [task];
        }
        else{
            tasksOfLists[task.taskList].push(task);
        }
    })
    let taskListJsx = [];
    for(var list in tasksOfLists){
        taskListJsx.push(<TaskTableAllList listName={list} tasks={tasksOfLists[list]}/>)
    }
    return (
        <div className="TaskTable">
            {taskListJsx}
        </div>
    )
}

function MainTable({name,tasks}){
    return (
        <div className="MainTable">
            <Heading name={name}/>
            <TaskTableAll tasks={tasks}/>
        </div>
    )
}

function Reminder({categories,tasks}) {
    let name = "All";
    let displayTasks = [];
    return (
        <div className="Reminder">
            <SideBar categories={categories} tasks={tasks}/>
            <MainTable name={name} tasks={displayTasks}/>
        </div>
    );
}

const TASKS = [
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"}
];

const CATEGORIES = [
    "Today", "All", "Flag", "Done", "Deadline"
];

export default function App(){
    return (
        <div className="App">
            <Reminder categories={CATEGORIES} tasks={TASKS}/>
        </div>
    );
};
