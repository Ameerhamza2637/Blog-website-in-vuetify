<template>
    <v-app>
        <Navbar/>
    </v-app>
    <Sidebar/>
    <Card/>
</template>

<script>
    import Sidebar from '@/layouts/Sidebar.vue'
    import Navbar from '@/layouts/Navbar.vue'
    import Card from '@/layouts/Card.vue'
    export default
    {
        components:
        {
            Sidebar,
            Navbar,
            Card
        }
    }
</script>