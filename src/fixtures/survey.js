export default {
  _id: 'mySurvey1',
  title: 'My survey',
  intro: 'This is the intro',
  groups: [
    {
      title: 'A',
      color: 'success',
      description: 'You are group A',
      details: 'You are...'
    },
    {
      title: 'B',
      color: 'info',
      description: 'You are group B',
      details: 'You are...'
    },
    {
      title: 'C',
      color: 'warning',
      description: 'You are group C',
      details: 'You are...'
    },
    {
      title: 'D',
      color: 'danger',
      description: 'You are group D',
      details: 'You are...'
    },
  ],
  none: {
    title: 'None',
    color: 'secondary',
    description: 'You are none of these',
    details: 'You have two or more categories with the highest rating'
  },
  questions: [
    {
      id: '432454356',
      title: 'q1 title',
      shuffle: true,
      description: 'this is the description',
      answers: [
        { value: 0, label: 'Answer A' },
        { value: 1, label: 'Answer B' },
        { value: 2, label: 'Answer C' },
        { value: 3, label: 'Answer D' },
      ]
    },
    {
      id: 'dsf34g43rge',
      title: 'q2 title',
      shuffle: true,
      description: 'this is the description',
      answers: [
        { value: 0, label: 'Answer 2A' },
        { value: 1, label: 'Answer 2B' },
        { value: 2, label: 'Answer2 C' },
        { value: 3, label: 'Answer2 D' },
      ]
    }
  ]
}
