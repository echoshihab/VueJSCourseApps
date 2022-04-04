<template>
    <ul>
        <li v-for="user in users" :key="user">{{ user }}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
        };
    }
}
</script>