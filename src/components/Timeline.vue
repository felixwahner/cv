<script lang="ts" setup></script>
<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>
<style>
.timeline {
  margin-top: 12px;
}
.timeline .card {
  position: relative;
  padding-left: 16px;
  border-left: 4px dotted #ccc;
  margin-left: 24px;
  padding-bottom: 48px;
  padding-right: 16px;
  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--purple-brand);
  }
}
@media (min-width: 1080px)  {
  .timeline .card {
    padding-left: 48px;
    margin-left: 24px;
    padding-right: 0;
    left: -14px;
    &:before {
      left: -14px;
      width: 24px;
      height: 24px;
    }
  }
}


</style>
