<template>
    <div class="container" style="width:20rem;">
        <div
            
			style=" background:rgb(192, 192, 241); width: 20rem; overflow: auto; max-height: 300px">
            <div class="card-body">
                <h5 class="card-title">Notes <i @click="$emit('close-Todo')" style="float: right" class="bi bi-x-lg"></i></h5>
               <div> 
                    <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="Add a title"
                    v-model="note.title"
                    required
                    />
                    <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="Add a content"
                    v-model="note.content"
                    required
                    />
                    <button type="submit" class="btn btn-primary" @click="postNote()">Add a new note</button>
                </div>
            </div>
            <div class="card-body" v-for="note in notes" :key="note._id">
            <button style="float: right" class="bi bi-x-lg" id="deleteButton" @click="deleteNote(note._id)"></button>
            <input
					type="text"
					class="form-control"
					id="floatingInputGrid"
					placeholder="Search..."
					v-model="note.title"
					required
				/>
                <input
					type="text"
					class="form-control"
					id="floatingInputGrid"
					placeholder="Search..."
					v-model="note.content"
					required
				/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "PostIt",
    data() {
    return {
        note:[],
        notes: [],
        newNote: ''
    }
  },
  methods: {
      async getAllTodos () {
            fetch('http://146.59.157.162:3007/todos', {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
                })
                .then (response => response.json())
                .then(data => { this.notes = data.notes}) 
                .catch(error => console.log(error));
                console.log("this.notes",this.notes);
        },
        async postNote () {
            await fetch(`http://146.59.157.162:3007/todos`,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({"title": this.note.title, "content": this.note.content})
        },),
      this.getAllTodos();
      this.note.title = "";
      this.note.content = "";
    },    
    async deleteNote (_id) {
         await fetch(`http://146.59.157.162:3007/todos/${_id}`,{
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      },
      }),
     this.getAllTodos();
    },       
},
mounted() {
        this.getAllTodos()
    },   
};
</script>

<style scoped>
h5 {
    margin-top : 2,5%;
}
/* .container {
    margin-bottom : 5%;
} */
button {
    margin-top : 4%;
}
#deleteButton {
    margin-top : 4%;
    background: none;
    border: none;
    outline: none;
	resize: none;
}

.container { 
    width: 20rem;
    background:rgb(192, 192, 241);
}

.container:hover,
.container:focus {
    transform: rotate(- 6deg);
    transition: 0.15s linear;
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
	transform: scale(1.25);  
}

input:hover,
input:focus {
    background: none;
    border: none;
    outline: none;
	resize: none; 
}

input {
    background: none;
    border: none;
    outline: none;
	resize: none;
    font-size: 1.5rem;
	font-family: "Lato", sans-serif;
	text-align: center;
}
</style>