<template>
<li>
    <header>
        <h1>{{ name }} {{isFavorite ? "(Favorite)" : ''}} </h1>
    </header>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ phoneNumber }}</li> 
        <li><strong>Email:</strong>{{ emailAddress }}</li> 
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
</li>
</template>

<script>

const validateId = (id) => {
 if(id){
            return true;
          } else{
            console.warn("Id is missing!");
            return false;
          }
};
export default {
      props:{
        id: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        emailAddress: {
          type: String,
          required: true,
        },
        isFavorite: {
          type: Boolean,
          required: false,
          default: false,
          // validator: function(value){
          //   return value === '1' || value === '0';
          // }
        }
      },
      emits: {
        'delete-friend': validateId,
        'toggle-favorite': validateId,
      },
    data(){
        return{
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
           this.$emit('toggle-favorite', this.id);
        },
        
    }
};
</script>

