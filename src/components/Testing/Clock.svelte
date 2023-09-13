<script>
</script>

<div class="clock">
  <div class="line" />
  <div class="line minute" />
  <div class="line hour" />
  <div class="dot" />
</div>

<style>
  .clock {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    height: 300px;
    width: 300px;
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    outline: 2px solid red;
  }
  .dot,
  .line {
    position: absolute;
  }
  .dot {
    height: 30px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: rgb(242, 66, 66);
  }
  .line {
    height: 100px;
    width: 5px;
    background-color: rgba(99, 60, 60, 0.519);
    border-radius: 10px 10px 0 0;
    transition: all 350ms ease-in-out;
    animation: clock 60s linear infinite;
    transform-origin: bottom;
    margin-bottom: 95px;
  }

  .line.minute {
    animation: clock 3600s linear infinite;
    height: 80px;
    width: 9px;
    background-color: rgb(62, 95, 168);
  }
  .line.hour {
    animation: clock 216000s linear infinite;
    height: 50px;
    width: 13px;
    background-color: rgb(31, 119, 97);
    margin-bottom: 50px;
  }

  @keyframes clock {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
