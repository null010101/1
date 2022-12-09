// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

interface TREND {
	trendIn: string,
	trendName: string,
	tweetsLength: string
}

// autorImage, autorName, autorNickname, tweet
interface TWEET {
	tweet: string,
	autorName: string,
	autorNickname: string
}