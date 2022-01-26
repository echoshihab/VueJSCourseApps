<template>
    <header>
        <h1>Name: {{name}} </h1>
        <h1>Age: {{age}} </h1>
    </header>
</template>

<script>
 export default {
     props: {
         name: {
             type: String,
             required: true
         },
         age: {
             type: String,
             required: true
         },
     }
 }
</script>