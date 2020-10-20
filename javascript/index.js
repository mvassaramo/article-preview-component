const shareButton = document.querySelector('.share-button')
const shareOptions = document.querySelector('.share-options')

const hideShareOptions = () => {
  console.log('hide options!')
}

const toggleShareOptions = () => {
  shareOptions.classList.toggle("visible")
}

shareButton.addEventListener('click', event => {
  toggleShareOptions()
});

document.addEventListener('click', event => {
  hideShareOptions()
});