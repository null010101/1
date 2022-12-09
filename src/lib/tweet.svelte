<script lang="ts">
  export let autorName: string,
  autorNickname: string,
  tweet: string
</script>

<main title={autorName + ' tweet'}>
  <img src={'https://api.multiavatar.com/' + autorName + '.png'} alt={autorName}>
  <div>
		<p class="autorName">{autorName}<p/>
		<p class="autorNickname">@{autorNickname}</p>
		<p class="tweet">{tweet}</p>
	</div>
</main>

<style>
	p {
		white-space: normal;
	}

  main {
		padding: 1vmax;
		background-color: inherit;
		transition-duration: 250ms;
		height: auto;
		display: flex;
  }

	main:hover {
		background-color: gray;
	}

	.autorName {
		font-size: 1.4vmax;
		font-weight: bolder;
	}

	.autorNickname {
		color: #777777;
		font-size: 1.3vmax;
	}

	.tweet {
		font-size: 1.4vmax;
	}

	div {
		margin-left: 1vmax;
		margin-right: 1vmax;
	}

	img {
		height: 2.5vmax;
		width: 2.5vmax;
	}
</style>