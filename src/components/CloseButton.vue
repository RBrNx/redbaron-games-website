<template>
  <div class="closeButton" @click="$emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
      <g>
        <circle class="circle" cy="30" cx="30" r="20" stroke-width="2" />
        <line class="line line1" x1="20" y1="30" x2="40" y2="30" />
        <line class="line line2" x1="20" y1="30" x2="40" y2="30" />
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

.closeButton {
  height: 60px;
  width: 60px;
  position: absolute;
  top: 25px;
  right: 20px;
  z-index: 99;
  background-color: transparent;
  cursor: pointer;

  .circle {
    fill: transparent;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    stroke: $primaryRed;
    transform-origin: 50% 50%;
    transform: rotate(-270deg);
    transition: all 800ms ease;
  }

  .line {
    stroke-width: 2;
    stroke: $bodytextGrey;
    transform-origin: 50% 50%;
    transition: all 500ms ease;
    transform: rotate(45deg);
  }

  .line2 {
    transform: rotate(-45deg);
  }

  &:hover {
    cursor: pointer;

    .circle {
      stroke-dashoffset: 0;
      transform: rotate(-90deg);
      fill: lighten($primaryGrey, 15%);
    }

    .line1 {
      transform: rotate(135deg);
    }

    .line2 {
      transform: rotate(45deg);
    }
  }
}
</style>

