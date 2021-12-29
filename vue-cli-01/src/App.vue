<template>
<section>
<h2>My Friends</h2>
<ul>
    <friend-contact></friend-contact>
</ul>
</section>
</template>

<script>

    export default{
        data(){
            return{
                friends: [
                    {
                        id: "Ava",
                        name: "Ava Adams",
                        phone: '111 111 1111',
                        email: 'ava@test.com'
                    },
                                    {
                        id: "Pam",
                        name: "Pam Beatie",
                        phone: '222 222 2222',
                        email: 'ava@test.com'
                    }
                    
                ]
            };
        }
};


</script>