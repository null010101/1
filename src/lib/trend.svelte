<script lang="ts">
  export let tweetsLength: string, trendName: string, trendIn: string
</script>

<main>
  <p class="trendIn">Trend in {trendIn}</p>
  <p class="trendName">{trendName}</p>
  <p class="tweetsLength">{tweetsLength} tweets</p>
</main>

<style>
  .trendIn,
  .tweetsLength {
    font-size: 1.2vmax;
  }

  .trendName {
    font-size: 1.5vmax;
    font-weight: bolder;
  }

  main {
    padding: 1vmax;
    transition-duration: 250ms;
		background-color: inherit;
  }

  main:hover {
    background-color: gray;
  }
</style>