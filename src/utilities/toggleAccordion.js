export const toggleAccordion = element => {
  const accordion = element.target.closest('.accordion')
  const target = element.target.closest('[aria-controls]')

  if (target) {
    accordion.classList.toggle('is-active')
  }
}
