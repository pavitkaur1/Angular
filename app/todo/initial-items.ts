export class Init {
    load() {
        if(localStorage.getItem('todolist') == null || localStorage.getItem('todolist') == undefined) {
            console.log("Creating initial item list");
            var todolist = [
                {
                    "id":1,
                    "name":"Go to Gym",
                    "complete":"WIP"
                },
                {
                    "id":2,
                    "name":"Client Meeting at 11",
                    "complete":"WIP"
                },
                {
                    "id":3,
                    "name":"Call Mom",
                    "complete":"WIP"
                },
                {
                    "id":4,
                    "name":"Go Shopping",
                    "complete":"WIP"
                }
            ];
            localStorage.setItem('todolist',JSON.stringify(todolist));
        } else {
            console.log("loaded the item list from local storage");
        }
    }
}