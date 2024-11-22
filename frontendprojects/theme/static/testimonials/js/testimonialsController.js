const  container =  document.getElementById('testimonial-container')
const testimonial = document.getElementById('testimonial')
const userImage = document.getElementById('user-image')
const userName = document.getElementById('user-name')
const userRole = document.getElementById('user-role')

const testimonials = [
    {
        name: 'Mia Price',
        position: 'Marketing Manager',
        photo: 'https://randomuser.me/api/portraits/women/80.jpg',
        userText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis a omnis quae nostrum eaque, tempore incidunt, reprehenderit sunt autem tempora. Unde quis vel neque quas, inventore qui adipisci quae placeat quo repellat ipsum quam labore laborum saepe accusamus itaque soluta nesciunt modi minus. Est ullam magnam inventore voluptate vero.`        
    },
    {
        name: 'John Smith',
        position: 'Art Director',
        photo: 'https://randomuser.me/api/portraits/men/69.jpg',
        userText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis a omnis quae nostrum eaque, tempore incidunt, reprehenderit sunt autem tempora. Unde quis vel neque quas, inventore qui adipisci quae placeat quo repellat ipsum quam labore laborum saepe accusamus itaque soluta nesciunt modi minus. Est ullam magnam inventore voluptate vero.`
    },
    {
        name: 'Ellen Myers',
        position: 'Developer Advocate',
        photo: 'https://randomuser.me/api/portraits/women/72.jpg',
        userText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis a omnis quae nostrum eaque, tempore incidunt, reprehenderit sunt autem tempora. Unde quis vel neque quas, inventore qui adipisci quae placeat quo repellat ipsum quam labore laborum saepe accusamus itaque soluta nesciunt modi minus. Est ullam magnam inventore voluptate vero.`
    },
    {
        name: 'Josh Griffins',
        position: 'Technical Advisor',
        photo: 'https://randomuser.me/api/portraits/men/42.jpg',
        userText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis a omnis quae nostrum eaque, tempore incidunt, reprehenderit sunt autem tempora. Unde quis vel neque quas, inventore qui adipisci quae placeat quo repellat ipsum quam labore laborum saepe accusamus itaque soluta nesciunt modi minus. Est ullam magnam inventore voluptate vero.`
    },
    {
        name: 'Jade Lee',
        position: 'Virtual Assistant',
        photo: 'https://randomuser.me/api/portraits/women/69.jpg',
        userText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis a omnis quae nostrum eaque, tempore incidunt, reprehenderit sunt autem tempora. Unde quis vel neque quas, inventore qui adipisci quae placeat quo repellat ipsum quam labore laborum saepe accusamus itaque soluta nesciunt modi minus. Est ullam magnam inventore voluptate vero.`        
    },

]


let idx = 1

function updateTestimonial() {
    const {name, position, photo, userText} = testimonials[idx];

    testimonial.innerText = userText;
    userImage.src = photo;
    userName.innerHTML = name;
    userRole.innerText = position;

   idx++

   if (idx > testimonials.length - 1) {
    idx = 0
   }
   console.log(idx)

}

setInterval(updateTestimonial, 10000)


