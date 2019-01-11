export const toggleAccordion = element => {
  const accordion = element.target.closest('.card')
  const target = element.target.closest('[aria-controls]')

  if (target) {
    accordion.classList.toggle('is-active')
  }
}
