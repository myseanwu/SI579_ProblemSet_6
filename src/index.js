import moment from 'moment';


const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
const showTime = document.getElementById("watch")

let count = 0;
let t;
function update_timer(){
    count++;
    // console.log(count);
    showTime.textContent = count;
};


let timeStart =()=>{
    t =setInterval(update_timer,1000);
    startBtn.setAttribute('disabled', 'true');
    stopBtn.removeAttribute('disabled');
    resetBtn.removeAttribute('disabled');

};

let timeStop = ()=>{
    clearInterval(t);
    stopBtn.setAttribute('disabled', 'true');
    startBtn.removeAttribute('disabled');
    resetBtn.removeAttribute('disabled');
};

let timeReset = ()=>{
    count = 0;
    showTime.textContent = count;
    resetBtn.setAttribute('disabled', 'true');
    startBtn.removeAttribute('disabled');
    stopBtn.removeAttribute('disabled');
};

startBtn.addEventListener("click",timeStart);
stopBtn.addEventListener("click",timeStop);
resetBtn.addEventListener("click",timeReset);


// enlarge img, eventlistener
const image = document.getElementById("travel");

image.addEventListener("mouseover", myFunction);
image.addEventListener("mouseout", leave);

function myFunction(){
    image.setAttribute('style','height: 350px; border: 3px solid grey');
};

function leave(){
    image.removeAttribute('style','height: 350px; border: 3px solid grey');
};

// The ontoggle event occurs 
// when the user opens or closes the <details> element.

const details = document.getElementById("myDetails");
details.addEventListener("toggle", myToggle);

function myToggle(){
    alert("This is the ontoggle event!");
}

// mousemove

document.addEventListener("mousemove",(event)=> {myCoordinates(event)})

function myCoordinates(e){
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById('pointing').innerHTML= "Curser Coordinates: ( "+ x + ' , ' + y+' )';
}



//ToDo list

// Add
const x_btn = document.getElementById("adding")
x_btn.addEventListener("click",addingItem);

// addBtn.onclick = addingItem;


function addingItem(){
    let x = document.getElementById("myInput").value;
    if (x){
        const inbox_div = document.getElementsByClassName("inbox")[0]; //parent
        const item_div = document.createElement("div"); // child
        item_div.setAttribute('class','item');
        inbox_div.append(item_div);
        const item_input = document.createElement("input");
        item_input.setAttribute('type',"checkbox");
        item_div.append(item_input);
        const item_p = document.createElement("ul");
        const item_list = document.createElement("li")
        item_div.append(item_p);
        item_p.append(item_list);
        item_list.textContent = x;

        const item_time = document.createElement("li");
        const y = "Added:" + moment(new Date()).calendar();
        item_time.textContent =  y;
        item_p.append(item_time);

        const dueDateInput     = document.getElementById("duedate_input");
        const dueTimeInput     = document.getElementById("duetime_input");
        const due_time = document.createElement("li");
        due_time.setAttribute('class','due_time');

        const dueDate = dueDateInput.valueAsNumber;
        const dueTime = dueTimeInput.valueAsNumber;
        const fullDueDate = dueDate + dueTime + timezoneOffset;
        
        let z = 'Due:' + (moment(fullDueDate).calendar());
        due_time.textContent = z;
        item_p.append(due_time);


        // add remove
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class','remove-button');
        removeBtn.textContent = '(remove)';
        item_p.append(removeBtn);
        removeBtn.addEventListener('click', ()=>{
            item_div.remove();
        })
    
    };

    if (x){
        // document.getElementById("temp").innerHTML = x;
        document.getElementById("myInput").value = "";
    };

};






// time 
const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
console.log(new Date())