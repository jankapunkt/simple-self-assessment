export default {
  _id: 'mySurvey1',
  title: 'YOUR ESCAPE CLAN PSYCHO ASSESSMENT',
  intro: 'You are Afika, a young fisherman from a village that is doomed with poverty and poor crop.It\'s a day like any other and you got up early to get to the river. Click on the screen below to learn more about his life. Click "Start now" (at the bottom) to begin the assessment.',
  groups: [
    {
      title: 'Jolly Jumpers',
      color: 'warning',
      image: 'yellow.png',
      description: 'Jolly Jumpers Clan',
      details: 'You are now a member of the "Jolly Jumpers". No matter what happens, you always find a joyful way to "prank" yourself out of the situation.'
    },
    {
      title: 'Ruff Rebels',
      color: 'danger',
      image: 'red.png',
      description: 'Ruff Rebels Clan',
      details: 'You are now a memeber of the notorious "Ruff Rebels". It\'s members are known for their boldness, powerfullness and their pride.'
    },
    {
      title: 'Soft Skillers',
      color: 'success',
      image: 'green.png',
      description: 'Soft skillers Clan',
      details: 'You are now a member of the warm hearted "Soft Skillers". Your charity and caring and big circles of friends is well known everywhere.'
    },
    {
      title: 'Able Analysts',
      color: 'primary',
      image: 'blue.png',
      description: 'Able Analysts Clan',
      details: 'You are now a member of the "Able Anaysts" clan. There is no known riddle that they weren\'t able to solve.'
    },
  ],
  none: {
    title: 'Multiple',
    color: 'secondary',
    description: 'You are in multiple categories',
    details: 'You have two or more categories with the highest rating'
  },
  questions: [
    {
      id: '432454356',
      title: 'Decision time!',
      shuffle: true,
      description: ' What was it again why you want to go to the river? ',
      answers: [
        { value: 0, label: 'Go swimming in the warm and clear water' },
        { value: 1, label: 'Go fishing to provide food for the day ' },
        { value: 2, label: 'Get new water for the village ' },
        { value: 3, label: 'Inspect the reservoir dam' },
      ]
    },
    {
      id: 'dsf34g43rge',
      title: 'Decision time!',
      shuffle: true,
      description: 'You find a mysterious egg, what do you do?',
      answers: [
        { value: 0, label: 'Examine it, lick it and play with it.' },
        { value: 1, label: 'Check if it is valuable and has a use. ' },
        { value: 2, label: 'Take it to the village, keep it warm and look for the parents' },
        { value: 3, label: 'Touch it with a stick and test for danger.' },
      ]
    },
    {
      id: 't35gt45u5',
      title: 'Decision time!',
      shuffle: true,
      description: 'The egg talks to you. It will grant you a wish if you take it to the sacred hole. How do you take it to the hole?',
      answers: [
        { value: 0, label: 'You put it in your backpack and just start walking.' },
        { value: 1, label: 'You take the path across the river and hit the crocodiles in the face with the paddle.' },
        { value: 2, label: 'You call the monkeys with a whistle and ask for their help.' },
        { value: 3, label: 'You consult a map and choose the shortest and safest way.' },
      ]
    },
    {
      id: 't35gt45u5',
      title: 'Decision time!',
      shuffle: true,
      description: 'On the way, the egg asks for your wish.  What do you wish for? ',
      answers: [
        { value: 0, label: 'You never want to have to work again.' },
        { value: 1, label: 'You want to become the mayor of the village in order to implement your ideas for a good life together. ' },
        { value: 2, label: 'You see a great opportunity to provide for your village and wish for a good harvest.' },
        { value: 3, label: 'You wish you could predict the weather accurately. ' },
      ]
    },
    {
      id: 't35gt45u5',
      title: 'Decision time!',
      shuffle: true,
      description: 'You are close to the village and your brother appears. He talks to you with an angry voice: "I saw you brother and I know what the Egg said. Don\'t bring it to them. They don\'t deserve it! I can\'t proof it but I am sure they killed father for the poor crops last year". How do you persuade your brother that bringing the Egg to the village is the right thing?  ',
      answers: [
        { value: 0, label: 'We can use the Egg\'s power to reveal how our father died' },
        { value: 1, label: 'We can use it to punish those who killed our father' },
        { value: 2, label: 'We are fair, we share, no matter what they did. We will always remain good. ' },
        { value: 3, label: 'Let\'s do a pro-contra list.' },
      ]
    },
  ]
}
