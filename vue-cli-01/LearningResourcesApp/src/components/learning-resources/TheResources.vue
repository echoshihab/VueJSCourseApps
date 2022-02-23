<template>
<base-card>
<base-button @click="setSelectedtab('stored-resources')">Stored Resources</base-button>
<base-button @click="setSelectedtab('add-resource')">Add Resource</base-button>
</base-card>
<component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import Addresource from './AddResource.vue';

export default {
    
    components:{
        StoredResources,
        Addresource
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
    }
}
</script>