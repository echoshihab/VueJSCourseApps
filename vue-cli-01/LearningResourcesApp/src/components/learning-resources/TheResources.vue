<template>
<base-card>
<base-button @click="setSelectedTab('stored-resources')" :mode="storedResourceBtnMode">Stored Resources</base-button>
<base-button @click="setSelectedTab('add-resource')" :mode="addResourceBtnMode">Add Resource</base-button>
</base-card>
<keep-alive>
<component :is="selectedTab"></component>
</keep-alive>

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
        },
        addResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resourceId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resourceId);
            this.storedResources.splice(resIndex, 1);
        }
    },
    provide() {
        return {
            addResource: this.addResource,
            deleteResource: this.deleteResource,
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