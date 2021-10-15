const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

    // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = ['A friend is a present you give yourself.',
          'Accept something that you cannot change, and you will feel better.',
          'All your hard work will soon pay off.',
          'Dedicate yourself with a calm mind to the task at hand.',
          'Failure is the chance to do better next time.'
]

  let randomIndexTwo = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndexTwo]

  res.status(200). send(randomFortune)
})

const horoscopes = ['Cupid may have struck you unawares. You look and feel great.',
            'Today you may come down from your recent high with a thud. Tomorrow is another day.',
            'Today may be taken up with doing a lot of last-minute errands. Try and make relaxation a priority.',
            'You\'ll be back on track soon. Cash will begin flowing again and your lifestyle won\'t suffer.',
            'If you have the urge to go off by yourself for a while, do so. Try a new diversion.',
            'Today would be a good day to get ready by tidying up the house and getting your brain in gear.',
            'You may be experiencing a wonderful openness to new ideas and grand plans. Trust in your self-awareness and confidence.',
            'If you\'re feeling restless today, don\'t fight it. Use your energy to do something physical.',
            'It\'s fine to fantasize about all the choices out there, but don\'t commit to anything today.',
            'This would be a good day to pursue some new interests.',
            'You probably need a break from everyone. Why not get a massage and float away for a while?',
            'The main things you need to do today are relax and enjoy your day.'
]

app.get('/api/horoscopes/:id', (req, res) => {
  // console.log(req.params)
  const quote = horoscopes[+req.params.id]

  res.status(200).send(quote)
})

app.listen(4000, () => console.log("Server running on 4000"));
