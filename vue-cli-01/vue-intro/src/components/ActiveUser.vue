<template>
    <header>
        <h1>Name: {{name}} </h1>
        <h1>Age: {{age}} years </h1>
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
             type: Number,
             required: true
         },
     }
 }
</script>