<script lang="ts">
  import Trend from "$lib/trend.svelte";
  import Tweet from "$lib/tweet.svelte";

  let trendsArray: TREND[] = generateRandomTrends()
  let tweets: TWEET[] = generateRandomTweets()

	/**
 * Multiply Math.random() with the range, then sum by the minimum of the range, an adjuster, all inside a Math.floor()
 * @param range The range of the random number, the maximum
 * @param adjuster The minimum of the range
 * @returns A random number
 */
	function random (range: number, adjuster = 0)
	{
		return Math.floor(Math.random() * range + adjuster)
	}

	/**
	 * Returns a random string
	 * @param stringLength The string length
	 */
	function randomString (stringLength: number)
	{
		let newString = ''
		let stringIndex = 0
		while (stringIndex <= stringLength) {
			const initialCharacter = 'aA'.charCodeAt(random(1))
			let newCharacter = String.fromCharCode(initialCharacter + random(stringLength))
			newString += newCharacter
			stringIndex += 1
		}
		return newString
	}

	/**
	 * Returns a trend with random properties
	 */
	function generateRandomTrend ()
	{
		let newTrend: TREND = {
			trendIn: randomString(random(14, 6)),
			trendName: randomString(random(14, 6)),
			tweetsLength: new Intl.NumberFormat('en', {notation: "compact"}).format(random(200000))
		}
		return newTrend
	}

	/**
	 * Returns an array of trends with random properties
	 */
  function generateRandomTrends ()
  {
		let trends: TREND[] = []
		let trendsLength = random(10, random(2, 1))
		let trendsIndex = 0
		while (trendsIndex <= trendsLength) {
			let newTrend = generateRandomTrend()
			trends.push(newTrend)
			trendsIndex += 1
		}
		return trends
  }

	/**
	 * Returns a tweet with random properties
	 */
	function generateRandomTweet ()
	{
		let newTweet: TWEET = {
			autorName: randomString(random(13, 7)),
			autorNickname: randomString(random(13, 7)),
			tweet: randomString(random(40, 3))
		}
		return newTweet
	}

	/**
	 * Returns an array of tweets with random properties
	 */
	function generateRandomTweets ()
	{
		let tweets: TWEET[] = []
		let tweetsLength = random(5, random(2, 1))
		let tweetsIndex = 0
		while (tweetsIndex <= tweetsLength) {
			let newtweet = generateRandomTweet()
			tweets.push(newtweet)
			tweetsIndex += 1
		}
		return tweets
	}
</script>

<h1>Twitter main page clon</h1>

<div class="content-container">
	{#each trendsArray as trend}
		<Trend
		trendIn={trend.trendIn}
		trendName={trend.trendName}
		tweetsLength={trend.tweetsLength} />
	{/each}

	{#each tweets as tweet}
		<Tweet
		autorName={tweet.autorName}
		autorNickname={tweet.autorNickname}
		tweet={tweet.tweet} />
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		font-size: 4vmax;
		margin: 1vmax;
	}

	.content-container {
		max-width: fit-content;
		border-style: solid;
		border-color: gray;
		border-width: 0.1vmax;
		margin-left: auto;
		margin-right: auto;
	}
</style>