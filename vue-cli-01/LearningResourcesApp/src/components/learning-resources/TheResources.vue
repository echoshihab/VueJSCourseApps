<template>
<base-card>
<base-button @click="setSelectedTab('stored-resources')" :mode="storedResourceBtnMode">Stored Resources</base-button>
<base-button @click="setSelectedTab('add-resource')" :mode="addResourceBtnMode">Add Resource</base-button>
</base-card>
<component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    
    components:{
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                { 
                id: 'oficial-guide', 
                title: 'Official Guide', 
                description: 'The official Vue.js documentation',
                link: 'https://vuejs.org'
                },
                {
                id: 'google', 
                title: 'Google', 
                description: 'Learn to google...',
                link: 'https://google.org'
                }
            ]
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    computed: {
        storedResourceBtnMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResourceBtnMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    }
}
</script>