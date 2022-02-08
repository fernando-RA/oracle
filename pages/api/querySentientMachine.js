export default async function handler(req, res) {
    const { handle } = req.body;
  
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    try {
      const response = await fetch(
        `https://api.twitter.com/2/users/by?usernames=${handle}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      
      const { data } = await response.json();
      const userIdFromHandle = data[0].id;
      const tweets = await fetch(
        `https://api.twitter.com/2/users/${userIdFromHandle}/tweets?tweet.fields=public_metrics&max_results=100&exclude=retweets,replies`,
        {
          method: "GET",
          headers: {
            "User-Agent": "v2UserLookupJS",
            authorization: `Bearer ${bearerToken}`,
          },
        }
        );
        const tweetsData = await tweets.json();
      const compare = (a, b) => {
        const scoreA =
        a.public_metrics.like_count +
          a.public_metrics.retweet_count +
          a.public_metrics.reply_count +
          a.public_metrics.quote_count;
  
        const scoreB =
          b.public_metrics.like_count +
          b.public_metrics.retweet_count +
          b.public_metrics.reply_count +
          b.public_metrics.quote_count;
  
        if (scoreA > scoreB) {
          return -1;
        }
        if (scoreA < scoreB) {
          return 1;
        }
        return 0;
      };
  
      const sortedByScore = tweetsData.data.sort(compare);
  
      res.status(200).json({ sortedByScore });
    } catch (e) {
      console.log(e, "error");
      res.status(400).json({ message: "error" });
    }
  }