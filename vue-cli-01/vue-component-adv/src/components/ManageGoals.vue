<template>
<h2>
    Manage Goals
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
</h2>
</template>

<script>
export default {
    methods: {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === '') {
                alert('Input must not be empty!');
            }
        }
    }
}
</script>