import { Template } from 'meteor/templating'
import survey from '../../../fixtures/survey'
import './survey.scss'
import './survey.html'

const { title, intro, questions, groups, none } = survey

Template.survey.onCreated(function () {
  const instance = this
  instance.state.set('currentIndex', null)
  instance.state.set('answers', [])

  instance.autorun(() => {
    const index = instance.state.get('currentIndex')
    if (index === null) return

    const page = index + 1
    const maxPages = questions.length
    const progress = 100 * (page / (maxPages + 1))
    const showIntro = index === -1
    const currentQuestion = questions[index]
    const isLast = page === maxPages
    instance.state.set({ page, maxPages, progress, hasNext: false, showIntro, isLast, currentQuestion })
  })

  // starts the autorun routine above
  instance.state.set('currentIndex', -1)
})

Template.survey.helpers({
  title () {
    return title
  },
  intro () {
    return intro
  },
  showIntro () {
    return Template.getState('showIntro')
  },
  progress () {
    return Template.getState('progress')
  },
  currentQuestion () {
    return Template.getState('currentQuestion')
  },
  page () {
    return Template.getState('page')
  },
  maxPages () {
    return Template.getState('maxPages')
  },
  hasNext () {
    return Template.getState('hasNext')
  },
  hasFinish () {
    return Template.getState('hasFinish')
  },
  isComplete () {
    return Template.getState('isComplete')
  },
  scores () {
    return Template.getState('scores')
  },
  finalResult () {
    return Template.getState('finalResult')
  }
})

Template.survey.events({
  'click .start-button' (event, templateInstance) {
    event.preventDefault()
    templateInstance.state.set('currentIndex', 0)
  },
  'click .next-button' (event, templateInstance) {
    event.preventDefault()
    const value = templateInstance.state.get('value')
    const index = templateInstance.state.get('currentIndex')
    const answers = templateInstance.state.get('answers')
    answers.push(value)

    templateInstance.state.set({ currentQuestion: null })

    setTimeout(() => {
      templateInstance.state.set({
        value: null,
        currentIndex: index + 1,
        answers: answers,
        hasNext: false
      })
    }, 500)
  },
  'click .finish-button' (event, templateInstance) {
    event.preventDefault()

    const value = templateInstance.state.get('value')
    const index = templateInstance.state.get('currentIndex')
    const answers = templateInstance.state.get('answers')
    answers.push(value)

    const maxScore = questions.length
    const scores = groups.map(g => {
      g.score = 0
      g.progress = 0
      return g
    })

    answers.forEach(value => {
      const index = Number.parseInt(value, 10)
      scores[index].score++
      scores[index].progress = ((scores[index].score) / maxScore) * 100
    })

    // get highest
    let highest = 0
    scores.forEach(res => {
      if (res.score > highest) highest = res.score
    })

    let highestCount = 0
    let finalResult = none
    scores.forEach(res => {
      if (res.score === highest) {
        highestCount++
        finalResult = res
      }
    })

    if (highestCount > 1) finalResult = none


    templateInstance.state.set({
      currentQuestion: null,
      currentIndex: index + 1,
      isComplete: true,
      hasFinish: false,
      scores: scores,
      finalResult: finalResult
    })

  },
  'change input' (event, templateInstance) {
    event.preventDefault()
    const { value } = event.currentTarget
    const isLast = templateInstance.state.get('isLast')

    templateInstance.state.set({ hasNext: !isLast, hasFinish: isLast, value })
  }
})