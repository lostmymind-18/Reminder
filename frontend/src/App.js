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
        <div className="Heading">
            <button type="button"></button>
            <div className="Heading-name">
                {name}
            </div>
        </div>
    )
}

function Task({task}){
    return (
        <></>
    )
}

function TaskTable({tasks}){
    let taskJsx = []
    for(let i = 0; i < tasks.length; i++){
        taskJsx.push(<Task task={tasks[i]}/>);
    }
    return (
        <div className="TaskTable">
            {taskJsx}
        </div>
    )
}

function MainTable({name,tasks}){
    return (
        <div className="MainTable">
            <Heading name={name}/>
            <TaskTable tasks={tasks}/>
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
    {status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"}
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
