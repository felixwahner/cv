<script setup lang="ts">
import { History } from 'lucide-vue-next';
defineProps<{
  duration: string | null,
  jobAmount: string | null
}>()
</script>
<template>
    <div class="workexperience">
        <History class="history-icon" color="currentColor" :size="16" :stroke-width="1" />
        I've gained a total of <strong class="duration">{{ duration }}</strong> professional work experience in <strong>{{ jobAmount }}</strong> different positions!
    </div>
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
    line-height: 1.4;
    &::before {
        content: '\25B2';
        color: rgba(131, 131, 131, 0.07);
        position: absolute;
        left: 10px;
        bottom: -17px;
        transform: rotate(180deg)
    }
}
strong {
    font-weight: bold;
}
.history-icon {
    position: relative;
    top: 2px;
}
@media (min-width: 1080px)  {

    .workexperience {
        left: 0;
    }
}
@media (min-width: 1312px)  {
    .workexperience {
        left: -15px;
    }
}
</style>
