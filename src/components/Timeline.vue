<script lang="ts" setup></script>
<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>
<style>
.timeline {
  margin-top: 24px;
}
.timeline .card {
  position: relative;
  padding-left: 48px;
  border-left: 4px dotted #ccc;
  margin-left: 24px;
  padding-bottom: 48px;
  &:before {
    content: '';
    position: absolute;
    left: -14px;
    top: 1px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #000;
  }
}
</style>
