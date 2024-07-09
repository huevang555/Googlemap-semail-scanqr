<template>
    <gmap-map 
    v-bind:center="center"
    v-bind:zoom="7"
    style=" height:225px"
    >
        <gmap-marker
        v-for="(m,index) in markers"
        v-bind:key="index"
        v-bind:position="m.position"
        v-bind:clickable="true"
        >
        </gmap-marker>
    </gmap-map>
</template>
<script>
export default {
    data() {
        return{
            center:{lat:17.9772156,lng:102.6101404},
            markers:[
                {
                    position:{lat:17.9772156,lng:102.6101404}
                },
                {
                    position:{lat:17.9772156,lng:102.6101404}
                }
            ]
        };
        
    },
}
</script>

<style>

</style>