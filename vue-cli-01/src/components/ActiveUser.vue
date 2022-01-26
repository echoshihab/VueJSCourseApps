<template>
    <header>
        <h1>Name: </h1>
        <h1>Age: </h1>
    </header>
</template>

<script>
 export default {
     props: {
         name: {
             type: String,
             required: true
         },
         Age: {
             type: String,
             required: true
         },
     }
 }
</script>