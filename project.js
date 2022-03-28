let projects = []

// mengambil data
function addProject() {
    let title = document.getElementById('project-name').value;
    let startdate = document.getElementById('start-date').value;
    let enddate = document.getElementById('end-date').value;
    let content = document.getElementById('content').value;
    let nodejs = document.getElementById('node-js')
    let nextjs = document.getElementById('next-js')
    let reactjs = document.getElementById('react-js')
    let typescript = document.getElementById('typescript')
    let image = document.getElementById('input-project-image').files[0];

    image = URL.createObjectURL(image)

                   
    let oneProject = {
        title:title,
        content:content,
        image:image,
    }

    projects.push(oneProject)

    renderProject()
 
}

// menampilkkan data
function renderProject () {
    let projectContainer = document.getElementById ('contents')

    projectContainer.innerHTML =''

    for (let i = 0; i < projects.length; i++) {
      projectContainer.innerHTML += `

        <div class="myproject-content-item">
        <div class="myproject-item-image">
            <img src=${projects[i].image} alt="">
        </div>
        <div class="myproject-item-title">
            <h3>${projects[i].title}</h3>
            <p>durasi</p>
        </div>
        <div class="myproject-item-text">
            <p>${projects[i].content}</p>
        </div>
        <div class="myproject-item-icon">
            <img id="node-js" src="assets/nodejs.png" alt="">
            <img id="next-js" src="assets/nextjs.png" alt="">
            <img id="react-js" src="assets/react.png" alt="">
            <img id="typescript" src="assets/typescript.png" alt="">
        </div>
        <div class="myproject-item-button">
            <div class="button-left">
                <button>edit</button>
            </div>
            <div class="button-right">
                <button>delete</button>
            </div>
        </div>

    </div>

   `
    }
}
