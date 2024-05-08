<template>
    <div class="bg-[#F3FAFD]">
        <DashboardHeader/>
        <div>
            <div>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Dashboard.svg" alt="Dashboard Logo"/>
                    <p class="text-[#214953] font-semibold text-[40px]">Dashboard</p>

                </div>
                <div class="flex items-center gap-2 mt-11">
                    <img src="../../assets/icons/profile.svg" alt="Dashboard Logo"/>
                    <p class="text-[#37798A] font-regular text-[32px]">Profile</p>

                </div>
                <hr class="w-60 text-[#AFB1B6]">

                <div class="flex items-center gap-2 mt-11">
                    <img src="../../assets/icons/viewQRcode.svg" alt="Dashboard Logo"/>
                    <p class="text-[#37798A] font-regular text-[32px]">View QR Codes</p>

                </div>
                <hr class="w-60 text-[#AFB1B6]">

                <div class="flex items-center gap-2 mt-11">
                    <img src="../../assets/icons/Settings-alt.svg" alt="Dashboard Logo"/>
                    <p class="text-[#37798A] font-regular text-[32px]">Settings</p>

                </div>
                <hr class="w-60 text-[#AFB1B6]">

                <div class="flex items-center gap-2 mt-11">
                    <img src="../../assets/icons/help-circle.svg" alt="Dashboard Logo"/>
                    <p class="text-[#37798A] font-regular text-[32px]">Help and Support</p>

                </div>
                <hr class="w-60 text-[#AFB1B6]">
            

            </div>
            <div>
                
            </div>

        </div>
    </div>
</template>

<script>
    import DashboardHeader from '../../components/Dashboard/DashboardHeader.vue';
    export default {
        components:{
            DashboardHeader


        }
        
    }
</script>

<style scoped>

</style>