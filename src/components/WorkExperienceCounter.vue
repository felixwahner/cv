<script setup lang="ts">
defineProps<{
  duration: string,
  jobAmount: string
}>()
</script>
<template>
  <div class="workexperience">I've gained a total of <strong class="duration">{{ duration }}</strong> professional work experience in <strong>{{ jobAmount }}</strong> different positions!</div>
</template>
<style scoped>
    .workexperience {
        position: relative;
        margin-left: 10px;
        background-color: rgba(131, 131, 131, 0.07);
        display: inline-block;
        color: #000;
        padding: 6px;
        border-radius:6px;
        margin-bottom: 24px;
        margin-right: 12px;
        line-height: 1;
        &::before {
            content: '\25B2';
            color: rgba(131, 131, 131, 0.07);
            position: absolute;
            left: 10px;
            bottom: -14px;
            transform: rotate(180deg)
        }
    }
    strong {
        font-weight: bold;
    }
    
@media (min-width: 1080px)  {

    .workexperience {
        left: 0;
    }
}
@media (min-width: 1312px)  {

    .workexperience {
        left: -15px;
        &::before {
        }
    }
}
</style>
