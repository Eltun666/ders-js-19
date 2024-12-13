let caursel = document.getElementById("containerr")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let box = document.getElementById("minibox")

let data = [

    {
        color: "transparent",
        text: "none"
    },
    {
        color: "blue",
        text: "BLUE"
    },
    {
        color: "red",
        text: "RED"
    },
    {
        color: "green",
        text: "GREEN"
    },
    {
        color: "aqua",
        text: "AQUA"
    }, 
    {
        color: "yellow",
        text: "YELLOW"
    }, 
    {
        color: "brown",
        text: "BROWN"
    },
    {
        color: "violet",
        text: "VIOLET"
    },
    {
        color: "gold",
        text: "GOLD"
    },
    {
        color: "pink",
        text: "PINK"
    },
    {
        color: "transparent",
        text: "none"
    }

]

// console.log(data[0]);


function nextfun(){
    let leftbox = document.getElementById("left-one-box")
    let centerbox = document.getElementById("center-box")
    let rightbox = document.getElementById("right-one-box")
    let i = 1

    next.addEventListener("click", () => {
        if (i < data.length - 2) {  
            i++; 
            updateBoxes();
            animate()
        } else {
            return
        }
    });

    prev.addEventListener("click", () => {
        if (i > 1) { 
            i--; 
            updateBoxes(); 
            animate()
        } else {
            return
        }
    });
     

    function updateBoxes() {
        let a = i - 1
        let b = i + 1

        leftbox.innerHTML = `
        <p>${data[a].text}</p>
        `

        leftbox.style.backgroundColor = `${data[a].color}`

        prev.style.backgroundColor = `${data[a].color}`

        centerbox.innerHTML =`
        <p>${data[i].text}</p>
        `

        centerbox.style.backgroundColor = `${data[i].color}`

        rightbox.innerHTML =`
        <p>${data[b].text}</p>
        `

        rightbox.style.backgroundColor = `${data[b].color}`

        next.style.background= `${data[b].color}`


        console.log(i);
        console.log(data[i]);

        let width = 10;
        let height = 10;
        let borderRadius = 40;
    
        function animate() {
            width += 1;    
            height += 1;    
            borderRadius -= 0.04;  

            box.style.width = `${width}%`;
            box.style.height = `${height}%`;
            box.style.borderRadius = `${borderRadius}%`;
            box.style.backgroundColor = `${data[i].color}`;
            box.style.opacity = `0.5`
            
            if (width < 100) {
                requestAnimationFrame(animate);
            }
        }
        animate()
    }
    updateBoxes();
}

nextfun()