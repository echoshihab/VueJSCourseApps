<template>
<section>
<h2>My Friends</h2>
<ul>
    <friend-contact
    v-for="friend in friends"
    :key="friend.id"
    :id="friend.id"
    :name="friend.name"
    :phone-number="friend.phone"
    :email-address="friend.email"
    :is-favorite="friend.isFavorite"
    @toggle-favorite="toggleFavoriteStatus">
    </friend-contact>
    <friend-contact
    id="pamId"
    name="Pam Beattie from child component"
    phone-number="212 121 1211"
    email-address="pam@test.com">
    </friend-contact>
</ul>
</section>
</template>

<script>
export default{
    data(){
        return {
            friends: [
                {
                    id: "avaApp",
                    name: "Ava Adams from Parent",
                    phone: "111 111 1111",
                    email: "ava@test.com",
                    isFavorite: true,
                },
                {
                    id: "pamApp",
                    name: "Pam Beattie from parent",
                    phone: "222 222 2222",
                    email: "pam@test.com",
                    isFavorite: false
                }

            ]
        }
    },
    methods: {
        toggleFavoriteStatus(friendId) {
        const friend = this.friends.find(friend => friend.id === friendId);
        friend.isFavorite = !friend.isFavorite;
        }
    }
}
</script>