<template>
<form @submit.prevent="submitData">
    <div>
        <label>Name: </label>
        <input type="text" v-model="enteredName">
    </div>
    <div>
        <label>Age: </label>
        <input type="text" v-model="enteredAge">
    </div>
    <div>
        <button>Add User Data</button>
    </div>
</form>
</template>

<script>
export default {
    emits: ['add-data'],
    data(){
        return {
            enteredName: '',
            enteredAge: '',
        }
    },
    methods: {
        submitData(){
            this.$emit('add-data', this.enteredName, this.enteredAge);
        }
    }
};
</script>